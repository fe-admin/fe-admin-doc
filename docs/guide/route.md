---
title: 路由和侧边栏
---

# 路由和侧边栏

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，他们是一一对应的。所以你只要在 @/mock/role.js 下面配置对应的路由，侧边栏就能动态的生成了。大大减轻了手动重复编辑侧边栏的工作量。当然这样就需要在配置路由的时候遵循一些约定的规则。


## 配置项

> 以下以权限配置页面的路由加以说明

```json
{
    "name": "Permission",
    "path": "/permission/directive",
    "meta": {
      "title": "权限配置",// 一级导航标题
      "icon": "fe-permission",// 导航图标
    },
    "children": [
      {
        "path": "/permission/directive",
        "name": "PermissionDirective", 
        "meta": {
          "hidden": true,// 是否隐藏
          "title": "指令权限",// 二级导航标题
        },
      },
      {
        "path": "/permission/page",
        "name": "PermissionPage",
        "meta": {
          "title": "页面权限",
          "permission": ["admin"],// 路由权限
        },
      },
    ],
  },

```

## 路由

这里的路由分为两种

- constant-router

> 系统默认路由，如登录页、404

- async-router

> 需求动态添加的路由，一般可以作为接口返回的路由<b>本系统演示默认是[@/mock/role.js](https://github.com/fe-admin/fe-admin/blob/main/mock/role.js)返回路由信息</b>
