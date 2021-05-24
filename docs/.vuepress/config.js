module.exports = {
  title: "", // Title for the site. This will be displayed in the navbar.
  themeConfig: {
    logo: "/nav.png",
    sidebar: {
      "/guide/": [
        {
          title: "测试",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            ["page-a", "1"],
            ["guide", "2"],
            ["guide2", "3"],
          ],
        },
      ],
      "/config/": [
        {
          title: "配置",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            ["page-a", "1"],
            ["guide", "2"],
            ["guide2", "3"],
          ],
        },
      ],
    },
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/fe-admin" },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/assets/images",
      },
    },
  },
};
