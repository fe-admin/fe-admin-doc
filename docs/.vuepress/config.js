module.exports = {
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
            ["first", "介绍"],
            ["layout", "布局"],
          ],
        },
        {
          title: "深入",
          collapsable: false,
          children: ["g2"],
        },
      ],
      "/donate/": [
        {
          title: "配置",
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
  configureWebpack: {
    outputDir: "doc",
    resolve: {
      alias: {
        "@alias": "/assets/images",
      },
    },
  },
  plugins: ["@vuepress/nprogress"],
};
