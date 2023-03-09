// import { success } from "../../utils/res-builder";

const find = require("find");
const path = require("path");

const Filelist = find.fileSync("./mock/swagger-test");

const express = require("express");

const router = express.Router();

const BASE_URL = "/swagger/docs/v1";

/**
 * 获取当前目录下所有 json 文件地址
 */
const jsonList = Filelist.filter((fullPath: string) => {
  return /.json$/.test(fullPath);
});

/**
 * 解析文件名称
 *
 * 依据文件名称,配置 子级 接口地址 & 响应数据
 * @param fullPath 文件地址
 * @returns
 */
const getInfoByFilePath = (fullPath: string): { api: string; resJsonPath: string } => {
  if (fullPath.includes("/")) {
    const paths = fullPath.split("/");

    const fileName = paths.pop();

    const name = fileName.split(".")[0];

    const info = {
      api: `/${name}`,
      resJsonPath: `./${fileName}`,
    };

    console.log(`
>>>>> 自动注册接口 & 响应数据 <<<<<
接口地址: ${BASE_URL}${info.api}
响应地址: ${path.join(__dirname, info.resJsonPath)}
    `);

    return info;
  }

  return {
    api: `/${fullPath.split(".")[0]}`,
    resJsonPath: `./${fullPath}`,
  };
};

jsonList.forEach((fullPath: string) => {
  const info = getInfoByFilePath(fullPath);

  router.get(info.api, (req, res, next) => {
    res.json(require(info.resJsonPath));
  });
});

export { BASE_URL };

export default router;
