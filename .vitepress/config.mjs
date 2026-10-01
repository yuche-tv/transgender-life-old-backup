import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Transgender.life",
  description: "自由开放的trans综合资讯与工具站",
  lang: 'zh-CN',

  // 瀏覽器分頁 Favicon 設定
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  // 🌟 底層 Vite 配置：鎖定 CSS 打包標準，防止編譯生產版本時吞掉 WebKit 前綴與毛玻璃 (backdrop-filter)
  vite: {
    build: {
      cssTarget: 'chrome80'
    }
  },

  themeConfig: {
    // 頂部導覽列 Logo (讀取 public/logo.png)
    logo: '/logo.png',

    // 原生本地搜尋功能
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车确认',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc 退出'
                }
              }
            }
          }
        }
      }
    },

    // 頂部導覽列
    nav: [
      { text: '知识库', link: '/Articles/Knowledge/' },
      { text: '生活方式', link: '/Articles/Lifestyle/' },
      { text: '我的故事', link: '/Articles/Story/' },
      { text: '站务资讯', link: '/Articles/Website/' }
    ],

    // 各分類側邊欄
    sidebar: {
      '/Articles/Knowledge/': [
        {
          text: '知识库',
          items: [
            { text: '知识库', link: '/Articles/Knowledge/' },
            { text: '简单介绍 F2M（跨性别男性）', link: '/Articles/Knowledge/what-is-the-f2m' },
            { text: '简单介绍 M2F（跨性别女性）', link: '/Articles/Knowledge/what-is-the-m2f' }
          ]
        }
      ],
      '/Articles/Lifestyle/': [
        {
          text: '生活方式',
          items: [
            { text: '生活方式', link: '/Articles/Lifestyle/' },
            { text: '男女穿搭有哪些区别', link: '/Articles/Lifestyle/Different-outfits-in-men-and-women' }
          ]
        }
      ],
      '/Articles/Story/': [
        {
          text: '我的故事',
          items: [
            { text: '我的故事', link: '/Articles/Story/' },
            { text: '关于我的过去（一）', link: '/Articles/Story/About-my-past-1' },
            { text: '关于我的过去（二）', link: '/Articles/Story/About-my-past-2' },
            { text: '关于我的过去（三）', link: '/Articles/Story/About-my-past-3' },
            { text: '2026年9月，我的下一步计划', link: '/Articles/Story/My-next-steps-for-September-2026' }
          ]
        }
      ],
      '/Articles/Website/': [
        {
          text: '站务资讯',
          items: [
            { text: '站务资讯', link: '/Articles/Website/' },
            { text: '用户条款', link: '/Articles/Website/terms-of-use' },
            { text: '隐私政策', link: '/Articles/Website/privacy-policy' },
            { text: '联系我们', link: '/Articles/Website/contact-us' },
            { text: '站点编辑模板（内部测试）', link: '/Articles/Website/syntax-cheatsheet' }
          ]
        }
      ]
    },

    // 社群與自訂圖示連結
    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@TGlifeMedia' },
      { icon: 'x', link: 'https://x.com' },
      { icon: 'instagram', link: 'https://instagram.com' },
      {
        icon: {
          svg: '<svg role="img" viewBox="1 1 22 22"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'
        },
        link: 'https://www.yuche.tv'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="1.8 1.8 20.4 20.4"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>'
        },
        link: 'https://forms.cloud.microsoft/r/b6gBmy4vqp'
      }
    ],

    // 原生頁尾配置
    footer: {
      message: '开放的trans综合资讯与工具站 | <a href="/Articles/Website/terms-of-use">用户条款</a> | <a href="/Articles/Website/privacy-policy">隐私政策</a>',
      copyright: 'Copyright © 2026 Transgender.life. All Rights Reserved.'
    }
  }
})