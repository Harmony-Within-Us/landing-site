import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import metadataParser from 'markdown-yaml-metadata-parser'
const postsByLang = (locale?: string) => 
  readdirSync(locale ? `content/posts/${locale}` : 'content/posts').map((file) => {
    //get file name only from .md files
    const fileName = file.replace(/\.md$/, '');
    if(!fileName) return;
    const fileContent = readFileSync(locale ? `content/${locale}/posts/${file}` : `./content/posts/${file}`, 'utf-8');
    const { metadata } = metadataParser(fileContent);
    let date: number;
    if(metadata?.date) { 
      date = Number(new Date(metadata.date)); 
    } else { 
      date = statSync(`content/${locale ? locale : ''}/posts/${file}`).ctimeMs; 
    }
    return {
      text: metadata.title,
      link: locale ? `/${locale}/posts/${fileName}` : `/posts/${fileName}`,
      time: date,
    };
  })
  .sort((a, b) => (b?.time ?? 0) - (a?.time ?? 0))
  .filter((item) => item !== undefined)
  .map(({text, link}) => ({text, link}));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Harmony Within Us",
  description: "Fostering serenity and connection, a dedicated space for transgender individuals navigating life.",
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl'
    }
  },
  // https://static.harmony-within.us/favicon/* has all the favicons
  head: [
    ['meta', { name: 'theme-color', content: '#f8acbc' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://static.harmony-within.us/icon/harmony%20within%20us.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://static.harmony-within.us/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://static.harmony-within.us/favicon/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://static.harmony-within.us/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'shortcut icon', href: 'https://static.harmony-within.us/favicon/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#f8acbc' }],

  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Archive', link: '/archive' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
    ],
    
    sidebar: {
      '/posts': postsByLang(),
    },
    logo: 'https://static.harmony-within.us/icon/harmony%20within%20us.svg',
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: '© 2024 | Harmony Within Us',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/harmony-within-us',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/mgtbUuy79m',
    }
  ]
}

})
