import { Types } from "../types";
import { CreateRequestOptions } from "./axios";
import { RequestCore } from "./request";

export class Config implements CreateRequestOptions {
  public readonly request: RequestCore;
  private options: Types.ReqConfig;
  public constructor(options: Types.ReqConfig, isSSR = false) {
    this.options = options;
    this.request = new RequestCore(this, isSSR);
    if (process.env.VUE_ENV !== "server") {
      throw new TypeError("This program is only allowed to be executed on the server side");
    }
  }
  public get PROJECT_NAME() {
    return this.options.PROJECT_NAME;
  }
  public get RUN_ENV() {
    return this.options.RUN_ENV;
  }
  public get DEPLOY() {
    return this.options.DEPLOY;
  }
  public get LANG() {
    return this.options.LANG;
  }
  public get BASE_API() {
    return this.options.SERVER_BASE_API;
  }
  public get accept() {
    return this.options.accept;
  }
  public get req() {
    return this.options.req;
  }
}
