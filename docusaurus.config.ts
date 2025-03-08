import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  trailingSlash: false,
  title: "WattMaven",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.wattmaven.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wattmaven", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/wattmaven/wattmaven/tree/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/wattmaven/wattmaven/tree/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      // title: 'WattMaven',
      logo: {
        alt: "WattMaven Logo",
        src: "img/logotype-light.svg",
        srcDark: "img/logotype-dark.svg",
        style: {
          width: "100px",
        },
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "right",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          to: "https://github.com/wattmaven",
          label: "Open Source",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          label: "Docs",
          to: "/docs",
        },
        {
          label: "Blog",
          to: "/blog",
        },
        {
          label: "Privacy Policy",
          to: "/privacy-policy",
        },
        {
          label: "Terms of Service",
          to: "/terms-of-service",
        },
        {
          label: "Cookie Policy",
          to: "/cookie-policy",
        },
        {
          label: "Source Code",
          to: "https://github.com/wattmaven/wattmaven",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.wattmaven.com">WattMaven</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      id: "wattmaven-sign-up-announcement",
      content:
        'Need an account? Contact us at <a href="mailto:support@wattmaven.com">support@wattmaven.com</a>',
      backgroundColor: "#000",
      textColor: "#fff",
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "MHITWYLQ",
      async: true,
    },
  ],
};

export default config;
