import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IncomingMessage } from "http";

import { Types } from "../types";
import { getLanguageConfig } from "./language-config";

declare module "axios" {
  export interface AxiosRequestConfig {
    _startTime?: number;
  }
}
const isAbsoluteURL = (url: string) => {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

const buildUrl = (config: AxiosRequestConfig) => {
  const url = config.url || "";
  const baseURL = config.baseURL || "";
  let href = ""; // (config.baseURL || '') + config.url;
  if (isAbsoluteURL(url)) {
    href = url;
  } else {
    href = baseURL + url;
  }
  if (typeof config.params === "object") {
    const arr: string[] = [];
    Object.keys(config.params).forEach((k) => {
      arr.push(`${k}=${config.params[k]}`);
    });
    if (href.lastIndexOf("?") === -1) {
      href += "?";
    }
    if (["&", "?"].indexOf(href.charAt(href.length - 1)) === -1) {
      href += "&";
    }
    href += arr.join("&");
  }

  return href;
};

const compatibleTypes = [
  {
    key: "code",
    values: ["code", "Code", "Status"],
  },
  {
    key: "message",
    values: ["message", "Message"],
  },
  {
    key: "data",
    values: ["data", "Data", "Result"],
  },
];

const setLoggerText = (
  config: AxiosRequestConfig,
  status: number,
  code: number,
  message: string | null,
  req: IncomingMessage,
) => {
  if (process.env.VUE_ENV === "server" && config && config._startTime) {
    const method = config.method || "";
    const arr: string[] = [
      `axios ${method} ${buildUrl(config)}`,
      `${Date.now() - config._startTime}ms`,
      String(status),
      String(code),
    ];
    if (message) {
      arr.push(`\n\r${message}`);
    }
    req.$log(arr.join(" "));
  }
};

let httpAgent: any;
if (process.env.VUE_ENV === "server") {
  const http = require("http");
  httpAgent = new http.Agent({ keepAlive: true });
}

export interface CreateRequestOptions {
  readonly PROJECT_NAME: string;
  readonly RUN_ENV: Types.RunEnv;
  readonly DEPLOY: Types.Deploy;
  readonly BASE_API: string;
  readonly LANG: Types.Lang;
  readonly accept: string;
  readonly req?: IncomingMessage;
}

function mergeAccept(accept: string) {
  const arr = accept.split(",").filter((text) => !!text);
  arr.unshift("application/json", "text/plain");
  arr.push("*/*");
  return arr.join(",");
}

export const createRequest = (opts: CreateRequestOptions, isSSR = true): AxiosInstance => {
  const headers: { [x: string]: string | string[] } = {
    accept: mergeAccept(opts.accept),
  };
  const req = opts.req;
  if (req) {
    const exclude = ["host", "connection", "accept-encoding", "if-none-match", "sec-fetch"];
    Object.keys(req.headers).forEach((k) => {
      if (exclude.indexOf(k) > -1) return;
      const v = req.headers[k];
      headers[k] = String(v);
    });
    Object.assign(headers, {
      "ssr-project-name": opts.PROJECT_NAME,
      "ssr-run-env": opts.RUN_ENV,
      "ssr-deploy": opts.DEPLOY,
    });
    if (process.env.SHOW_LOG === "true") {
      req.$log(`Axios set headers: ${JSON.stringify(headers)}`);
    }
  }

  const options: AxiosRequestConfig = {
    timeout: req ? 500 : 10000,
    withCredentials: true,
    validateStatus: () => true,
    httpAgent,
    baseURL: opts.BASE_API,
  };

  const request = axios.create(options);

  request.interceptors.request.use((axiosConfig) => {
    axiosConfig._startTime = Date.now();
    axiosConfig.headers = Object.assign(axiosConfig.headers || {}, headers);
    return axiosConfig;
  });
  request.interceptors.response.use(
    async (axiosConfig) => {
      const res = {
        code: 0,
        data: null,
        message: "",
      };
      const data = axiosConfig.data;
      const status = axiosConfig.status;
      /**
       * 对数据，进行标准化处理
       */
      if (typeof data === "object") {
        let btn = false;
        compatibleTypes.forEach((item) => {
          item.values.forEach((value) => {
            if (value in data) {
              // @ts-ignore
              res[item.key] = data[value];
              btn = true;
            }
          });
        });
        // 如果响应体，直接就是数据，则强行包装一层
        if (!btn) {
          res.code = 0;
          res.message = "";
          res.data = data;
        }
      } else {
        res.code = status;
      }
      if (!res.message) {
        if (status >= 500) {
          res.message = getLanguageConfig(opts.LANG).serviceError + `(${status})`;
        } else if (status >= 400) {
          res.message = getLanguageConfig(opts.LANG).error + `(${status})`;
        } else {
          res.message = `Code is ${res.code}${status}`;
        }
      }
      if (process.env.VUE_ENV === "server" && isSSR) {
        if (req && (status < 200 || status >= 400)) {
          const { url = "" } = axiosConfig.config;
          const text = [
            opts.PROJECT_NAME,
            opts.DEPLOY,
            req.url,
            String(res.code),
            String(status),
            buildUrl(axiosConfig.config),
            req.headers["referer"] || "",
          ].join(" ");
          req.$log(text);
          const whiteList: string[] = ["/api/v1/pro/user/userInfo"];
          if (![401, 403].includes(status) && !whiteList.includes(url)) {
            req.$sendDingTalkAlarm(text);
          }
        }
      }
      axiosConfig.data = res;
      setLoggerText(axiosConfig.config, axiosConfig.status, res.code, null, opts.req!);
      return Promise.resolve(axiosConfig);
    },
    (err: any) => {
      const res: any = {
        code: -10001,
        data: null,
        message: getLanguageConfig(opts.LANG).error,
      };
      err.data = res;
      setLoggerText(err.config, err?.status, res.code, err.message, opts.req!);
      return Promise.resolve(err);
    },
  );
  return request;
};
