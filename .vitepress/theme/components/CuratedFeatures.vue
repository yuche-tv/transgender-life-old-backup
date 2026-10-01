<script setup>
import { data as curatedCategories } from '../curated.data.mjs'
</script>

<template>
  <div class="VPFeatures curated-features-section">
    <div class="container">
      <div class="items">
        <div 
          v-for="(cat, idx) in (curatedCategories || [])" 
          :key="idx" 
          class="item grid-4"
        >
          <div class="VPFeature curated-card">
            <article class="box">
              <!-- 分類頂部欄 -->
              <div class="category-header">
                <div class="category-tag">
                  <span class="category-icon">{{ cat.icon }}</span>
                  <span class="category-name">{{ cat.categoryName }}</span>
                </div>
                <span class="category-count">{{ cat.articles.length }} 篇</span>
              </div>

              <!-- 文章列表外層包覆（當文章大於 10 篇時，在行動端或桌面端自適應套用高度與滾動條） -->
              <div 
                class="list-wrapper"
                :class="{
                  'scrollable-mobile': cat.articles.length > 10,
                  'scrollable-desktop': cat.articles.length > 30
                }"
              >
                <ul class="article-list">
                  <li 
                    v-for="(article, aIdx) in cat.articles" 
                    :key="aIdx" 
                    class="article-item"
                  >
                    <a :href="article.link" class="article-link">
                      <span class="bullet-dot"></span>
                      <span class="article-title">{{ article.title }}</span>
                      <span class="hover-arrow">→</span>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.curated-features-section {
  order: 3;
  padding-top: 16px !important;
  padding-bottom: 32px;
}

.curated-features-section .items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.curated-features-section .item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .curated-features-section .item {
    width: calc(100% / 3);
  }
}

.curated-card {
  height: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(224, 242, 254, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: default !important; /* 卡片本身非整體連結，設定為預設游標 */
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

:root.dark .curated-card {
  background-color: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(51, 65, 85, 0.5);
}

/* 🌟 核心調整：徹底取消卡片懸停上浮位移 */
.curated-card:hover {
  transform: none !important; /* 禁止任何方向的懸停位移 */
  border-color: var(--vp-c-brand-1);
}

:root.dark .curated-card:hover {
  border-color: var(--vp-c-brand-2);
}

.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 頂部分類行 */
.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(199, 210, 254, 0.5);
}

:root.dark .category-header {
  border-bottom-color: rgba(71, 85, 105, 0.5);
}

.category-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.category-icon {
  font-size: 20px;
  line-height: 1;
}

.category-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.category-count {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 12px;
}

/* 列表容器基礎樣式 */
.list-wrapper {
  position: relative;
  flex-grow: 1;
}

/* 行動端（寬度小於 640px）：超過 10 條鎖定高度 */
@media (max-width: 639px) {
  .list-wrapper.scrollable-mobile {
    max-height: 380px;
    overflow-y: auto;
    padding-right: 4px;
  }
}

/* 桌面端（寬度大於等於 640px）：超過 30 條鎖定高度 */
@media (min-width: 640px) {
  .list-wrapper.scrollable-desktop {
    max-height: 1050px;
    overflow-y: auto;
    padding-right: 4px;
  }
}

/* 自訂清晰細滾動條 */
.list-wrapper::-webkit-scrollbar {
  width: 4px;
}

.list-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.list-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-brand-soft);
  border-radius: 2px;
}

.list-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: var(--vp-c-brand-1);
}

/* 文章條目列表 */
.article-list {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.article-item {
  margin: 0 !important;
  padding: 0 !important;
}

.article-link {
  display: flex;
  align-items: center;
  padding: 7px 8px;
  border-radius: 6px;
  text-decoration: none !important;
  color: var(--vp-c-text-2) !important;
  font-size: 13.5px;
  line-height: 1.4;
  transition: all 0.2s ease;
}

.bullet-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--vp-c-text-3);
  margin-right: 8px;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
}

.article-title {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hover-arrow {
  font-size: 12px;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: var(--vp-c-brand-1);
  margin-left: 6px;
  flex-shrink: 0;
}

.article-link:hover {
  color: var(--vp-c-brand-1) !important;
  background-color: var(--vp-c-brand-soft);
  transform: translateX(3px);
}

.article-link:hover .bullet-dot {
  background-color: var(--vp-c-brand-1);
}

.article-link:hover .hover-arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>