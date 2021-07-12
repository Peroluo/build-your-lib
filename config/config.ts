import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  title: 'Builder',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  mode: 'site',
  navs: [
    {
      title: '开发指南',
      path: '/guide',
    },
    {
      title: 'utils',
      path: '/utils',
    },
    {
      title: 'hooks',
      path: '/hooks',
    },
    {
      title: 'components',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Peroluo/builder',
    },
  ],
});
