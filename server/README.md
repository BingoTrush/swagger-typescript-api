# Service

[Github](https://github.com/BingoTrush/swagger-typescript-api)

## 开发说明

1. 打开新的终端,执行一下命令：
  
```js
  cd ./server
  yarn && yarn dev
```

2. Mock服务已启动完成 port:8000
   - mock 接口api地址 自定生成, 生成方式:
        BASE_URL + json 文件的文件名
   - 具体路径看 控制台打印 输出[关联文件](./mock/swagger-test/index.ts)
  
3. 切换到另一个终端, 执行命令:
```js
  yarn
  npx swagger-typescript-api -p http://127.0.0.1:8000/swagger/docs/v1/crm-identity-v1
```

4. 执行 3 后，将在跟目录，依据 [crm-identity-v1](./mock/swagger-test/crm-identity-v1.json) 
   swagger 数据格式,自动生成输出[API文件](../Api.ts)


## 特别说明
- master 分支: 完整版本
- feat-pure 分支: 移除单元测试相关的所有内容