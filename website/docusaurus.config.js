// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dr Bunsen',
  tagline: '- Watch your language -',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ocular-d', // Usually your GitHub org/user name.
  projectName: 'dr-bunsen', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          routeBasePath: '/'
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   //editUrl:
        //   //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dr Bunsen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ocld-logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Style Guides',
            position: 'left',
            items: [
              {
                label: 'Markdown',
                href: 'https://ocular-d.github.io/styleguide-markdown/',
              },
              {
                type: 'doc',
                label: 'Editorial',
                docId: 'style-guide',
              },
              {
                label: 'OpenAPI',
                href: 'https://openapi.ocular-d.tech/',
              },
              // ... more items
            ],
          },
          {
            type: 'doc',
            docId: 'tools/tools-intro',
            position: 'left',
            label: 'Tools',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'light',
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        //darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['ini', 'graphql', 'git', 'docker', 'makefile'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Style Guide',
                to: '/docs/style-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyleft © ${new Date().getFullYear()} ocular-d, Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
