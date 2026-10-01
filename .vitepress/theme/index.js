// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './style.css'
import LatestFeatures from './components/LatestFeatures.vue'
import CuratedFeatures from './components/CuratedFeatures.vue' // 🌟 引入精選資訊卡片組件

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  // 1. 自訂 Layout 插槽（預留給未來首頁小工具與自訂區塊注入）
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  // 2. 頁面邏輯與圖片燈箱初始化
  setup() {
    const route = useRoute()

    const initZoom = () => {
      // 僅針對文章內部的純圖片生效，排除包含超連結的圖片與標註 .no-zoom 的圖示
      mediumZoom('.vp-doc :not(a) > img:not(.no-zoom)', {
        background: 'rgba(15, 23, 42, 0.85)', // 深色磨砂背景遮罩
        margin: 24,                            // 放大後邊緣間距
        scrollOffset: 40                       // 滾動頁面時自動退出燈箱
      })
    }

    onMounted(() => {
      initZoom()
    })

    // 路由切換時，等待 DOM 更新完畢後重新初始化燈箱
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },

  // 3. 全域組件註冊
  enhanceApp({ app, router, siteData }) {
    // 全域註冊首頁最新文章卡片元件
    app.component('LatestFeatures', LatestFeatures)
    // 🌟 全域註冊「尋找精選實用資訊」三欄卡片元件
    app.component('CuratedFeatures', CuratedFeatures)
  }
}