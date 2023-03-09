/* eslint-disable import/named */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

/**
 * 分页
 */
export namespace PAGE {
  export interface Pagination {
    pageIndex: number;
    pageSize: number;
  }

  export interface OrderBy {
    isDesc: boolean;
    orderBy: string;
  }

  export interface PageResult<T> {
    items: T[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
  }
}
