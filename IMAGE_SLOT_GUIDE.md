# 图片链接放置清单

这个文件是给当前这版首页准备的素材占位说明。

目标不是随便塞图，而是让图片气质尽量接近 `cappen.com` 的做法:

- 图要少，但每一张都要有“主视觉”强度
- 优先黑底、高反差、主体单一、构图克制
- 少用信息太多的拼贴图、白底截图、低清产品图
- 能用局部裁切就不要整页全景
- 能突出“视觉设计 / AI Coding / 产品能力”的，优先级最高

当前站内建议放图的位置，按重要程度分为 4 组:

1. 首屏主视觉
2. 黑场理念区
3. 项目案例区
4. 联系区与分享图

---

## 1. 首屏主视觉

### 1.1 `hero.main_visual`

- 位置: 首屏标题中间嵌入的主视觉窗口
- 当前代码区域: `src/main.js` 里的 `scene-slot--hero`
- 推荐比例: `16:10` 或 `1.6:1`
- 推荐尺寸: `1600x1000` 以上
- 适合放什么:
  - 黑底 3D 金属体块
  - 高级感人像主视觉
  - AI 生成但经过强审美控制的抽象视觉
  - 你个人品牌感最强的一张图
- 不适合:
  - 普通自拍
  - 白底图
  - 信息太杂的 UI 截图

URL 占位:

```txt
hero.main_visual.url=
hero.main_visual.alt=首屏主视觉
```

### 1.2 `hero.main_visual_mobile`

- 位置: 移动端首屏右下主视觉窗口
- 推荐比例: `4:3` 或 `1.45:1`
- 推荐尺寸: `1200x900` 以上
- 适合放什么:
  - 和桌面同源的裁切版本
  - 主体更集中，避免移动端看不清

URL 占位:

```txt
hero.main_visual_mobile.url=
hero.main_visual_mobile.alt=移动端首屏主视觉
```

---

## 2. 黑场理念区

### 2.1 `manifesto.stage_visual`

- 位置: 黑场 sticky 段中央大视觉
- 当前代码区域: `src/main.js` 里的 `scene-slot--stage`
- 推荐比例: `16:10`
- 推荐尺寸: `1920x1200` 以上
- 适合放什么:
  - 黑底 3D 抽象体
  - 高对比金属 / 玻璃 / 生物感结构
  - 代表“视觉 + 技术 + 产品混合能力”的概念图

URL 占位:

```txt
manifesto.stage_visual.url=
manifesto.stage_visual.alt=理念区主视觉
```

### 2.2 `manifesto.thumb_01`

- 位置: 黑场浮卡 01
- 推荐比例: `1:1`
- 推荐尺寸: `1000x1000`
- 主题建议: `Visual Systems`
- 适合放什么:
  - 品牌主视觉裁切
  - Landing page hero 局部
  - 你最“像作品集封面”的图

```txt
manifesto.thumb_01.url=
manifesto.thumb_01.alt=Visual Systems
```

### 2.3 `manifesto.thumb_02`

- 主题建议: `Workflow Automation`
- 适合放什么:
  - ComfyUI 工作流局部截图
  - 节点图裁切
  - 自动化产线逻辑图

```txt
manifesto.thumb_02.url=
manifesto.thumb_02.alt=Workflow Automation
```

### 2.4 `manifesto.thumb_03`

- 主题建议: `AI Camera`
- 适合放什么:
  - AI 相机效果图
  - 人像风格化样张
  - 有传播感的娱乐型视觉

```txt
manifesto.thumb_03.url=
manifesto.thumb_03.alt=AI Camera
```

### 2.5 `manifesto.thumb_04`

- 主题建议: `Web MVP`
- 适合放什么:
  - 你做过的工具站页面局部
  - Web 产品界面截图
  - 带结构感的前端页面局部

```txt
manifesto.thumb_04.url=
manifesto.thumb_04.alt=Web MVP
```

### 2.6 `manifesto.thumb_05`

- 主题建议: `Product Framing`
- 适合放什么:
  - 需求结构图
  - 用户流程图
  - 产品原型局部

```txt
manifesto.thumb_05.url=
manifesto.thumb_05.alt=Product Framing
```

### 2.7 `manifesto.thumb_06`

- 主题建议: `Overseas Growth`
- 适合放什么:
  - 海外投放素材局部
  - 高转化创意样张
  - App 增长相关视觉

```txt
manifesto.thumb_06.url=
manifesto.thumb_06.alt=Overseas Growth
```

---

## 3. 项目案例区

这里建议每个案例至少准备 `1 张主图 + 3 张局部图`。

---

### 3.1 案例一: AI 电商图自动化系统

#### `work.case_01.cover`

- 位置: 案例 1 大卡主视觉背景
- 推荐比例: `16:10`
- 适合放什么:
  - SKU 图批量生成结果墙
  - 亚马逊电商图前后对比
  - 工具站首页 + 图片结果混排

```txt
work.case_01.cover.url=
work.case_01.cover.alt=AI 电商图自动化系统主图
```

#### `work.case_01.panel_01`

- 主题建议: `SKU Pipeline`
- 适合放什么:
  - 商品主图生成前后对比
  - 单 SKU 多尺寸导出结果

```txt
work.case_01.panel_01.url=
work.case_01.panel_01.alt=SKU Pipeline
```

#### `work.case_01.panel_02`

- 主题建议: `Web Shipping`
- 适合放什么:
  - `yoboxapp.com/app`
  - `comfyui.yoboxapp.com`
  - `api.yoboxapp.com`
  的页面局部截图

```txt
work.case_01.panel_02.url=
work.case_01.panel_02.alt=Web Shipping
```

#### `work.case_01.panel_03`

- 主题建议: `Reusable System`
- 适合放什么:
  - 模板结构图
  - API / 工作流 / 批处理示意
  - 流程节点局部

```txt
work.case_01.panel_03.url=
work.case_01.panel_03.alt=Reusable System
```

---

### 3.2 案例二: AI 相机玩法与人像效果系统

#### `work.case_02.cover`

- 推荐比例: `16:10`
- 适合放什么:
  - 高质量 AI 相机样张拼接
  - 有“传播感”的人像效果封面
  - Brazil #1 / 下载量相关的产品感视觉

```txt
work.case_02.cover.url=
work.case_02.cover.alt=AI 相机玩法与人像效果系统主图
```

#### `work.case_02.panel_01`

- 主题建议: `Portrait Logic`
- 适合放什么:
  - 单人像效果样张
  - 风格模板对比图

```txt
work.case_02.panel_01.url=
work.case_02.panel_01.alt=Portrait Logic
```

#### `work.case_02.panel_02`

- 主题建议: `Gameplay Research`
- 适合放什么:
  - 海外热点玩法截图
  - 投放创意局部
  - 素材趋势拼图

```txt
work.case_02.panel_02.url=
work.case_02.panel_02.alt=Gameplay Research
```

#### `work.case_02.panel_03`

- 主题建议: `Product Fit`
- 适合放什么:
  - App 内效果页
  - Google Play / App 界面
  - 玩法落地截图

```txt
work.case_02.panel_03.url=
work.case_02.panel_03.alt=Product Fit
```

---

### 3.3 案例三: 游戏角色模型训练与提效

#### `work.case_03.cover`

- 推荐比例: `16:10`
- 适合放什么:
  - 角色多视图排版
  - LoRA 训练结果墙
  - 游戏原画风格角色展示

```txt
work.case_03.cover.url=
work.case_03.cover.alt=游戏角色模型训练与提效主图
```

#### `work.case_03.panel_01`

- 主题建议: `LoRA Assets`
- 适合放什么:
  - 训练数据集局部
  - 角色资产整理图

```txt
work.case_03.panel_01.url=
work.case_03.panel_01.alt=LoRA Assets
```

#### `work.case_03.panel_02`

- 主题建议: `Preview System`
- 适合放什么:
  - 多视图输出
  - 换装 / 草图细化结果

```txt
work.case_03.panel_02.url=
work.case_03.panel_02.alt=Preview System
```

#### `work.case_03.panel_03`

- 主题建议: `Efficiency Lift`
- 适合放什么:
  - 前后效率对比图
  - 团队协作流程示意
  - 从草图到方向验证的阶段图

```txt
work.case_03.panel_03.url=
work.case_03.panel_03.alt=Efficiency Lift
```

---

## 4. 联系区与分享图

### 4.1 `talk.panel_visual`

- 位置: 联系区右上视觉窗
- 当前代码区域: `scene-slot--talk`
- 推荐比例: `1:1` 或 `4:3`
- 推荐尺寸: `1200x1200` 以上
- 适合放什么:
  - 更安静的 3D 体块
  - 个人品牌肖像
  - 一张能代表“愿意合作 / open to build”的图

```txt
talk.panel_visual.url=
talk.panel_visual.alt=联系区视觉
```

### 4.2 `site.og_image`

- 位置: 社交分享图 / Open Graph
- 推荐比例: `1200x630`
- 适合放什么:
  - 你的名字 + 三大能力标题
  - 一张强主视觉 + 极简文案
  - 可直接用于微信 / X / LinkedIn 分享

```txt
site.og_image.url=
site.og_image.alt=站点分享图
```

---

## 5. 最推荐的备图优先级

如果你现在时间有限，先只准备下面 8 张:

1. `hero.main_visual`
2. `manifesto.stage_visual`
3. `manifesto.thumb_01`
4. `work.case_01.cover`
5. `work.case_02.cover`
6. `work.case_03.cover`
7. `talk.panel_visual`
8. `site.og_image`

---

## 6. 图像风格建议

### 视觉设计向

- 高级、克制、干净
- 不要淘宝感、不要廉价发光
- 背景尽量单纯

### AI Coding 向

- 工作流、节点、界面、结构图可以有
- 但不要直接丢生硬截图
- 最好是裁切后有“设计感”的截图

### 产品能力向

- 展示“结果”比展示“过程”更重要
- 例如下载量、排名、上线页面、成品效果
- 少放空洞的白板图

---

## 7. 已接入代码的位置

现在项目经历左侧白色浮卡已经真正接入图片 URL 配置了。

你后面直接改这个文件里的 `src` 即可:

```txt
src/image-assets.js
```

当前已经接入并生效的是这 9 个 key:

```txt
work.case_01.panel_01
work.case_01.panel_02
work.case_01.panel_03
work.case_02.panel_01
work.case_02.panel_02
work.case_02.panel_03
work.case_03.panel_01
work.case_03.panel_02
work.case_03.panel_03
```

对应关系在这里:

```txt
src/content.js
```

规则很简单:

- `src/image-assets.js` 里只负责放图片 URL 和 alt 文案
- `src/content.js` 里用 `imageKey` 把每张白卡绑定到对应图片
- 页面渲染已经接好了，所以你不用再改结构代码

如果后面你还要把首屏、黑场 sticky 区、联系区也一起接成可替换图片，我可以继续按同样方式全部补齐。
