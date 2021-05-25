module.exports = {
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "fe-admin", // Title for the site. This will be displayed in the navbar.
  themeConfig: {
    logo: "/nav.png",
    sidebar: {
      "/guide/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            ["base/base", "介绍"],
            ["guide", "1"],
          ],
        },

        {
          title: "介绍",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
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
