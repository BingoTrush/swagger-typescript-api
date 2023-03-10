import { Types } from "../types";

export const getLanguageConfig = (lang: Types.Lang) => {
  if (lang === "zh-CN") {
    return {
      error: "请求失败",
      serviceError: "服务错误",
    };
  }
  return {
    error: "Failed to request",
    serviceError: "Service error",
  };
};
