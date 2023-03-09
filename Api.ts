/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddRoleRequest {
  /**
   * åå­
   * @maxLength 64
   */
  name: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  apiPermissionIds?: number[] | null;
  uiPermissionIds?: number[] | null;
}

export interface ChangePasswordRequest {
  verityCodeType?: VerityCodeType;
  ticket: string;
  /** æ°å¯ç  */
  newPassword: string;
}

export interface CheckPermissionRequest {
  /** æéåç§° */
  name?: string | null;
  type?: PermissionType;
}

export interface GetBackEndPermissionDetailResponse {
  /**
   * å¦ææ¯æ´æ°å°±ä¸è¦ä¼ è¿ä¸ªå­æ®µ
   * @format int32
   */
  id?: number;
  /**
   * æéçåç§°ï¼å¯ä¸è¡¨ç¤ºï¼
   * @maxLength 64
   */
  name: string;
  /**
   * æéçè·¯ç±
   * @maxLength 256
   */
  route?: string | null;
  /**
   * æéçæ¾ç¤ºåç§°
   * @maxLength 64
   */
  displayName: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  /** å¾æ  */
  icon?: string | null;
  /** @format int32 */
  parentId?: number;
  system: string;
  type?: PermissionType;
  /**
   * æåº
   * @format int32
   */
  sort?: number;
  enable?: boolean;
  /** å³èçè§è² */
  relationRoles?: Record<string, string>;
  /** å³èçèå */
  relationMenus?: Record<string, string>;
}

export interface GetEmailTokenRequest {
  /** éªè¯ç  */
  code: string;
  /** æ¯å¦ä¿å­2æ¬¡æ ¡éªç¶æï¼ä¿¡ä»»å½åè®¾å¤ */
  isSaveSecondValidStatus?: boolean;
}

export interface GetFrontendPermissionDetailResponse {
  /**
   * å¦ææ¯æ´æ°å°±ä¸è¦ä¼ è¿ä¸ªå­æ®µ
   * @format int32
   */
  id?: number;
  /**
   * æéçåç§°ï¼å¯ä¸è¡¨ç¤ºï¼
   * @maxLength 64
   */
  name: string;
  /**
   * æéçè·¯ç±
   * @maxLength 256
   */
  route?: string | null;
  /**
   * æéçæ¾ç¤ºåç§°
   * @maxLength 64
   */
  displayName: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  /** å¾æ  */
  icon?: string | null;
  /** @format int32 */
  parentId?: number;
  system: string;
  type?: PermissionType;
  /**
   * æåº
   * @format int32
   */
  sort?: number;
  enable?: boolean;
  /** å³èçè§è² */
  relationRoles?: Record<string, string>;
  /** å³èçApi */
  relationApis?: RelationApiPermissionResponse[] | null;
}

export interface GetRoleDetailResponse {
  /** @format int32 */
  id?: number;
  /** åå­ */
  name?: string | null;
  /** æè¿° */
  description?: string | null;
  apiPermissions?: number[] | null;
  frontPermissions?: number[] | null;
  member?: any;
}

export interface LoginSecondValidStatus {
  /**
   * 1=å¿½ç¥äºæ¬¡æ ¡éªï¼2=éè¦äºæ¬¡æ ¡éª
   * @format int32
   */
  status?: number;
}

export interface MenuPermissionResponseItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enable?: boolean;
  system?: string | null;
  /** @format int32 */
  parentId?: number;
  route?: string | null;
  icon?: string | null;
}

export interface PermissionDto {
  /**
   * å¦ææ¯æ´æ°å°±ä¸è¦ä¼ è¿ä¸ªå­æ®µ
   * @format int32
   */
  id?: number;
  /**
   * æéçåç§°ï¼å¯ä¸è¡¨ç¤ºï¼
   * @maxLength 64
   */
  name: string;
  /**
   * æéçè·¯ç±
   * @maxLength 256
   */
  route?: string | null;
  /**
   * æéçæ¾ç¤ºåç§°
   * @maxLength 64
   */
  displayName: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  /** å¾æ  */
  icon?: string | null;
  /** @format int32 */
  parentId?: number;
  system: string;
  type?: PermissionType;
  /**
   * æåº
   * @format int32
   */
  sort?: number;
  enable?: boolean;
}

export interface PermissionDtoPageableResult {
  items?: PermissionDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

/** @format int32 */
export enum PermissionType {
  Value1Api = 1 - Api,
  Value2Data = 2 - Data,
  Value3UI = 3 - UI,
  Value4Menu = 4 - Menu,
}

export interface RelationApiPermissionResponse {
  isRequired?: boolean;
  apiPermission?: PermissionDto;
}

export interface RoleResponseItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  userCount?: number;
  /** @format int32 */
  permissionCount?: number;
  description?: string | null;
}

export interface RoleResponseItemPageableResult {
  items?: RoleResponseItem[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SaveFrontPermissionRelationApi {
  /** @format int32 */
  id?: number;
  apiRoute?: string | null;
  isRequired?: boolean;
}

export interface SaveFrontPermissionRequest {
  /**
   * å¦ææ¯æ´æ°å°±ä¸è¦ä¼ è¿ä¸ªå­æ®µ
   * @format int32
   */
  id?: number;
  /**
   * æéçåç§°ï¼å¯ä¸è¡¨ç¤ºï¼
   * @maxLength 64
   */
  name: string;
  /**
   * æéçè·¯ç±
   * @maxLength 256
   */
  route?: string | null;
  /**
   * æéçæ¾ç¤ºåç§°
   * @maxLength 64
   */
  displayName: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  /** å¾æ  */
  icon?: string | null;
  /** @format int32 */
  parentId?: number;
  system: string;
  type?: PermissionType;
  /**
   * æåº
   * @format int32
   */
  sort?: number;
  enable?: boolean;
  /** ä¸çº§è·¯ç±åç§° */
  parentName?: string | null;
  relationApis?: SaveFrontPermissionRelationApi[] | null;
}

export interface SetLoginSecondValidRequest {
  /** @format int32 */
  status?: number;
  code?: string | null;
}

export interface SignInRequest {
  /** ç¨æ·å */
  userName: string;
  /**
   * å¯ç 
   * @maxLength 20
   */
  password: string;
}

export interface SignInResponse {
  accessToken?: string | null;
  /** @format int32 */
  userId?: number;
  /** åå­ */
  userName?: string | null;
  /** å¤´åå°å */
  avatar?: string | null;
  menuPermissions?: MenuPermissionResponseItem[] | null;
  uiPermissions?: UIPermissionResponseItem[] | null;
  /** @format date-time */
  expires?: string;
}

export interface SimpleUpdateFrontPermissionRequest {
  /**
   * æéçåç§°ï¼å¯ä¸è¡¨ç¤ºï¼
   * @maxLength 64
   */
  name: string;
  relationApis?: SaveFrontPermissionRelationApi[] | null;
}

export interface UIPermissionResponseItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enable?: boolean;
  system?: string | null;
  /** @format int32 */
  parentId?: number;
  icon?: string | null;
}

export interface UpdateRoleRequest {
  /**
   * åå­
   * @maxLength 64
   */
  name: string;
  /**
   * æè¿°
   * @maxLength 256
   */
  description?: string | null;
  apiPermissionIds?: number[] | null;
  uiPermissionIds?: number[] | null;
  /** @format int32 */
  id?: number;
  members?: number[] | null;
}

/** @format int32 */
export enum VerityCodeType {
  Value1Mail = 1 - Mail,
  Value2Mobile = 2 - Mobile,
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Identity v1
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  iapi = {
    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthEmailsigninCreate
     * @summary email éªè¯ç ç´æ¥ç»å½
     * @request POST:/iapi/v1/identity/auth/emailsignin
     * @secure
     */
    v1IdentityAuthEmailsigninCreate: (data: GetEmailTokenRequest, params: RequestParams = {}) =>
      this.request<SignInResponse, any>({
        path: `/iapi/v1/identity/auth/emailsignin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthSendcodeCreate
     * @summary åééªè¯ç 
     * @request POST:/iapi/v1/identity/auth/sendcode
     * @secure
     */
    v1IdentityAuthSendcodeCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/auth/sendcode`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthSigninCreate
     * @summary ç³»ç»ç¨æ·ç»å¥
     * @request POST:/iapi/v1/identity/auth/signin
     * @secure
     */
    v1IdentityAuthSigninCreate: (data: SignInRequest, params: RequestParams = {}) =>
      this.request<SignInResponse, any>({
        path: `/iapi/v1/identity/auth/signin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthSignoutCreate
     * @summary éåºç»å½  æå¡ç«¯å é¤cookies
     * @request POST:/iapi/v1/identity/auth/signout
     * @secure
     */
    v1IdentityAuthSignoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/auth/signout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthGetloginuserinfoList
     * @summary è·åå½åç¨æ·ä¿¡æ¯
     * @request GET:/iapi/v1/identity/auth/getloginuserinfo
     * @secure
     */
    v1IdentityAuthGetloginuserinfoList: (params: RequestParams = {}) =>
      this.request<SignInResponse, any>({
        path: `/iapi/v1/identity/auth/getloginuserinfo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthGetloginusersimpleinfoList
     * @summary è·åå½åç¨æ·,æµç§°
     * @request GET:/iapi/v1/identity/auth/getloginusersimpleinfo
     * @secure
     */
    v1IdentityAuthGetloginusersimpleinfoList: (params: RequestParams = {}) =>
      this.request<SignInResponse, any>({
        path: `/iapi/v1/identity/auth/getloginusersimpleinfo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1IdentityAuthCheckpermissionCreate
     * @summary æ£æ¥ç¨æ·æ¯å¦æè¿ä¸ªæé
     * @request POST:/iapi/v1/identity/auth/checkpermission
     * @secure
     */
    v1IdentityAuthCheckpermissionCreate: (data: CheckPermissionRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/iapi/v1/identity/auth/checkpermission`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoginSecondValid
     * @name V1IdentityLoginsecondvalidLoginsecondvalidstatusList
     * @summary è·åå½åè®¾å¤,äºæ¬¡æ ¡éªç¶æ
     * @request GET:/iapi/v1/identity/loginsecondvalid/loginsecondvalidstatus
     * @secure
     */
    v1IdentityLoginsecondvalidLoginsecondvalidstatusList: (params: RequestParams = {}) =>
      this.request<LoginSecondValidStatus, any>({
        path: `/iapi/v1/identity/loginsecondvalid/loginsecondvalidstatus`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoginSecondValid
     * @name V1IdentityLoginsecondvalidSetloginsecondvalidstatusCreate
     * @summary è®¾ç½®å½åè®¾å¤ï¼äºæ¬¡æ ¡éªç¶æ
     * @request POST:/iapi/v1/identity/loginsecondvalid/setloginsecondvalidstatus
     * @secure
     */
    v1IdentityLoginsecondvalidSetloginsecondvalidstatusCreate: (
      data: SetLoginSecondValidRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/loginsecondvalid/setloginsecondvalidstatus`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name V1IdentityManagerPasswordResetCreate
     * @summary éç½®å¯ç 
     * @request POST:/iapi/v1/identity/manager/password/reset/{id}
     * @secure
     */
    v1IdentityManagerPasswordResetCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/manager/password/reset/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name V1IdentityManagerPasswordChangeCreate
     * @summary ç¨æ·ä¿®æ¹å¯ç 
     * @request POST:/iapi/v1/identity/manager/password/change
     * @secure
     */
    v1IdentityManagerPasswordChangeCreate: (data: ChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/manager/password/change`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name V1IdentityManagerAllList
     * @summary è·åç³»ç»ç¨æ·ä¸æåè¡¨
     * @request GET:/iapi/v1/identity/manager/all
     * @secure
     */
    v1IdentityManagerAllList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/manager/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name V1IdentityManagerRoleDetail
     * @summary æ ¹æ®ç¨æ·IDè·åè§è²
     * @request GET:/iapi/v1/identity/manager/role/{userId}
     * @secure
     */
    v1IdentityManagerRoleDetail: (userId: number, params: RequestParams = {}) =>
      this.request<RoleResponseItem[], any>({
        path: `/iapi/v1/identity/manager/role/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionBackendSaveCreate
     * @summary åç«¯æ·»å ææ´æ°æéé¡¹
     * @request POST:/iapi/v1/identity/permission/backend/save
     * @secure
     */
    v1IdentityPermissionBackendSaveCreate: (data: PermissionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/permission/backend/save`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendSaveCreate
     * @summary åç«¯æ·»å ææ´æ°æéé¡¹
     * @request POST:/iapi/v1/identity/permission/frontend/save
     * @secure
     */
    v1IdentityPermissionFrontendSaveCreate: (data: SaveFrontPermissionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/permission/frontend/save`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendSimpleupdateCreate
     * @summary ç®æä¿®æ¹åç«¯æé
     * @request POST:/iapi/v1/identity/permission/frontend/simpleupdate
     * @secure
     */
    v1IdentityPermissionFrontendSimpleupdateCreate: (
      data: SimpleUpdateFrontPermissionRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/permission/frontend/simpleupdate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendBatchsimpleupdateCreate
     * @summary æ¹éç®æä¿®æ¹åç«¯æé
     * @request POST:/iapi/v1/identity/permission/frontend/batchsimpleupdate
     * @secure
     */
    v1IdentityPermissionFrontendBatchsimpleupdateCreate: (
      data: SimpleUpdateFrontPermissionRequest[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/permission/frontend/batchsimpleupdate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendListList
     * @summary è·ååç«¯æé(type == menu || type == ui)
     * @request GET:/iapi/v1/identity/permission/frontend/list
     * @secure
     */
    v1IdentityPermissionFrontendListList: (params: RequestParams = {}) =>
      this.request<PermissionDto[], any>({
        path: `/iapi/v1/identity/permission/frontend/list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionBackendListList
     * @summary è·ååç«¯æé(type == data || type = api)
     * @request GET:/iapi/v1/identity/permission/backend/list
     * @secure
     */
    v1IdentityPermissionBackendListList: (
      query?: {
        /** æç´¢å³é®è¯ ï¼æ è¯ãåç§°ãè·¯ç±ï¼ */
        keyword?: string;
        /** @format int32 */
        pageIndex?: number;
        /** @format int32 */
        pageSize?: number;
        orderBy?: string;
        isDesc?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<PermissionDtoPageableResult, any>({
        path: `/iapi/v1/identity/permission/backend/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionDelCreate
     * @summary æ ¹æ®æéidå é¤æé
     * @request POST:/iapi/v1/identity/permission/del/{id}
     * @secure
     */
    v1IdentityPermissionDelCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/permission/del/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendDetailDetail
     * @summary è·ååç«¯èåè¯¦æ
     * @request GET:/iapi/v1/identity/permission/frontend/detail/{id}
     * @secure
     */
    v1IdentityPermissionFrontendDetailDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetFrontendPermissionDetailResponse, any>({
        path: `/iapi/v1/identity/permission/frontend/detail/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionFrontendDetailList
     * @summary æ ¹æ®æéåè·ååç«¯èåè¯¦æ
     * @request GET:/iapi/v1/identity/permission/frontend/detail
     * @secure
     */
    v1IdentityPermissionFrontendDetailList: (
      query?: {
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetFrontendPermissionDetailResponse, any>({
        path: `/iapi/v1/identity/permission/frontend/detail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name V1IdentityPermissionBackendDetailDetail
     * @summary è·ååç«¯æ¥å£è¯¦æ
     * @request GET:/iapi/v1/identity/permission/backend/detail/{id}
     * @secure
     */
    v1IdentityPermissionBackendDetailDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetBackEndPermissionDetailResponse, any>({
        path: `/iapi/v1/identity/permission/backend/detail/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleListList
     * @summary åé¡µè·åç³»ç»è§è²
     * @request GET:/iapi/v1/identity/role/list
     * @secure
     */
    v1IdentityRoleListList: (
      query?: {
        /** åå­ */
        name?: string;
        /** @format int32 */
        pageIndex?: number;
        /** @format int32 */
        pageSize?: number;
        orderBy?: string;
        isDesc?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<RoleResponseItemPageableResult, any>({
        path: `/iapi/v1/identity/role/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleAddCreate
     * @summary æ·»å è§è²
     * @request POST:/iapi/v1/identity/role/add
     * @secure
     */
    v1IdentityRoleAddCreate: (data: AddRoleRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/role/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleUpdateCreate
     * @summary ä¿®æ¹è§è²
     * @request POST:/iapi/v1/identity/role/update
     * @secure
     */
    v1IdentityRoleUpdateCreate: (data: UpdateRoleRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/role/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleDeleteCreate
     * @summary å é¤ç³»ç»è§è²
     * @request POST:/iapi/v1/identity/role/delete/{id}
     * @secure
     */
    v1IdentityRoleDeleteCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iapi/v1/identity/role/delete/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleDetailDetail
     * @summary è·åè§è²è¯¦æ
     * @request GET:/iapi/v1/identity/role/detail/{id}
     * @secure
     */
    v1IdentityRoleDetailDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetRoleDetailResponse, any>({
        path: `/iapi/v1/identity/role/detail/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name V1IdentityRoleAlllistList
     * @summary ææè§è²
     * @request GET:/iapi/v1/identity/role/alllist
     * @secure
     */
    v1IdentityRoleAlllistList: (params: RequestParams = {}) =>
      this.request<Record<string, string>, any>({
        path: `/iapi/v1/identity/role/alllist`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
