import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "新世纪计算机科学计划",
  description: "New Age Computer Science Project",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/序" },
    ],

    sidebar: [
      {
        text: "序",
        link: "/序",
      },
      {
        text: "C语言程序设计",
        items: [],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/joudermin/nacsp" },
    ],

    footer: {
      message: "Released under the CC-BY-NC-SA License.",
      copyright: "Copyright © 2023 Jouder Min",
    },
  },
  srcDir: "./doc",
  base: "/nacsp/",
});
