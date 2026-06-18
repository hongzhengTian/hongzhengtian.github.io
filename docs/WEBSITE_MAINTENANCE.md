# 个人网站维护手册

这个仓库维护的是 `https://hongzhengtian.github.io/`，网站基于 al-folio/Jekyll，通过 GitHub Actions 自动部署到 GitHub Pages。

这份文档的目标是：换电脑后重新 clone，也能让你或 AI agent 快速知道该改哪里、怎么发布、网页端还可能需要点哪些设置。

## 最常用流程

如果只是改文字、链接、PDF 或图片，通常流程是：

1. 在本地 clone 或打开仓库：

   ```powershell
   git clone https://github.com/hongzhengTian/hongzhengtian.github.io.git
   cd hongzhengtian.github.io
   ```

2. 修改对应文件。
3. 提交并上传：

   ```powershell
   git status
   git add <修改过的文件>
   git commit -m "Update website content"
   git push origin main
   ```

4. 打开 GitHub 仓库的 `Actions` 页面，确认 `Deploy site` 成功。
5. 等一小会儿后刷新网站页面。

如果你使用 Codex 或其他 AI agent，可以让它先阅读：

- `.codex/skills/maintain-hongzhengtian-site/SKILL.md`
- `docs/WEBSITE_MAINTENANCE.md`

## 文件和网页对应关系

| 想改的内容 | 修改文件 |
| --- | --- |
| 首页 About 文字 | `_pages/about.md` |
| 首页头像 | `assets/img/prof_pic.jpg` |
| 首页社交链接和 CV PDF 链接 | `_data/socials.yml` |
| Research 页面项目卡片 | `_projects/*.md` |
| Publications 页面论文列表 | `_bibliography/papers.bib` |
| Experience 页面 | `_pages/experience.md` |
| CV 网页版 | `_pages/cv.md` |
| CV PDF 文件 | `assets/pdf/HongzhengTian_CV.pdf` |
| Photography 页面 | `_pages/photography.md` |
| 首页 news/announcement | `_news/*.md` |
| 网站标题、URL、全局设置 | `_config.yml` |
| GitHub Actions 部署流程 | `.github/workflows/deploy.yml` |

## 修改首页

首页文件是 `_pages/about.md`。

常改内容：

- 个人介绍正文：直接改 front matter 下面的 Markdown 段落。
- 副标题：改 `subtitle:`。
- 头像文件名：改 `profile.image:`，当前是 `prof_pic.jpg`。
- 头像旁边的小信息：改 `profile.more_info:` 里面的 HTML。

首页头像实际文件在：

```text
assets/img/prof_pic.jpg
```

替换头像时，建议把新图片转换成 JPG 或 PNG，并保持同名 `prof_pic.jpg`，这样不用改配置。

## 修改 CV

当前有两个 CV 入口：

- 网页版 CV：`_pages/cv.md`
- PDF CV：`assets/pdf/HongzhengTian_CV.pdf`

如果只更新 PDF：

1. 把新 PDF 放到 `assets/pdf/`。
2. 最简单的方式是覆盖旧文件，仍然命名为 `HongzhengTian_CV.pdf`。
3. 提交并 push。

如果更新网页版 CV：

1. 打开 `_pages/cv.md`。
2. 直接修改 Markdown 内容。
3. 保留文件顶部的 front matter：

   ```yaml
   ---
   layout: page
   title: CV
   permalink: /cv/
   description: A web version of my curriculum vitae, with a link to the latest PDF.
   nav: true
   nav_order: 5
   toc:
     sidebar: left
   ---
   ```

注意：当前 `/cv/` 是手写 Markdown 页面，不再使用 al-folio 的 `layout: cv` 自动结构化 CV 模板。这样更稳定，也避免出现空的 Skills 区块。

## 修改 Publications

论文列表在 `_bibliography/papers.bib`。

添加新论文时，复制一个已有条目，改 key、title、author、venue、year、link 等字段。例如：

```bibtex
@inproceedings{shortkey2026paper,
  abbr={CONF},
  title={Paper Title},
  author={Tian, Hongzheng and Others},
  booktitle={Conference Name},
  year={2026},
  html={https://example.com},
  selected={true}
}
```

常用字段：

- `abbr`: 页面上显示的会议/期刊简称。
- `title`: 论文标题。
- `author`: 作者。
- `booktitle` 或 `journal`: 会议或期刊。
- `year`: 年份。
- `html`: 论文网页链接。
- `pdf`: PDF 链接。
- `code`: 代码链接。
- `doi`: DOI。
- `arxiv`: arXiv 编号。
- `selected={true}`: 是否在首页 selected papers 中突出显示。

## 修改 Research 项目

Research 页面由 `_projects/` 里的文件生成。

每个项目文件顶部类似：

```yaml
---
layout: page
title: "HeteroBench"
description: "Multi-kernel benchmarks for heterogeneous systems."
importance: 1
category: research
related_publications: true
---
```

常改字段：

- `title`: 项目标题。
- `description`: 卡片上的短描述。
- `importance`: 排序，数字越小越靠前。
- `related_publications`: 是否显示相关论文。

正文用 Markdown 写即可。

新增项目时：

1. 在 `_projects/` 新建一个 `.md` 文件，例如 `new-project.md`。
2. 复制已有项目的 front matter。
3. 修改标题、描述、排序和正文。
4. 提交 push。

## 修改 Experience、Awards、Activities

摘要版经历页面在：

```text
_pages/experience.md
```

这个页面适合放简洁版内容，比如 internship、honors、activities、education。

完整详细版履历放在：

```text
_pages/cv.md
```

如果有新奖项或实习，建议两个地方都检查一下：

- `experience.md`: 简要展示。
- `cv.md`: 完整履历。

## 修改社交链接

社交链接在 `_data/socials.yml`。

当前主要字段：

```yaml
cv_pdf: /assets/pdf/HongzhengTian_CV.pdf
email: hongzhet@uci.edu
github_username: hongzhengTian
linkedin_username: hongzheng-tian-853258204
rss_icon: false
```

如果 LinkedIn 用户名或 GitHub 用户名变了，改这里。

## 添加一个简单新栏目

如果只是添加一个普通页面：

1. 在 `_pages/` 新建文件，例如 `teaching.md`。
2. 文件开头写：

   ```yaml
   ---
   layout: page
   title: teaching
   permalink: /teaching/
   description: Teaching experience and materials.
   nav: true
   nav_order: 6
   ---
   ```

3. 下面写 Markdown 正文。
4. `nav: true` 表示显示在顶部导航栏；不想显示就写 `nav: false`。
5. `nav_order` 控制导航顺序。

## 图片和文件

常用位置：

- 普通图片：`assets/img/`
- PDF：`assets/pdf/`

建议：

- 文件名尽量用英文、数字、连字符或下划线。
- 避免空格和中文文件名。
- 替换已有图片/PDF 时，保持原文件名最省事。
- 如果改了文件名，要同步修改引用它的 Markdown 或 YAML。

## 本地预览

如果电脑上安装了 Ruby 和 Bundler，可以本地预览：

```powershell
bundle install
bundle exec jekyll serve
```

然后浏览器打开本地地址，通常是：

```text
http://127.0.0.1:4000/
```

如果没有 Ruby，也可以只修改并 push，让 GitHub Actions 构建。这个仓库的正式部署主要依赖 GitHub Actions。

## 发布和 GitHub Actions

每次 push 到 `main` 分支后：

1. GitHub 会运行 `.github/workflows/deploy.yml`。
2. workflow 名字是 `Deploy site`。
3. 它会构建 Jekyll 网站。
4. 构建结果会推到 `gh-pages` 分支。
5. GitHub Pages 从 `gh-pages` 分支发布网站。

在 GitHub 网页端检查：

1. 打开仓库：`https://github.com/hongzhengTian/hongzhengtian.github.io`
2. 点击顶部 `Actions`。
3. 点击最新的 `Deploy site`。
4. 确认是绿色 check。

如果网站没更新，等 1-3 分钟后强制刷新，或者用无痕窗口打开。

## GitHub Pages 网页端设置

这些设置不在代码文件里，换电脑后也可能需要检查。

路径：

1. 打开 GitHub 仓库。
2. 点击 `Settings`。
3. 左侧点击 `Pages`。

当前应该是：

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

如果误设成 `main / (root)`，网站可能 404 或构建失败。

修改步骤：

1. 在 `Build and deployment` 的 `Branch` 下拉框选择 `gh-pages`。
2. 右侧目录选择 `/ (root)`。
3. 点击 `Save`。
4. 等 GitHub Pages 重新部署。

## 自定义域名

如果以后要把 `www.hongzhengtian.com` 指到新网站，需要同时处理 GitHub 和域名 DNS。

GitHub 端：

1. 仓库 `Settings` -> `Pages`。
2. 找到 `Custom domain`。
3. 输入域名，例如 `www.hongzhengtian.com`。
4. 点击 `Save`。
5. 等待 GitHub 检查 DNS。
6. 如果可用，启用 `Enforce HTTPS`。

DNS 端：

- 在域名服务商处添加或修改 DNS 记录。
- 常见做法是让 `www` 的 CNAME 指向 `hongzhengtian.github.io`。
- 不要删除域名购买/续费服务；GitHub Pages 免费，但域名本身仍然需要续费。

迁移前建议：

- 先确认 GitHub Pages 默认域名 `https://hongzhengtian.github.io/` 正常。
- 再切 custom domain。
- 不要随便删除旧 Google Site；DNS 切换成功后再考虑旧站处理。

## 常见问题

### GitHub 上有红叉

先看红叉对应哪个 workflow。

- 如果 `Deploy site` 成功，通常网站构建没问题。
- 如果旧的 `pages build and deployment` 针对 `main` 失败，可能是历史记录或 Pages 源设错。
- 确认 Settings -> Pages 是 `gh-pages / (root)`。

### 网站 404

检查：

1. 仓库名是否仍是 `hongzhengtian.github.io`。
2. Settings -> Pages 是否设为 `gh-pages / (root)`。
3. `Actions` 里 `Deploy site` 是否成功。
4. `gh-pages` 分支是否有 `index.html`。

### 改了但网页没变化

可能原因：

- 还没部署完成。
- 浏览器缓存。
- 改错文件。
- 没有 push。

检查顺序：

1. `git status` 看有没有未提交文件。
2. GitHub `Actions` 看是否成功。
3. 用无痕窗口打开页面。
4. URL 后加 `?refresh=1` 测试。

## 给 AI Agent 的建议

让 AI agent 修改这个站点时，可以直接说：

```text
请先阅读 .codex/skills/maintain-hongzhengtian-site/SKILL.md 和 docs/WEBSITE_MAINTENANCE.md，然后帮我修改网站内容。不要改动网站结构，除非我明确要求。
```

比较适合交给 AI 的任务：

- 根据新 CV 更新 `_pages/cv.md`。
- 根据新论文 DOI/BibTeX 更新 publications。
- 重写 About 页表述。
- 添加 research project。
- 替换头像并确认路径。
- 检查 GitHub Actions 和线上页面是否部署成功。

自己手动改比较适合：

- 改几句话。
- 替换 PDF。
- 替换头像。
- 增加一条简单 award/activity。
