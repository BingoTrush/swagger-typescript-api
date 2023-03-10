import { AxiosInstance, AxiosRequestConfig } from "axios";
import { IncomingMessage } from "http";

import { Types } from "../types";
import { createRequest, CreateRequestOptions } from "./axios";
import { Config } from "./config";

export const createServerRequest = (req: IncomingMessage) => {
  const reqConfig = req.$reqConfig;
  const config = new Config(
    {
      ...reqConfig,
      req,
    },
    false,
  );

  return new Request(config);
};

const done = (r: AxiosRequestConfig) => {
  return r.data;
};

interface BaseConfig extends CreateRequestOptions {
  request: RequestCore;
}

export class RequestCore {
  protected axios: AxiosInstance;
  protected config: BaseConfig;
  public constructor(config: BaseConfig, isSSR = true) {
    this.config = config;
    this.axios = createRequest(this.config, isSSR);
  }
  public get interceptors() {
    return this.axios.interceptors;
  }

  public async get<D>(url: string, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.axios.get(url, config).then(done);
  }

  public async post<D>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.axios.post(url, data, config).then(done);
  }

  public async put<D>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.axios.put(url, data, config).then(done);
  }

  public async delete<D>(url: string, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.axios.delete(url, config).then(done);
  }
}

/**
 * 请求类，只是做了一层路径的压缩
 */
export class Request<T extends BaseConfig = BaseConfig> {
  public config: T;
  public constructor(config: T) {
    this.config = config;
  }

  public async get<D>(url: string, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.config.request.get<D>(url, config);
  }

  public async post<D>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.config.request.post<D>(url, data, config);
  }

  public async put<D>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.config.request.put<D>(url, data, config);
  }

  public async delete<D>(url: string, config?: AxiosRequestConfig): Promise<Types.Response.All<D>> {
    return this.config.request.delete<D>(url, config);
  }

  /**
   * 释放请求监听（未实现，可能也不打算实现）
   */
  public destroy() {}
}
