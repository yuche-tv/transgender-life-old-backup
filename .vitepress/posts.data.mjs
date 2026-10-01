import { createContentLoader } from 'vitepress'

export default createContentLoader('Articles/**/*.md', {
  includeSrc: false, // 不需要加載全文純文本
  render: false,     // 不需要渲染 HTML
  excerpt: false,    // 使用 Frontmatter 的 description 作為摘要
  transform(raw) {
    // 過濾掉各分類的目錄首頁 index.md
    const posts = raw
      .filter(({ url }) => !url.endsWith('/index.html') && !url.endsWith('/'))
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || '無標題文章',
        url: url.replace(/\.html$/, ''),
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(0),
        details: frontmatter.description || frontmatter.tagline || '點擊閱讀全文...',
        category: url.split('/')[2] // 抓取 Articles 下的第一層分類名稱
      }))
      .sort((a, b) => b.date.getTime() - a.date.getTime())

    // 取得各大分類最新一篇文章
    const getLatest = (cat, defaultIcon, defaultTitle) => {
      const found = posts.find(p => p.category === cat)
      if (found) {
        return {
          icon: defaultIcon,
          categoryName: defaultTitle, // 🌟 分類名稱標註
          title: found.title,
          details: found.details,
          link: found.url,
          linkText: '查看全文'
        }
      }
      return {
        icon: defaultIcon,
        categoryName: defaultTitle, // 分類名稱標註
        title: `${defaultTitle} (暂无文章)`,
        details: `目前${defaultTitle}分类中没有可显示的最新文章，这有可能是暂时的错误，也有可能是这里确实没有。`,
        link: `/Articles/${cat}/`,
        linkText: '分类主页'
      }
    }

    return [
      getLatest('Knowledge', '📚', '知识库'),
      getLatest('Lifestyle', '🌈', '生活方式'),
      getLatest('Story', '✍️', '我的故事')
    ]
  }
})