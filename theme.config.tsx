import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo:<span>Dark Ocean Community</span>,
  project: {
    link: 'https://github.com/DarkOceanTech/community',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: `${new Date().getFullYear()} © Dark Ocean Technologies, LLC.`,
  },
};

export default config;
