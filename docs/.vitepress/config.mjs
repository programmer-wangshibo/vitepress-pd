import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "桃乃木の前端",
  description: "最爱桃乃木の前端",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo:'../public/logo.jpg',
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "vue", link: "/vue/index" },
      { text: "js", link: "/js/index" },
      { text: "css", link: "/css/index" },
    ],
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      "/vue/": [
        {
          text: "vue",
          collapsed: false,
          items: [
            { text: "Index", link: "/vue/" },
            { text: "One", link: "/vue/vue1" },
          ],
        },
      ],
      "/js/": [
        {
          text: "js",
          collapsed: false,
          items: [
            { text: "Index", link: "/js/" },
            { text: "One", link: "/js/js1" },
          ],
        },
      ],
      "/css/": [
        {
          text: "css",
          collapsed: false,
          items: [
            { text: "Index", link: "/css/" },
            { text: "One", link: "/css/css1" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
