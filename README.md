### 添加测试
* 安装 `vue add unit-jest`
* 问题
    * jest 默认识别 CommonJS, lodash-es 是 esmodule, 需要在 jest.config.js 添加忽略 transformIgnorePatterns

### husky
* 安装 `cnpm install husky@4 --save-dev`
* 配置修改 package.json
```json
{
    "husky": {
        "hooks": {
            "pre-commit": "npm run lint && npm run test",
            "pre-push": "npm run lint"
        }
    }
}
```
