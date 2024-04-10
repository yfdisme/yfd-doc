// @ts-ignore
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "沸羊羊微服务",
    description: "SpringBoot",
    lang: 'zh-CN',
    base: '/yfd-doc',
    head: [
        ['link', {rel: 'icon', href: '/yfd-doc/favicon.ico'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: '使用github pages 发布 vitepress',
                collapsed: false,
                items: [
                    {text: '流程', link: '/githubPages'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'a', link: '/a'}
                ]
            },
            {
                text: 'Examples',
                collapsed: false,
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'a', link: '/a'}
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
