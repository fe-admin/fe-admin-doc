# 介绍

[Fe-Admin](https://github.com/fe-admin/fe-admin) 是一个前端中台解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element) 实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

## 系统演示

🏠 [系统演示](http://fe-admin.github.io)

## 功能

> 功能基于业务需求逐步添加中

```
- 登录 / 注销
- 仪表盘
- 列表
  - 查询表格
- 消息系统
  - 站内信
  - 消息订阅
  - 消息类型
- 异常
  - 403
  - 404
  - 500
- 结果页面
  - 成功
  - 失败
- 图形编辑器
  - paper标注
- 权限配置
  - 页面权限
  - 指令权限
- 多环境发布
  - dev prod
- 全局功能
  - 动态侧边栏
  - 动态面包屑
  - SvgIcon
  - mock 数据
  - 自适应收缩侧边栏
```

## 目录结构

```sh
├── dist                       # 构建相关
├── mock                       # mock数据
├── public                     # 静态资源
│   │── favicon.png            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── config                 # 全局配置相关
│   ├── layout                 # 全局 layout
│   ├── mixins                 # mixin混入
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── types                  # typescript类型
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   └── permission.ts          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.json             # eslint 配置项
├── .eslintignore              # eslint 忽略配置
├── babel.config.js            # babel-loader 配置
├── package.json               # package.json
├── report.html                # eslint检测输出文件
├── postcss.config.js          # postcss 配置 默认为vue-cli配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置
```

## 安装运行

```sh
npm i
#或者
yarn

#App running at:
# - Local:   http://localhost:8080/
# - Network: http://172.16.1.166:8080/
```

## 浏览器支持

> Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

| 现代浏览器 | IE 浏览器                                                 |
| ---------- | --------------------------------------------------------- |
| 支持       | IE11, Edge(IE10 需修改 browserslist IE9 需 fix flex 布局) |

## 贡献

本文档项目地址 [fe-admin-doc](https://github.com/fe-admin/fe-admin-doc) 。
有任何修改和建议都可以该项目 pr 和 issue
fe-admin 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和反馈。

## 捐赠

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示[鼓励 ❤️](/donate/)
