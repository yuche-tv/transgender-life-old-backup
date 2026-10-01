<script setup>
import { data as features } from '../../posts.data.mjs'
</script>

<template>
  <div class="VPFeatures latest-features-section">
    <div class="container">
      <div class="items">
        <div v-for="(item, idx) in (features || [])" :key="idx" class="item grid-4">
          <a class="VPFeature" :href="item.link">
            <article class="box">
              <!-- 🌟 純文字無框分類標籤（Emoji + 分類文字） -->
              <div class="category-tag">
                <span v-if="item.icon" class="category-icon">{{ item.icon }}</span>
                <span v-if="item.categoryName" class="category-name">{{ item.categoryName }}</span>
              </div>
              
              <!-- 文章真實標題 -->
              <h2 class="title">{{ item.title }}</h2>
              
              <!-- 文章摘要 -->
              <p class="details">{{ item.details }}</p>
              
              <!-- 藍色入口提示文字與原生箭頭 -->
              <div v-if="item.linkText" class="link-text">
                <span class="link-text-value">{{ item.linkText }}</span>
                <span class="link-text-icon">→</span>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.latest-features-section {
  order: 2;
  padding-top: 16px !important;
}

.latest-features-section .items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.latest-features-section .item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .latest-features-section .item {
    width: calc(100% / 3);
  }
}

.latest-features-section .VPFeature {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  border-radius: 12px;
  text-decoration: none;
}

.latest-features-section .box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 🌟 純淨無邊框、無背景的分類標籤樣式 */
.latest-features-section .category-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.latest-features-section .category-icon {
  font-size: 20px;
  line-height: 1;
}

.latest-features-section .category-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  line-height: 1;
}

.latest-features-section .title {
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.latest-features-section .details {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
  flex-grow: 1;
}

/* 藍色入口提示樣式 */
.latest-features-section .link-text {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  padding-top: 4px;
}

.latest-features-section .link-text-icon {
  margin-left: 6px;
  transition: transform 0.2s ease;
}

.latest-features-section .VPFeature:hover .link-text-icon {
  transform: translateX(4px);
}
</style>