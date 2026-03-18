export const siteContent = {
  zh: {
    meta: {
      title: "朱杰 / yoji | 视觉设计 × AI Coding × 产品能力",
      description:
        "参考 cappen.com 交互逻辑重构的双语个人简历网站，聚焦视觉设计、AI Coding 和产品能力。",
    },
    ui: {
      discover: "发现",
      open: "打开",
      copy: "复制",
      localeZh: "中",
      localeEn: "EN",
      copied: "已复制",
    },
    brand: {
      name: "朱杰 / yoji",
      role: "视觉设计 / AI Coding / 产品能力",
      email: "zhujieyohji@gmail.com",
      phone: "+86 18048054389",
    },
    nav: [
      { label: "项目", href: "#work" },
      { label: "经历", href: "#experience" },
      { label: "优势", href: "#signals" },
      { label: "联系", href: "#contact" },
    ],
    preloader: {
      top: ["VISUAL", "THINKER"],
      bottom: ["SYSTEM", "BUILDER"],
      caption: "把审美、代码和产品判断放进同一套生产线",
      cards: [
        "ComfyUI",
        "AI Camera",
        "Web MVP",
        "Prompt System",
        "Visual Design",
        "Automation",
        "Product Sense",
        "Launch Ready",
      ],
    },
    hero: {
      eyebrow: "COMFYUI 工作流设计 / AI 图像系统 / 产品原型 / 增长物料",
      title: ["视觉设计", "AI Coding", "产品能力"],
      summary: [
        "我不是只把画面做漂亮，也不是只把流程跑通。",
        "我擅长把视觉判断、AI 自动化和产品落地压缩成一套可上线的系统。",
      ],
      actions: [
        { label: "查看项目", href: "#work", variant: "primary" },
        { label: "联系我", href: "#contact", variant: "secondary" },
      ],
      metrics: [
        { value: "80%", label: "游戏原画 AI 自动化提效" },
        { value: "500万+", label: "Google Play 摄影类产品累计下载" },
        { value: "#1", label: "摄影产品在巴西地区登顶" },
      ],
      noteTitle: ["把视觉方向、", "AI 工作流、", "产品原型压缩成", "可复用系统"],
      noteBody:
        "经历覆盖 AI 模型训练、AI 相机玩法、AI 电商图自动化与 Web 产品落地，适合需要跨设计、工程和产品协作的团队。",
      pillars: [
        {
          title: "视觉设计",
          body: "图像模板、镜头语言、品牌气质、界面完成度与审美 QA。",
        },
        {
          title: "AI Coding",
          body: "ComfyUI 流程、插件编写、前端原型、API 串联与自动化交付。",
        },
        {
          title: "产品能力",
          body: "懂玩法、懂场景、懂投放，知道什么功能能真正转成产品价值。",
        },
      ],
      links: [
        { label: "AI 工具站", value: "yoboxapp.com/app", href: "https://yoboxapp.com/app" },
        {
          label: "无限画布",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
        {
          label: "API 集合站",
          value: "api.yoboxapp.com",
          href: "https://api.yoboxapp.com/",
        },
      ],
    },
    manifesto: {
      eyebrow: "Core Thesis",
      title: [
        '我把<span class="is-italic">视觉审美</span>、',
        '<span class="is-italic">AI 自动化</span>和',
        '<span class="is-italic">产品判断</span>放进',
        "同一条生产线。",
      ],
      body: [
        "这意味着我可以同时思考画面、工作流、功能体验和上线方式。",
        "不是只做图，也不是只写流程，而是让概念、界面、图像与功能一起成形。",
      ],
      thumbs: [
        { code: "01", title: "Visual Systems", body: "品牌级图像与页面气质" },
        { code: "02", title: "Workflow Automation", body: "节点、插件与批量生产" },
        { code: "03", title: "AI Camera", body: "玩法、效果与传播素材" },
        { code: "04", title: "Web MVP", body: "前端原型与落地页面" },
        { code: "05", title: "Product Framing", body: "MVP 定义与需求收口" },
        { code: "06", title: "Overseas Growth", body: "趋势、投放与用户理解" },
      ],
    },
    work: {
      label: "Featured Work",
      title: ["不是堆砌经历，", "而是我如何把 AI", "真正做成产品。"],
      body:
        "项目按三条核心能力重排：视觉设计、AI Coding、产品能力。重点不是我做过什么，而是我如何把复杂能力整合成能上线的结果。",
      cases: [
        {
          tone: "orange",
          year: "2025 - Now",
          client: "佳简人工智能 / ComfyUI Engineer",
          title: ["AI 电商图", "自动化系统"],
          description:
            "为亚马逊 SKU 图片设计全自动 ComfyUI 流程，并通过 AI coding 连续上线多个 Web 端工具，把节点流真正转成产品面。",
          stats: [
            { value: "全自动", label: "SKU 图片生产管线" },
            { value: "3 个", label: "AI 工具站已上线" },
            { value: "持续迭代", label: "从画布到 API 的产品闭环" },
          ],
          chips: ["ComfyUI", "Frontend", "Automation", "API"],
          links: [
            { label: "AI 工具站", href: "https://yoboxapp.com/app" },
            { label: "无限画布", href: "https://comfyui.yoboxapp.com/" },
            { label: "API 集合站", href: "https://api.yoboxapp.com/" },
          ],
          media: [
            {
              label: "FLOW 01",
              title: "SKU Pipeline",
              lines: ["素材输入", "品牌规则", "多尺寸导出"],
              imageKey: "work.case_01.panel_01",
            },
            {
              label: "BUILD 02",
              title: "Web Shipping",
              lines: ["Tool App", "Infinite Canvas", "API Hub"],
              imageKey: "work.case_01.panel_02",
            },
            {
              label: "QA 03",
              title: "Reusable System",
              lines: ["模板结构", "批量生成", "持续复用"],
              imageKey: "work.case_01.panel_03",
            },
          ],
        },
        {
          tone: "blue",
          year: "2023 - 2025",
          client: "追来科技 / AIGC Designer",
          title: ["AI 相机玩法", "与人像效果系统"],
          description:
            "参与多款 Google Play 与 iOS AI 产品的人像效果、玩法设计和实现，其中摄影类产品在巴西地区登顶，并获得 500 万+ 下载。",
          stats: [
            { value: "#1", label: "摄影产品巴西地区登顶" },
            { value: "500万+", label: "Google Play 累计下载" },
            { value: "多产品", label: "faceme / dressup / agecam / yearcam" },
          ],
          chips: ["AI Camera", "Portrait Effects", "Growth", "Trend Research"],
          links: [],
          media: [
            {
              label: "EFFECT 01",
              title: "Portrait Logic",
              lines: ["人像效果", "风格模板", "一致性控制"],
              imageKey: "work.case_02.panel_01",
            },
            {
              label: "TREND 02",
              title: "Gameplay Research",
              lines: ["海外趋势", "投放素材", "玩法拆解"],
              imageKey: "work.case_02.panel_02",
            },
            {
              label: "SHIP 03",
              title: "Product Fit",
              lines: ["App 内玩法", "增长场景", "效果实现"],
              imageKey: "work.case_02.panel_03",
            },
          ],
        },
        {
          tone: "green",
          year: "2023",
          client: "成都黑驴 / AI Model Trainer",
          title: ["游戏角色模型", "训练与提效"],
          description:
            "基于企业自有图像资产训练 LoRA 模型，为原画流程提供角色预览、多视图与换装方向，显著提升生产效率。",
          stats: [
            { value: "80%", label: "游戏原画流程提效" },
            { value: "多角色", label: "换装与多视图探索" },
            { value: "协作化", label: "支持原画团队方向验证" },
          ],
          chips: ["LoRA", "Model Training", "Game Art", "R&D"],
          links: [],
          media: [
            {
              label: "TRAIN 01",
              title: "LoRA Assets",
              lines: ["企业图像资产", "角色拟合", "风格约束"],
              imageKey: "work.case_03.panel_01",
            },
            {
              label: "OUTPUT 02",
              title: "Preview System",
              lines: ["角色预览", "多视图探索", "草图细化"],
              imageKey: "work.case_03.panel_02",
            },
            {
              label: "VALUE 03",
              title: "Efficiency Lift",
              lines: ["提效 80%", "方向验证", "原画协作"],
              imageKey: "work.case_03.panel_03",
            },
          ],
        },
      ],
    },
    experience: {
      label: "Experience Log",
      title: ["跨过视觉、模型训练、", "AIGC 设计与工作流工程。"],
      body:
        "我不是从单一岗位线性生长出来的设计师，这也是为什么我能同时理解效果、技术约束和产品落地。",
      items: [
        {
          period: "2025.04 - 至今",
          company: "佳简人工智能",
          role: "ComfyUI 工程师",
          summary: "从事 ComfyUI 工作流搭建与 AI 电商图自动化流程。",
          bullets: [
            "完成全自动亚马逊 SKU 图片生成流程",
            "通过 AI coding 上线多款 Web 端产品",
            "搭建 AI 工具站、无限画布与 API 中转集合站",
          ],
          tags: ["ComfyUI", "Web Product", "Automation"],
          links: [
            { label: "yoboxapp.com", href: "https://yoboxapp.com/app" },
            { label: "comfyui.yoboxapp.com", href: "https://comfyui.yoboxapp.com/" },
          ],
        },
        {
          period: "2023.12 - 2025.04",
          company: "追来科技",
          role: "AIGC 设计师",
          summary: "负责 AI 产品玩法、人像效果模板、投放素材研究与效果实现。",
          bullets: [
            "参与 faceme / dressup / agecam / yearcam 等产品",
            "关注海外 AI 新玩法与传播素材",
            "从项目中学习 Figma 与前端编码并转化到实际落地",
          ],
          tags: ["AIGC", "Camera Effects", "Growth"],
          links: [],
        },
        {
          period: "2023.08 - 2023.12",
          company: "成都黑驴",
          role: "AI 模型训练师",
          summary: "负责 AI 图像模型与 SD 训练，为游戏原画团队提供提效支持。",
          bullets: [
            "训练符合角色的 LoRA 模型",
            "辅助角色 3D 预览、多视图与 AI 细化",
            "把模型结果用于高效换肤换装方向探索",
          ],
          tags: ["Model Training", "Game Art", "LoRA"],
          links: [],
        },
        {
          period: "2022.09 - 2023.03",
          company: "成都轰炸机",
          role: "3D 建模",
          summary: "从事咖啡器具建模工作。",
          bullets: ["建立对结构、材质和工业造型的基础理解"],
          tags: ["3D", "Modeling"],
          links: [],
        },
        {
          period: "2018.09 - 2022.07",
          company: "成都文理学院",
          role: "产品设计专业",
          summary: "系统学习平面设计、产品设计、美术史等基础训练。",
          bullets: ["这是我后来能把设计判断带进 AI 工作流的底层来源"],
          tags: ["Product Design", "Visual Foundation"],
          links: [],
        },
      ],
    },
    signals: {
      label: "Signals",
      title: ["我最有价值的地方，", "是把审美、效率和产品判断", "同时推进。"],
      body:
        "如果团队正在做 AI 产品、AIGC 工具、增长视觉或新功能验证，我能直接切进关键位置：既能做视觉判断，也能搭流程与原型。",
      milestones: [
        {
          value: "500万+",
          label: "Google Play 摄影类产品累计下载",
          body: "说明我做的不是实验室效果，而是能进入真实用户分发场景的结果。",
        },
        {
          value: "#1",
          label: "摄影类产品在巴西地区登顶",
          body: "能把效果方向、玩法传播和产品接受度统一起来。",
        },
        {
          value: "80%",
          label: "游戏原画 AI 自动化提效",
          body: "不是只会做 demo，而是能用模型和流程直接改善生产效率。",
        },
        {
          value: "3",
          label: "AI Web 产品面已连续上线",
          body: "从节点流到网页界面，再到 API 产品面，能自己拉通。",
        },
      ],
      skills: [
        { label: "ComfyUI", value: 96 },
        { label: "AI Image", value: 92 },
        { label: "AI Coding", value: 86 },
        { label: "Product Thinking", value: 84 },
        { label: "AI Video", value: 74 },
        { label: "Figma", value: 68 },
      ],
      marquee: [
        "ComfyUI",
        "Flux",
        "Stable Diffusion",
        "Prompt Systems",
        "AI Camera Design",
        "Web MVP",
        "Frontend Prototyping",
        "API Integration",
        "Growth Creative",
        "Product Design",
        "3D Modeling",
      ],
    },
    talk: {
      label: "Open To Build",
      title: ["如果你需要一个", "能做视觉、能写流程、", "也能把原型真正跑起来的人。"],
      body:
        "我更适合 AI 产品、AIGC 设计、AI 工具站、增长视觉、创新玩法验证等场景，尤其是需要跨设计、工程和产品协作的团队。",
      toLabel: "TO: YOJI",
      mailLabel: "( ZHUJIEYOHJI@GMAIL.COM )",
      intro:
        "这是一个更像 conversation 的联系面板。按顺序填完，页面会直接帮你生成一封发给我的邮件草稿。",
      steps: [
        { key: "name", type: "input", prompt: "你好，我是", placeholder: "你的名字" },
        { key: "email", type: "input", prompt: "我的邮箱是", placeholder: "you@example.com" },
        {
          key: "mode",
          type: "options",
          prompt: "我想聊的是",
          options: ["全职岗位", "顾问 / 项目合作", "AI 产品咨询", "创意协作"],
        },
        {
          key: "focus",
          type: "options",
          prompt: "最看重你的方向是",
          options: ["视觉设计", "AI Coding", "产品能力", "需要三者一起"],
        },
        {
          key: "note",
          type: "textarea",
          prompt: "补充说明",
          placeholder: "项目阶段、团队背景、你希望我解决的问题……",
          optional: true,
        },
      ],
      submit: "生成邮件",
      successTitle: "邮件草稿已准备好",
      successBody: "如果没有自动打开邮箱客户端，也可以直接邮件联系我。",
      direct: [
        { label: "邮箱", value: "zhujieyohji@gmail.com", href: "mailto:zhujieyohji@gmail.com" },
        { label: "电话", value: "+86 18048054389", href: "tel:+8618048054389" },
        { label: "AI 工具站", value: "yoboxapp.com/app", href: "https://yoboxapp.com/app" },
        {
          label: "无限画布",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
      ],
    },
    footer: {
      title: ["让 AI", "真正成为", "产品能力。"],
      line: "Working from Chengdu, open to remote teams and global-facing AI products.",
      links: [
        { label: "邮箱", href: "mailto:zhujieyohji@gmail.com" },
        { label: "电话", href: "tel:+8618048054389" },
        { label: "AI 工具站", href: "https://yoboxapp.com/app" },
        { label: "无限画布", href: "https://comfyui.yoboxapp.com/" },
      ],
    },
  },
  en: {
    meta: {
      title: "Yoji | Visual Design x AI Coding x Product Thinking",
      description:
        "A bilingual motion-heavy personal resume inspired by cappen.com, focused on visual design, AI coding, and product thinking.",
    },
    ui: {
      discover: "DISCOVER",
      open: "OPEN",
      copy: "COPY",
      localeZh: "中",
      localeEn: "EN",
      copied: "COPIED",
    },
    brand: {
      name: "Zhu Jie / yoji",
      role: "Visual Design / AI Coding / Product Thinking",
      email: "zhujieyohji@gmail.com",
      phone: "+86 18048054389",
    },
    nav: [
      { label: "WORK", href: "#work" },
      { label: "EXPERIENCE", href: "#experience" },
      { label: "SIGNALS", href: "#signals" },
      { label: "CONTACT", href: "#contact" },
    ],
    preloader: {
      top: ["VISUAL", "THINKER"],
      bottom: ["SYSTEM", "BUILDER"],
      caption: "Turning taste, code, and product judgment into one production line",
      cards: [
        "ComfyUI",
        "AI Camera",
        "Web MVP",
        "Prompt System",
        "Visual Design",
        "Automation",
        "Product Sense",
        "Launch Ready",
      ],
    },
    hero: {
      eyebrow: "COMFYUI WORKFLOW DESIGN / AI IMAGE SYSTEMS / PRODUCT PROTOTYPES / GROWTH CREATIVE",
      title: ["VISUAL", "AI CODING", "PRODUCT SENSE"],
      summary: [
        "I do more than make visuals look sharp, and more than make workflows run.",
        "I compress visual judgment, AI automation, and product execution into one system that can actually ship.",
      ],
      actions: [
        { label: "SEE WORK", href: "#work", variant: "primary" },
        { label: "CONTACT", href: "#contact", variant: "secondary" },
      ],
      metrics: [
        { value: "80%", label: "efficiency gain in game-art automation" },
        { value: "5M+", label: "Google Play downloads for camera products" },
        { value: "#1", label: "photo-app ranking in Brazil" },
      ],
      noteTitle: ["I turn visual", "direction, AI", "workflows, and", "prototypes into systems"],
      noteBody:
        "My background spans model training, AI camera experiences, AI e-commerce automation, and shipping web products. Best fit for teams that need design, engineering, and product judgment to work together.",
      pillars: [
        {
          title: "Visual Design",
          body: "Image systems, camera language, brand atmosphere, interface finish, and aesthetic QA.",
        },
        {
          title: "AI Coding",
          body: "ComfyUI pipelines, plugins, front-end prototypes, API orchestration, and automation delivery.",
        },
        {
          title: "Product Thinking",
          body: "I think about gameplay, context, growth, and feature framing, not only the final visual.",
        },
      ],
      links: [
        { label: "AI Tool Site", value: "yoboxapp.com/app", href: "https://yoboxapp.com/app" },
        {
          label: "Infinite Canvas",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
        {
          label: "API Hub",
          value: "api.yoboxapp.com",
          href: "https://api.yoboxapp.com/",
        },
      ],
    },
    manifesto: {
      eyebrow: "Core Thesis",
      title: [
        'I put <span class="is-italic">visual taste</span>,',
        '<span class="is-italic">AI automation</span>, and',
        '<span class="is-italic">product judgment</span>',
        "into one production line.",
      ],
      body: [
        "That means I can think about visuals, workflows, feature behavior, and shipping strategy at the same time.",
        "Not only images, not only pipelines, but concepts, interfaces, and product surfaces moving together.",
      ],
      thumbs: [
        { code: "01", title: "Visual Systems", body: "Brand-grade imagery and page atmosphere" },
        { code: "02", title: "Workflow Automation", body: "Nodes, plugins, and batch production" },
        { code: "03", title: "AI Camera", body: "Gameplay, effects, and growth assets" },
        { code: "04", title: "Web MVP", body: "Front-end prototypes and product surfaces" },
        { code: "05", title: "Product Framing", body: "MVP definition and scope control" },
        { code: "06", title: "Overseas Growth", body: "Trends, ad creatives, user response" },
      ],
    },
    work: {
      label: "Featured Work",
      title: ["Not a stack of roles,", "but how I turn AI", "into shippable products."],
      body:
        "The work is reorganized around three capability pillars: visual design, AI coding, and product thinking. The point is not only what I worked on, but how I combine complex skills into something launchable.",
      cases: [
        {
          tone: "orange",
          year: "2025 - Now",
          client: "Jiajian AI / ComfyUI Engineer",
          title: ["AI E-commerce", "Automation System"],
          description:
            "Built a fully automated ComfyUI pipeline for Amazon SKU imagery and shipped multiple web tools through AI-assisted coding, turning node graphs into product surfaces.",
          stats: [
            { value: "Automated", label: "SKU image production pipeline" },
            { value: "3", label: "AI web tools already shipped" },
            { value: "Ongoing", label: "product loop from canvas to API" },
          ],
          chips: ["ComfyUI", "Frontend", "Automation", "API"],
          links: [
            { label: "AI Tool Site", href: "https://yoboxapp.com/app" },
            { label: "Infinite Canvas", href: "https://comfyui.yoboxapp.com/" },
            { label: "API Hub", href: "https://api.yoboxapp.com/" },
          ],
          media: [
            {
              label: "FLOW 01",
              title: "SKU Pipeline",
              lines: ["Input assets", "Brand rules", "Multi-size export"],
              imageKey: "work.case_01.panel_01",
            },
            {
              label: "BUILD 02",
              title: "Web Shipping",
              lines: ["Tool App", "Infinite Canvas", "API Hub"],
              imageKey: "work.case_01.panel_02",
            },
            {
              label: "QA 03",
              title: "Reusable System",
              lines: ["Template structure", "Batch generation", "Fast reuse"],
              imageKey: "work.case_01.panel_03",
            },
          ],
        },
        {
          tone: "blue",
          year: "2023 - 2025",
          client: "Zhuilai Tech / AIGC Designer",
          title: ["AI Camera Gameplay", "and Portrait Systems"],
          description:
            "Worked on portrait effects, gameplay concepts, and implementation for multiple Google Play and iOS products. One photography app reached #1 in Brazil and passed 5M+ downloads.",
          stats: [
            { value: "#1", label: "photo-app ranking in Brazil" },
            { value: "5M+", label: "Google Play downloads" },
            { value: "Multi-product", label: "faceme / dressup / agecam / yearcam" },
          ],
          chips: ["AI Camera", "Portrait Effects", "Growth", "Trend Research"],
          links: [],
          media: [
            {
              label: "EFFECT 01",
              title: "Portrait Logic",
              lines: ["Portrait effects", "Template systems", "Consistency control"],
              imageKey: "work.case_02.panel_01",
            },
            {
              label: "TREND 02",
              title: "Gameplay Research",
              lines: ["Overseas trends", "Ad creatives", "Feature breakdown"],
              imageKey: "work.case_02.panel_02",
            },
            {
              label: "SHIP 03",
              title: "Product Fit",
              lines: ["In-app gameplay", "Growth use cases", "Effect delivery"],
              imageKey: "work.case_02.panel_03",
            },
          ],
        },
        {
          tone: "green",
          year: "2023",
          client: "Chengdu Heilu / AI Model Trainer",
          title: ["Game Character", "Model Training"],
          description:
            "Trained LoRA models on internal assets to support character previews, multi-view ideation, and outfit variations for the concept-art pipeline, with a major efficiency lift.",
          stats: [
            { value: "80%", label: "efficiency gain in art workflow" },
            { value: "Multi-character", label: "outfit and multi-view exploration" },
            { value: "Collaborative", label: "direction support for art teams" },
          ],
          chips: ["LoRA", "Model Training", "Game Art", "R&D"],
          links: [],
          media: [
            {
              label: "TRAIN 01",
              title: "LoRA Assets",
              lines: ["Internal assets", "Character fitting", "Style constraints"],
              imageKey: "work.case_03.panel_01",
            },
            {
              label: "OUTPUT 02",
              title: "Preview System",
              lines: ["Character preview", "Multi-view exploration", "Sketch refinement"],
              imageKey: "work.case_03.panel_02",
            },
            {
              label: "VALUE 03",
              title: "Efficiency Lift",
              lines: ["80% faster", "Direction testing", "Artist collaboration"],
              imageKey: "work.case_03.panel_03",
            },
          ],
        },
      ],
    },
    experience: {
      label: "Experience Log",
      title: ["I move across visual design,", "model training, AIGC design,", "and workflow engineering."],
      body:
        "I did not grow out of one single discipline, and that is exactly why I can understand effects, technical constraints, and product delivery at the same time.",
      items: [
        {
          period: "2025.04 - Now",
          company: "Jiajian AI",
          role: "ComfyUI Engineer",
          summary: "Designing ComfyUI workflows and AI e-commerce automation systems.",
          bullets: [
            "Built a fully automated Amazon SKU generation flow",
            "Shipped multiple web products through AI-assisted coding",
            "Connected tool site, infinite canvas, and API hub into one loop",
          ],
          tags: ["ComfyUI", "Web Product", "Automation"],
          links: [
            { label: "yoboxapp.com", href: "https://yoboxapp.com/app" },
            { label: "comfyui.yoboxapp.com", href: "https://comfyui.yoboxapp.com/" },
          ],
        },
        {
          period: "2023.12 - 2025.04",
          company: "Zhuilai Tech",
          role: "AIGC Designer",
          summary: "Worked on AI feature design, portrait effect templates, and growth-material research.",
          bullets: [
            "Contributed to faceme, dressup, agecam, yearcam, and related products",
            "Tracked overseas AI trends and creative formats",
            "Turned Figma and front-end learning into actual product implementation",
          ],
          tags: ["AIGC", "Camera Effects", "Growth"],
          links: [],
        },
        {
          period: "2023.08 - 2023.12",
          company: "Chengdu Heilu",
          role: "AI Model Trainer",
          summary: "Trained AI image models and Stable Diffusion workflows for game-art support.",
          bullets: [
            "Trained LoRA models aligned to specific characters",
            "Supported 3D previews, multi-view ideation, and AI refinement",
            "Used model outputs for faster outfit and direction testing",
          ],
          tags: ["Model Training", "Game Art", "LoRA"],
          links: [],
        },
        {
          period: "2022.09 - 2023.03",
          company: "Chengdu Hongzhaji",
          role: "3D Modeling",
          summary: "Worked on coffee-equipment modeling.",
          bullets: ["Built a stronger eye for structure, surfaces, and industrial form"],
          tags: ["3D", "Modeling"],
          links: [],
        },
        {
          period: "2018.09 - 2022.07",
          company: "Chengdu College of Arts and Sciences",
          role: "Product Design",
          summary: "Studied graphic design, product design, art history, and related fundamentals.",
          bullets: ["That visual foundation is still the base layer behind my AI workflow decisions"],
          tags: ["Product Design", "Visual Foundation"],
          links: [],
        },
      ],
    },
    signals: {
      label: "Signals",
      title: ["My strongest value", "is pushing taste, speed,", "and product judgment together."],
      body:
        "If a team is building AI products, AIGC tools, growth visuals, or validating new features, I can move directly into the critical layer: visual direction, workflow construction, and prototype delivery.",
      milestones: [
        {
          value: "5M+",
          label: "Google Play downloads for photography products",
          body: "That means the work reached real distribution, not only internal demos.",
        },
        {
          value: "#1",
          label: "Photography app ranking in Brazil",
          body: "A sign that effect direction, gameplay spreadability, and product fit were aligned.",
        },
        {
          value: "80%",
          label: "Efficiency gain in game-art automation",
          body: "I do not stop at experimentation. I use models and systems to improve production throughput.",
        },
        {
          value: "3",
          label: "AI web product surfaces shipped",
          body: "I can connect workflows, interfaces, and API layers myself.",
        },
      ],
      skills: [
        { label: "ComfyUI", value: 96 },
        { label: "AI Image", value: 92 },
        { label: "AI Coding", value: 86 },
        { label: "Product Thinking", value: 84 },
        { label: "AI Video", value: 74 },
        { label: "Figma", value: 68 },
      ],
      marquee: [
        "ComfyUI",
        "Flux",
        "Stable Diffusion",
        "Prompt Systems",
        "AI Camera Design",
        "Web MVP",
        "Frontend Prototyping",
        "API Integration",
        "Growth Creative",
        "Product Design",
        "3D Modeling",
      ],
    },
    talk: {
      label: "Open To Build",
      title: ["If you need someone", "who can design, build", "and actually ship the prototype."],
      body:
        "Best fit for AI products, AIGC design, AI tool sites, growth visuals, and experimental feature validation, especially where design, engineering, and product thinking need to move together.",
      toLabel: "TO: YOJI",
      mailLabel: "( ZHUJIEYOHJI@GMAIL.COM )",
      intro:
        "This panel behaves more like a conversation. Complete the steps in order and the page will prepare an email draft addressed to me.",
      steps: [
        { key: "name", type: "input", prompt: "Hi, my name is", placeholder: "your name" },
        { key: "email", type: "input", prompt: "You can reply to me at", placeholder: "you@example.com" },
        {
          key: "mode",
          type: "options",
          prompt: "I am reaching out about",
          options: ["Full-time role", "Consulting / project work", "AI product advisory", "Creative collaboration"],
        },
        {
          key: "focus",
          type: "options",
          prompt: "The capability I care most about is",
          options: ["Visual design", "AI coding", "Product thinking", "I need all three"],
        },
        {
          key: "note",
          type: "textarea",
          prompt: "Additional note",
          placeholder: "Project stage, team context, what you need me to solve...",
          optional: true,
        },
      ],
      submit: "Prepare Email",
      successTitle: "Email draft is ready",
      successBody: "If your mail client did not open automatically, you can still contact me directly.",
      direct: [
        { label: "Email", value: "zhujieyohji@gmail.com", href: "mailto:zhujieyohji@gmail.com" },
        { label: "Phone", value: "+86 18048054389", href: "tel:+8618048054389" },
        { label: "AI Tool Site", value: "yoboxapp.com/app", href: "https://yoboxapp.com/app" },
        {
          label: "Infinite Canvas",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
      ],
    },
    footer: {
      title: ["TURNING AI", "INTO REAL", "PRODUCT VALUE."],
      line: "Working from Chengdu, open to remote teams and global-facing AI products.",
      links: [
        { label: "EMAIL", href: "mailto:zhujieyohji@gmail.com" },
        { label: "PHONE", href: "tel:+8618048054389" },
        { label: "AI TOOL SITE", href: "https://yoboxapp.com/app" },
        { label: "INFINITE CANVAS", href: "https://comfyui.yoboxapp.com/" },
      ],
    },
  },
};

export function getInitialLocale() {
  const stored = window.localStorage.getItem("yoji-locale");
  if (stored && siteContent[stored]) {
    return stored;
  }

  const languages =
    Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

  return languages.some((lang) => /^zh\b/i.test(lang)) ? "zh" : "en";
}
