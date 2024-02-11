import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import profilePic from './public/transparent-white-logo.png';

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src={profilePic} alt='dark ocean technologies' height={40}  />
      <span style={{
            marginLeft: '5px'
          }}>Dark Ocean Community</span>
    </>
  ),
  project: {
    link: 'https://github.com/DarkOceanTech/',
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
