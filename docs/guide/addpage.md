---
title: 新增页面
---

# 新增页面
> 下面以增加基础表单页面为例做以下说明

- 1、首先@/view中添加对应的页面

```js
fe-admin/src/views/form/FormBase/index.vue
```
- 2、在路由表中添加路由关联

```js
// fe-admin/src/router/map-router.js
FormBase: () => import("@/views/form/FormBase")
```

- 3、在mock返回的路由信息中添加路由

```js
// fe-admin/mock/role.js
{
  path: "/form/base-form",
  name: "FormBase",
  meta: {
    title: "基础表单",
  },
}
```
- 4、完成
