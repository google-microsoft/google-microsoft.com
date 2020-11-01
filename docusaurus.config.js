/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: '唯软科技',
  tagline: '东莞市唯软网络科技有限公司',
  url: 'https://google-microsoft.github.io/google-microsoft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'google-microsoft', // Usually your GitHub org/user name.
  projectName: 'google-microsoft.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '唯软科技',
      logo: {
        alt: '东莞市唯软网络科技有限公司',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/service/service-service',
          label: '服务',
          position: 'left',
        },
        {
          to: 'docs/',
          label: '关于我们',
          position: 'left',
        },
        {to: 'blog', label: '新闻', position: 'left'},
        {
          to: 'docs/jobs/job-job',
          label: '加入我们',
          position: 'right',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/google-microsoft/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '学习',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/richardgong1984',
            },
            {
              label: '微博',
              href: 'https://weibo.com/u/6142429279',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '关于我们',
              to: 'docs',
            },

            {
              label: '新闻',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/google-microsoft/',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Terms',
              href: 'https://github.com/google-microsoft',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} 唯软科技, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/google-microsoft/google-microsoft.com/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/google-microsoft/google-microsoft.com/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
