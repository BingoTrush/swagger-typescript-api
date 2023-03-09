/**
 * 性别
 */
export enum GENDER {
  FEMAIL = 0,
  MAIL = 1,
}

/**
 * 用户状态
 *
 * 1:正常 2: 禁用 3: 注销
 */
export enum USER_STATUS {
  DEMO = 0,
  NORMAL = 1,
  DISABLED = 2,
  CANCEL = 3,
}

export enum DETAIL_ACCOUNT_TYPE {
  DEMO = 0,
  API = 1,
  SAM = 2,
  MAM = 3,
  PRO = 4,
}

/**
 * 账户类型
 *
 * 1:交易员 2: 跟随着
 */
export enum ACCOUNT_TYPE {
  DEMO = 0,
  TRADER = 1,
  FOLLOWER = 2,
}

/**
 * 标签 枚举
 *
 * 1: 个人   2: 公共    3: 系统
 */
export enum TAG_OWNER_TYPE {
  CUSTOMIZE = 1,
  PUBLIC = 2,
  SYSTEM = 3,
}

/**
 * 列表关键词的查询类型
 *
 * 1: 手机号
 * 2: 邮箱
 * 3: 昵称
 *
 * 4: 真实姓名
 * 5: 用户ID
 * 6: MT4账号
 *
 * 7: 存款单号
 * 8: 取款单号
 * 9: 交易单号
 */
export enum SEARCH_TYPE {
  Phone = 1,
  Email = 2,
  NickName = 3,
  RealName = 4,
  UID = 5,
  MT4 = 6,
  Deposit = 7,
  Withdrawal = 8,
  Trade = 9,
}
