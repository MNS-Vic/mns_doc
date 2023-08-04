const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MNS Doc",
  tagline: "MNS Documents",
  url: "https://doc.mixin.domains",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: "MNS", // Usually your GitHub org/user name.
  projectName: "www.mixin.domains", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    algolia: {
      apiKey: "2d81009f52b49499743802eeeecf11",
      indexName: "mns",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: "3K3D3FYNPZ",
    },

    navbar: {
      title: "用户手册",
      logo: {
        alt: "mns",
        src: "images/logo.png",
      },
      items: [],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebar.docs.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
