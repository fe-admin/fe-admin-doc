const path = require("path");
module.exports = {
  base: "/docs/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "fe-admin", // Title for the site. This will be displayed in the navbar.
  themeConfig: {
    smoothScroll: true,
    logo: "/nav.png",
    sidebar: {
      "/guide/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            "first",
            "layout",
            "component",
            "route",
            "permission",
            "page",
            "api",
          ],
        },
        {
          title: "深入",
          collapsable: false,
          children: ["first"],
        },
      ],
      "/donate/": [
        {
          title: "",
        },
      ],
    },
    nav: [
      { text: "指南", link: "/guide/first" },
      { text: "系统演示", link: "https://fe-admin.github.io" },
      { text: "捐赠", link: "/donate/" },
      { text: "GitHub", link: "https://github.com/fe-admin" },
    ],
  },
  plugins: ["@vuepress/nprogress"],
};
