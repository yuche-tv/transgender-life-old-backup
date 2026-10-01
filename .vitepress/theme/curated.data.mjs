import { createContentLoader } from 'vitepress'
// 🌟 加入 Import Attributes: with { type: 'json' }，消除 Vite 原生載入器警告
import curatedConfig from './curated.json' with { type: 'json' }

export default createContentLoader('Articles/**/*.md', {
  includeSrc: false,
  render: false,
  transform(rawArticles) {
    // 將文章路徑標準化，建立 URL -> 文章 Frontmatter 的對照表
    const articleMap = new Map()
    rawArticles.forEach((article) => {
      // 抹除 .html 與 .md 後綴，統一規範化路徑
      const cleanUrl = article.url
        .replace(/\.html$/, '')
        .replace(/\.md$/, '')
        .replace(/\/index$/, '/')
      articleMap.set(cleanUrl, article.frontmatter)
    })

    // 三大主要分類的基礎資訊
    const categories = [
      {
        key: 'knowledge',
        categoryName: '知识库',
        badge: '核心指南',
        paths: curatedConfig.knowledge || []
      },
      {
        key: 'lifestyle',
        categoryName: '生活方式',
        badge: '日常技巧',
        paths: curatedConfig.lifestyle || []
      },
      {
        key: 'story',
        categoryName: '我的故事',
        badge: '心路历程',
        paths: curatedConfig.story || []
      }
    ]

    // 依據 curated.json 中配置的陣列順序，動態匹配抓取 Frontmatter title
    return categories.map((cat) => {
      const articles = cat.paths.map((targetPath) => {
        const normalizedTarget = targetPath.replace(/\.md$/, '').replace(/\/index$/, '/')
        const frontmatter = articleMap.get(normalizedTarget) || {}

        return {
          title: frontmatter.title || normalizedTarget.split('/').filter(Boolean).pop() || '精选文档',
          link: targetPath
        }
      })

      return {
        categoryName: cat.categoryName,
        icon: cat.icon,
        badge: cat.badge,
        articles
      }
    })
  }
})