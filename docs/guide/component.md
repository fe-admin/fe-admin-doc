---
title: 组件系统
---

# 组件系统

组件是对系统中常用的功能的一个抽象。

## 组件的依赖关系

```sh
├── FeLayout # 整体布局组件
│ ├── Header # Header组件
│ │    └── Logo # Logo组件
│ ├── Footers # Footer组件
│ ├── Aside # 侧边栏组件
│ ├── Breadcrumb # 面包屑组件
│ ├── FeResult # 结果页面组件
│ └── WithHeader # 自带面包屑组件
└── SvgIcon  # svg组件
```

## 使用说明

> 这些组件都独立于业务系统存在，有些组件业务代码根本不需要关注。

### FeLayout 组件

> 对外提供多个插槽

| 插槽名称           | 描述             |
| ------------------ | ---------------- |
| headerMenu         | 添加导航菜单     |
| headerRightContent | 右侧菜单的定制   |
| logo               | 默认 logo 的替换 |
| footer             | 底部内容替换     |
| asideTitle         | 侧边栏添加标题   |

> 接收多个属性

| 属性名称       | 描述                   |
| -------------- | ---------------------- |
| isCollapse     | 侧边栏展开状态         |
| menuData       | 路由数据               |
| menuId         | 当前菜单 ID            |
| toggleCollapse | 切换侧边栏展开状态回调 |
| updateMenuId   | 更新选中菜单的回调     |

### WithHeader 组件

> 该组件为当前页面默认添加基于路由层级生成的面包屑导航和页面标题

```html
<with-header>
  <template #content>
    页面导航下面可替换的区域一般为当前页面的描述信息
  </template>
  </div>
</with-header>

```

### FeResult 组件

```html
<fe-result status="状态" title="标题" sub-title="子标题">
  <!--
  默认都有图标显示 <svg-icon iconName={`fe-${status}`} />
  -->
  <template #extra>额外信息 </template>
</fe-result>
```
