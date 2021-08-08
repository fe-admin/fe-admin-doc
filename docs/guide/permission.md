---
title: 权限验证
---

# 权限验证

## 用户角色
> 用户登录后获取当前用户的角色信息，一个用户被支持多重角色；
```json
{
  "accountName": "admin",
  "roles": ["admin", "user"],
  "token": "d84cCAd0-f5bA-Cf28-3B3E-8e2Bc5DB2912",
  "uid": "E77Bb4F7-e3ce-EDC1-37C1-cE42b2FF81F2"
}
```

## 页面权限
页面权限是和路由定义绑定的，这里的permission的值就是相应的用户角色。
> 只有相应角色的路由才会被注册，如不指定“permission”则所以用户都可以看到。
```js
"permission": ["admin"],// 路由权限
```
## 指令权限
> 只有相应角色的用户才可以看到相应的元素或者组件

```js
 v-permission="['admin']"
 ```