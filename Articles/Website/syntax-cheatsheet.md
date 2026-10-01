---
title: 站点编辑模板（内部测试）
date: 2026-09-01
description: 这是AI生成的一篇测试文档，只是为了方便我写文章获取这些组件，免得我自己到时候都忘了怎么用。
---

# 站点编辑模板（仅供内部使用）

这是AI生成的一篇测试文档，只是为了方便我写文章获取这些组件，免得我自己到时候忘了怎么用。

[[toc]]

## 1. 基础 Markdown 扩展

### 1.1 文本样式与增强
- **粗体**、*斜体*、~~删除线~~、==高亮标记 (需插件或主题支持)==
- 上标: 29^th^ / 下标: H~2~O
- 智能引号/排版: "双引号"、'单引号'、--- (破折号)、... (省略号)
- 键盘按键标签: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>

### 1.2 任务列表
- [x] 已完成的任务
- [ ] 待处理的任务项
- [ ] 另一项待办事项

### 1.3 脚注 (Footnotes)
这是一个带有脚注的句子[^1]，这里还有第二个多行脚注[^2]。

[^1]: 这是第一个脚注的解释内容。
[^2]: 这是第二个脚注，支持段落与格式化。

### 1.4 表格
| 左对齐表头 | 居中表头 | 右对齐表头 |
| :--- | :---: | ---: |
| 单元格 1 | 单元格 2 | ￥100.00 |
| 单元格 3 | 单元格 4 | ￥25.50 |

## 2. 自定义容器 (Custom Containers)

### 2.1 基础提示框 (Tip, Info, Warning, Danger)

::: info
这是一条 **信息 (Info)** 提示框，用于传达常规信息。
:::

::: tip
这是一个 **技巧 (Tip)** 提示框，用于提供操作建议。
:::

::: warning
这是一条 **警告 (Warning)** 提示框，提醒注意潜在风险。
:::

::: danger
这是一条 **危险 (Danger)** 提示框，警示高风险或破坏性操作。
:::

### 2.2 自定义标题容器

::: tip 自定义技巧标题 💡
你可以通过在容器类型后直接输入文本来自定义提示框的标题。
:::

### 2.3 可折叠容器 (Details)

::: details 点击展开查看详细说明
这里是被折叠的内容。只有当用户点击标题时才会展开显示。

- 支持列表
- 支持代码块
- 支持所有其他 Markdown 元素
:::

::: details 自定义折叠标题（带代码）
```bash
npm run build
```
:::

### 2.4 原生 HTML 详情标签（兼容方案）
<details>
<summary>点击展开 HTML details</summary>
原生 HTML 折叠标签在 VitePress 中同样完美支持。
</details>

## 3. 代码块增强 (Code Features)

### 3.1 基础语法高亮与行号

```js:line-numbers
// 强制开启行号
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("VitePress"));
```

### 3.2 携带文件名的代码块

```ts [src/utils/math.ts]
export const add = (a: number, b: number): number => a + b;
```

### 3.3 特定行高亮 (Line Highlighting)

```js{2,4-5}
function calculateTotal(items) {
  // 第 2 行被高亮
  let total = 0;
  // 第 4-5 行被高亮
  for (const item of items) {
    total += item.price;
  }
  return total;
}
```

### 3.4 交互/行内注释标记 (Diff, Focus, Error, Warning)

```ts
function processUser(user: User) {
  // [!code ++]
  console.log("新增行标记 (+)");
  // [!code --]
  console.warn("移除行标记 (-)");
  
  const token = generateToken(user); // [!code focus]
  const isValid = validate(token);   // [!code error]
  const cacheKey = getCache();       // [!code warning]
}
```

### 3.5 代码组 (Code Groups / Tabs)

::: code-group

```bash [npm]
npm install -D vitepress
```

```bash [pnpm]
pnpm add -D vitepress
```

```bash [yarn]
yarn add -D vitepress
```

```bash [bun]
bun add -d vitepress
```

:::

## 4. 内置组件与徽章 (Built-in Components)

### 4.1 徽章 (Badge) <Badge type="tip" text="v1.0.0" />
- 默认/信息徽章: <Badge type="info" text="default" />
- 提示徽章: <Badge type="tip" text="tip" />
- 警告徽章: <Badge type="warning" text="beta" />
- 危险徽章: <Badge type="danger" text="deprecated" />