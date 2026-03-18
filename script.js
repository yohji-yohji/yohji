const siteData = {
  zh: {
    meta: {
      title: "朱杰 / yoji | 视觉设计 × AI Coding × 产品能力",
      description:
        "个人品牌简历网站，聚焦视觉设计、ComfyUI 工作流、AI 编程与产品能力。",
    },
    brandRole: "Visual Design / AI Coding / Product",
    nav: [
      { label: "能力", href: "#capabilities" },
      { label: "项目", href: "#work" },
      { label: "经历", href: "#experience" },
      { label: "联系", href: "#contact" },
    ],
    hero: {
      eyebrow: "ComfyUI 工作流设计 / AI 图像系统 / 产品原型",
      titleLines: ["视觉设计", "AI 编程", "产品能力"],
      summary:
        "我做的不只是出图，而是把审美、工作流和上线能力组织成一套能真正交付的系统。经历覆盖 AI 模型训练、AI 相机玩法、AI 电商图自动化与 Web 产品落地。",
      orbCaption: "taste x systems x shipping",
      actions: [
        { label: "查看项目", href: "#work", variant: "button-primary" },
        { label: "联系我", href: "#contact", variant: "button-secondary" },
      ],
      metrics: [
        { value: "80%", label: "游戏原画 AI 自动化提效" },
        { value: "500万+", label: "Google Play 摄影类产品累计下载" },
        { value: "#1", label: "摄影产品在巴西地区登顶" },
      ],
    },
    brief: {
      label: "Profile / 2026",
      status: "开放机会",
      title: "擅长把视觉方向、AI 工作流和产品原型压缩成可复用系统",
      summary:
        "曾参与海外 AI 图像与 AI 相机产品效果实现，其中摄影类产品在巴西地区登顶，并在 Google Play 实现 500 万+ 下载。",
      points: [
        {
          title: "视觉设计",
          body: "图像模板、品牌气质、镜头语言、素材一致性与审美 QA。",
        },
        {
          title: "AI Coding",
          body: "ComfyUI 流程搭建、AI 插件编写、Web 原型落地与 API 串联。",
        },
        {
          title: "产品能力",
          body: "理解玩法设计、投放素材、用户体验和需求收口，不只盯着画面。",
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
    statement: {
      kicker: "Core Thesis",
      html:
        '我把 <span class="statement-accent">视觉审美</span>、<span class="statement-accent">AI 自动化</span> 和 <span class="statement-accent">产品判断</span> 放进同一条生产线，让概念、界面、图像与功能一起上线。',
      focus: [
        "ComfyUI Systems",
        "AI Camera Gameplay",
        "Web Product Prototypes",
        "Prompt Libraries",
        "E-commerce Automation",
        "Visual Templates",
        "Plugin Writing",
        "Growth Materials",
      ],
    },
    abilities: {
      label: "Core Capabilities",
      title: "不是一份普通简历，而是一套能落地的个人能力模型",
      description:
        "你的视觉、代码和产品能力如果分开讲，价值会被削弱。这个页面把三者重新组织成一个完整的职业叙事。",
      cards: [
        {
          tone: "visual",
          eyebrow: "01 / Visual",
          title: "视觉设计",
          summary:
            "能把 AI 生成结果收口成品牌级视觉，不让画面停留在“像 AI 做的”。",
          features: [
            "品牌主视觉与图像模板设计",
            "AI 相机/人像效果方向制定",
            "镜头感、材质感与版式统一",
          ],
          stat: "从 prompt 到 polished delivery",
          preview: ["Key Visual", "Template", "Motion Frame"],
        },
        {
          tone: "coding",
          eyebrow: "02 / Build",
          title: "AI Coding",
          summary:
            "能用 AI 和代码把想法快速变成能跑的工作流、插件和网页原型。",
          features: [
            "ComfyUI 自动化流程",
            "Web 前端原型与页面落地",
            "AI 插件编写与 API 集成",
          ],
          stat: "从想法到可运行 demo",
          preview: ["Workflow", "Plugin", "Frontend"],
        },
        {
          tone: "product",
          eyebrow: "03 / Product",
          title: "产品能力",
          summary:
            "我会站在用户体验、玩法可传播性和业务目标的角度做设计，而不是只把效果做出来。",
          features: [
            "AI 产品玩法策划",
            "需求拆解与 MVP 定义",
            "投放素材与海外趋势研究",
          ],
          stat: "从效果到真正可用的 feature",
          preview: ["Gameplay", "MVP", "Launch"],
        },
      ],
    },
    projects: {
      label: "Selected Work",
      title: "经历不是堆砌公司名称，而是我如何把 AI 做成产品",
      description:
        "这些项目覆盖自动化生产、AI 相机玩法和模型训练提效，分别对应你的三条核心能力主轴。",
      list: [
        {
          tone: "coding",
          period: "2025.04 - 至今",
          role: "ComfyUI 工程师 / 佳简人工智能",
          title: "AI 电商图自动化系统",
          description:
            "为亚马逊 SKU 图片搭建全自动 ComfyUI 生产流程，并用 AI coding 连续上线多个 Web 端产品，把工作流真正产品化。",
          highlights: [
            { value: "全自动", label: "SKU 图片生成工作流" },
            { value: "3 个", label: "AI 工具站点落地" },
            { value: "持续迭代", label: "从画布到 API 的产品闭环" },
          ],
          links: [
            { label: "AI 工具站", href: "https://yoboxapp.com/app" },
            { label: "无限画布", href: "https://comfyui.yoboxapp.com/" },
            { label: "API 集合站", href: "https://api.yoboxapp.com/" },
          ],
          windows: [
            {
              eyebrow: "Flow 01",
              title: "SKU Pipeline",
              lines: ["素材输入", "品牌规则", "多尺寸导出"],
            },
            {
              eyebrow: "Build 02",
              title: "Web Shipping",
              lines: ["App 工具站", "Infinite Canvas", "API Hub"],
            },
            {
              eyebrow: "QA 03",
              title: "Reusable System",
              lines: ["模板化结构", "批量生成", "快速复用"],
            },
          ],
        },
        {
          tone: "visual",
          period: "2023.12 - 2025.04",
          role: "AIGC 设计师 / 追来科技",
          title: "AI 相机玩法与人像效果模板",
          description:
            "参与多款 Google Play 与 iOS AI 产品的人像效果、玩法设计和落地实现，是 AI 相机与娱乐玩法方向的核心成员。",
          highlights: [
            { value: "#1", label: "摄影类产品巴西地区登顶" },
            { value: "500万+", label: "Google Play 累计下载" },
            { value: "多产品", label: "faceme / dressup / agecam / yearcam" },
          ],
          links: [],
          windows: [
            {
              eyebrow: "Effect 01",
              title: "Portrait Logic",
              lines: ["人像效果", "风格模板", "一致性控制"],
            },
            {
              eyebrow: "Trend 02",
              title: "Gameplay Research",
              lines: ["海外趋势", "投放素材", "玩法拆解"],
            },
            {
              eyebrow: "Ship 03",
              title: "Product Fit",
              lines: ["App 内玩法", "增长场景", "效果实现"],
            },
          ],
        },
        {
          tone: "product",
          period: "2023.08 - 2023.12",
          role: "AI 模型训练师 / 成都黑驴",
          title: "游戏角色模型训练与提效",
          description:
            "基于公司自有图像资产训练 LoRA 模型，为原画流程提供角色预览、多视图与换装方向，显著提升生产效率。",
          highlights: [
            { value: "80%", label: "游戏原画环节提效" },
            { value: "多角色", label: "换肤/换装自动化尝试" },
            { value: "多视图", label: "角色设定预览辅助" },
          ],
          links: [],
          windows: [
            {
              eyebrow: "Train 01",
              title: "LoRA Assets",
              lines: ["企业图像资产", "角色拟合", "风格约束"],
            },
            {
              eyebrow: "Output 02",
              title: "Preview System",
              lines: ["角色预览", "多视图探索", "草图细化"],
            },
            {
              eyebrow: "Value 03",
              title: "Efficiency Lift",
              lines: ["提效 80%", "方向验证", "原画协作"],
            },
          ],
        },
      ],
    },
    workflow: {
      label: "Working Method",
      title: "我处理 AI 项目的方式，是先定义方向，再把不确定性收口成流程",
      steps: [
        {
          title: "拆需求与目标",
          body: "先把品牌语气、用户场景、业务目标和交付形式拆清楚，避免一开始就跑偏。",
        },
        {
          title: "设计视觉与交互方向",
          body: "不直接追求结果图，而是先建立风格领地、信息结构和玩法感受。",
        },
        {
          title: "搭工作流与原型",
          body: "把提示词、节点流程、插件、前端页面和接口串起来，做成团队可重复使用的系统。",
        },
        {
          title: "上线并持续调优",
          body: "根据反馈继续修正审美、效率和产品体验，让项目不只停留在 demo。",
        },
      ],
    },
    snapshot: {
      label: "Resume Snapshot",
      title: "项目、学习路径和工具栈都围绕一个目标：更快做出高完成度结果",
      cards: [
        {
          title: "跨领域经历",
          body: "从产品设计专业、建模，到 AI 模型训练、AIGC 设计和 ComfyUI 工程。",
        },
        {
          title: "海外产品经验",
          body: "长期关注海外 AI 新玩法、投放素材与用户接受度，理解效果如何变成增长。",
        },
        {
          title: "输出方式",
          body: "既能做视觉，也能写流程和前端，把 idea 变成能演示、能上线的页面。",
        },
      ],
      timelineHeading: "个人经历",
      timeline: [
        {
          period: "2025.04 - 至今",
          meta: "ComfyUI / E-commerce",
          title: "佳简人工智能",
          body: "ComfyUI 工作流搭建与 AI 电商图自动化流程。",
        },
        {
          period: "2023.12 - 2025.04",
          meta: "AIGC / Camera Products",
          title: "追来科技",
          body: "AI 产品玩法设计、AI 相机人像效果与模板方案。",
        },
        {
          period: "2023.08 - 2023.12",
          meta: "Model Training",
          title: "成都黑驴",
          body: "AI 图像模型与 SD 训练工作。",
        },
        {
          period: "2022.09 - 2023.03",
          meta: "3D Modeling",
          title: "成都轰炸机",
          body: "咖啡器具建模工作。",
        },
        {
          period: "2018.09 - 2022.07",
          meta: "Product Design",
          title: "成都文理学院 / 产品设计专业",
          body: "平面设计、产品设计、美术史等基础训练。",
        },
      ],
      skillsHeading: "技能 / 工具",
      skills: [
        { label: "ComfyUI", value: 96 },
        { label: "AI Image", value: 92 },
        { label: "AI Coding", value: 86 },
        { label: "Flux / SD", value: 82 },
        { label: "AI Video", value: 74 },
        { label: "Figma", value: 66 },
      ],
      tools: [
        "ComfyUI",
        "Flux",
        "Stable Diffusion",
        "Figma",
        "Pika",
        "Runway",
        "HTML/CSS/JS",
        "Prompt System",
        "AI Camera Design",
        "Trend Research",
      ],
    },
    closing: {
      label: "Open to Build",
      title: "如果你需要一个既能做视觉，也能把 AI 流程和产品原型真正跑起来的人。",
      body:
        "我适合加入 AI 产品、AIGC 设计、增长视觉、创新功能验证等团队，尤其是需要跨设计、工程和产品协作的场景。",
      contacts: [
        {
          label: "邮箱",
          value: "zhujieyohji@gmail.com",
          href: "mailto:zhujieyohji@gmail.com",
        },
        {
          label: "电话",
          value: "+86 18048054389",
          href: "tel:+8618048054389",
        },
        {
          label: "AI 工具站",
          value: "yoboxapp.com/app",
          href: "https://yoboxapp.com/app",
        },
        {
          label: "无限画布",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
      ],
      availability: {
        title: "当前更适合的合作方向",
        body: "更适合需要设计、工程和产品判断一起协作的岗位或项目。",
        items: [
          "AI 产品视觉系统",
          "ComfyUI / workflow automation",
          "AI 功能原型与 MVP",
          "海外向 AI 玩法与投放视觉",
        ],
      },
    },
  },
  en: {
    meta: {
      title: "Yoji | Visual Design x AI Coding x Product Thinking",
      description:
        "Personal brand resume site focused on visual design, ComfyUI workflows, AI coding, and product thinking.",
    },
    brandRole: "Visual Design / AI Coding / Product",
    nav: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "ComfyUI Workflow Design / AI Image Systems / Product Prototyping",
      titleLines: ["VISUAL", "AI CODING", "PRODUCT SENSE"],
      summary:
        "I do more than generate images. I organize taste, workflows, and shipping ability into one system that can actually deliver. My background spans model training, AI camera experiences, AI commerce automation, and shipping web products with AI.",
      orbCaption: "taste x systems x shipping",
      actions: [
        { label: "See Work", href: "#work", variant: "button-primary" },
        { label: "Contact", href: "#contact", variant: "button-secondary" },
      ],
      metrics: [
        { value: "80%", label: "efficiency gain in game-art automation" },
        { value: "5M+", label: "Google Play downloads for camera products" },
        { value: "#1", label: "photo app ranking in Brazil" },
      ],
    },
    brief: {
      label: "Profile / 2026",
      status: "Open to roles",
      title: "I turn visual direction, AI workflows, and product prototypes into reusable systems.",
      summary:
        "I contributed to overseas AI imaging and AI camera products, including a photography app that reached #1 in Brazil and passed 5M+ downloads on Google Play.",
      points: [
        {
          title: "Visual Design",
          body: "Image templates, brand atmosphere, camera language, consistency, and aesthetic QA.",
        },
        {
          title: "AI Coding",
          body: "ComfyUI pipeline design, plugin writing, web prototypes, and API integration.",
        },
        {
          title: "Product Thinking",
          body: "I think about gameplay design, growth assets, user experience, and feature scope, not only visuals.",
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
    statement: {
      kicker: "Core Thesis",
      html:
        'I combine <span class="statement-accent">visual taste</span>, <span class="statement-accent">AI automation</span>, and <span class="statement-accent">product judgment</span> into one production line so concepts, interfaces, images, and features can ship together.',
      focus: [
        "ComfyUI Systems",
        "AI Camera Gameplay",
        "Web Product Prototypes",
        "Prompt Libraries",
        "E-commerce Automation",
        "Visual Templates",
        "Plugin Writing",
        "Growth Materials",
      ],
    },
    abilities: {
      label: "Core Capabilities",
      title: "Not a generic resume, but a compact model of how I work",
      description:
        "If visual design, coding, and product sense are told separately, their value gets diluted. This page reframes them as one coherent capability stack.",
      cards: [
        {
          tone: "visual",
          eyebrow: "01 / Visual",
          title: "Visual Design",
          summary:
            "I can turn AI outputs into brand-grade visuals so the final work does not feel merely generated.",
          features: [
            "Key visuals and image-template systems",
            "AI camera and portrait effect direction",
            "Composition, material feeling, and layout consistency",
          ],
          stat: "from prompt to polished delivery",
          preview: ["Key Visual", "Template", "Motion Frame"],
        },
        {
          tone: "coding",
          eyebrow: "02 / Build",
          title: "AI Coding",
          summary:
            "I use AI and code to turn ideas into working pipelines, plugins, and front-end prototypes quickly.",
          features: [
            "ComfyUI automation workflows",
            "Front-end prototypes and landing pages",
            "AI plugins and API integration",
          ],
          stat: "from idea to runnable demo",
          preview: ["Workflow", "Plugin", "Frontend"],
        },
        {
          tone: "product",
          eyebrow: "03 / Product",
          title: "Product Thinking",
          summary:
            "I work from user experience, gameplay spreadability, and business goals instead of stopping at visual effects.",
          features: [
            "AI feature and gameplay planning",
            "Requirement breakdown and MVP definition",
            "Growth creatives and overseas trend research",
          ],
          stat: "from effect to usable feature",
          preview: ["Gameplay", "MVP", "Launch"],
        },
      ],
    },
    projects: {
      label: "Selected Work",
      title: "The value is not where I worked, but how I turned AI into products",
      description:
        "These projects cover automation, AI camera experiences, and model-training efficiency, each aligned with one of the three core capability pillars.",
      list: [
        {
          tone: "coding",
          period: "2025.04 - Now",
          role: "ComfyUI Engineer / Jiajian AI",
          title: "AI E-commerce Image Automation",
          description:
            "Built a fully automated ComfyUI production pipeline for Amazon SKU imagery and shipped several web products through AI-assisted coding, turning workflows into product surfaces.",
          highlights: [
            { value: "Automated", label: "SKU image generation flow" },
            { value: "3 Sites", label: "AI tools already shipped" },
            { value: "Ongoing", label: "product loop from canvas to API" },
          ],
          links: [
            { label: "AI Tool Site", href: "https://yoboxapp.com/app" },
            { label: "Infinite Canvas", href: "https://comfyui.yoboxapp.com/" },
            { label: "API Hub", href: "https://api.yoboxapp.com/" },
          ],
          windows: [
            {
              eyebrow: "Flow 01",
              title: "SKU Pipeline",
              lines: ["Input assets", "Brand rules", "Multi-size export"],
            },
            {
              eyebrow: "Build 02",
              title: "Web Shipping",
              lines: ["Tool app", "Infinite canvas", "API hub"],
            },
            {
              eyebrow: "QA 03",
              title: "Reusable System",
              lines: ["Template structure", "Batch generation", "Fast reuse"],
            },
          ],
        },
        {
          tone: "visual",
          period: "2023.12 - 2025.04",
          role: "AIGC Designer / Zhuilai Tech",
          title: "AI Camera Gameplay and Portrait Effects",
          description:
            "Worked on portrait effects, gameplay concepts, and implementation for multiple Google Play and iOS products, serving as a core contributor in AI camera and entertainment-style features.",
          highlights: [
            { value: "#1", label: "photo app ranking in Brazil" },
            { value: "5M+", label: "Google Play downloads" },
            { value: "Multi-product", label: "faceme / dressup / agecam / yearcam" },
          ],
          links: [],
          windows: [
            {
              eyebrow: "Effect 01",
              title: "Portrait Logic",
              lines: ["Effect templates", "Consistency", "Style control"],
            },
            {
              eyebrow: "Trend 02",
              title: "Gameplay Research",
              lines: ["Overseas trends", "Ad creatives", "Feature breakdown"],
            },
            {
              eyebrow: "Ship 03",
              title: "Product Fit",
              lines: ["In-app gameplay", "Growth use cases", "Effect delivery"],
            },
          ],
        },
        {
          tone: "product",
          period: "2023.08 - 2023.12",
          role: "AI Model Trainer / Chengdu Heilu",
          title: "Game Character Model Training",
          description:
            "Trained LoRA models on internal assets to support character previews, multi-view ideation, and outfit variations for the art pipeline, with a major efficiency lift.",
          highlights: [
            { value: "80%", label: "efficiency gain in art workflow" },
            { value: "Multi-character", label: "skin and outfit automation tests" },
            { value: "Preview", label: "multi-view support for concept teams" },
          ],
          links: [],
          windows: [
            {
              eyebrow: "Train 01",
              title: "LoRA Assets",
              lines: ["Internal image assets", "Character fitting", "Style constraints"],
            },
            {
              eyebrow: "Output 02",
              title: "Preview System",
              lines: ["Character preview", "Multi-view exploration", "Sketch refinement"],
            },
            {
              eyebrow: "Value 03",
              title: "Efficiency Lift",
              lines: ["80% faster", "Direction testing", "Artist collaboration"],
            },
          ],
        },
      ],
    },
    workflow: {
      label: "Working Method",
      title: "My way of handling AI projects is to define direction first, then compress uncertainty into a system",
      steps: [
        {
          title: "Decode the brief",
          body: "Clarify brand tone, user context, business goal, and deliverable before the workflow starts.",
        },
        {
          title: "Shape visual and interaction directions",
          body: "I do not chase final images first. I define territories, structure, and how the experience should feel.",
        },
        {
          title: "Build workflow and prototype",
          body: "Prompts, node flows, plugins, front-end pages, and APIs are connected into something the team can reuse.",
        },
        {
          title: "Ship and refine",
          body: "I keep tuning aesthetics, efficiency, and product behavior so the result does not stop at demo stage.",
        },
      ],
    },
    snapshot: {
      label: "Resume Snapshot",
      title: "Projects, learning path, and tools all point to one goal: shipping stronger work faster",
      cards: [
        {
          title: "Cross-disciplinary path",
          body: "From product design and modeling to AI model training, AIGC design, and ComfyUI engineering.",
        },
        {
          title: "Overseas product exposure",
          body: "I track global AI trends, growth assets, and user response, not only the output effect itself.",
        },
        {
          title: "How I output",
          body: "I can design visuals, build flows, and write front-end code to turn ideas into something demoable and shippable.",
        },
      ],
      timelineHeading: "Experience",
      timeline: [
        {
          period: "2025.04 - Now",
          meta: "ComfyUI / E-commerce",
          title: "Jiajian AI",
          body: "ComfyUI workflow design and AI commerce-image automation.",
        },
        {
          period: "2023.12 - 2025.04",
          meta: "AIGC / Camera Products",
          title: "Zhuilai Tech",
          body: "AI feature design, AI camera portrait effects, and template systems.",
        },
        {
          period: "2023.08 - 2023.12",
          meta: "Model Training",
          title: "Chengdu Heilu",
          body: "AI image-model and Stable Diffusion training work.",
        },
        {
          period: "2022.09 - 2023.03",
          meta: "3D Modeling",
          title: "Chengdu Hongzhaji",
          body: "3D modeling work focused on coffee equipment.",
        },
        {
          period: "2018.09 - 2022.07",
          meta: "Product Design",
          title: "Chengdu College of Arts and Sciences / Product Design",
          body: "Training in graphic design, product design, art history, and related fundamentals.",
        },
      ],
      skillsHeading: "Skills / Tools",
      skills: [
        { label: "ComfyUI", value: 96 },
        { label: "AI Image", value: 92 },
        { label: "AI Coding", value: 86 },
        { label: "Flux / SD", value: 82 },
        { label: "AI Video", value: 74 },
        { label: "Figma", value: 66 },
      ],
      tools: [
        "ComfyUI",
        "Flux",
        "Stable Diffusion",
        "Figma",
        "Pika",
        "Runway",
        "HTML/CSS/JS",
        "Prompt Systems",
        "AI Camera Design",
        "Trend Research",
      ],
    },
    closing: {
      label: "Open to Build",
      title: "If you need someone who can design, build AI workflows, and make product prototypes actually run.",
      body:
        "I am a strong fit for AI products, AIGC design, growth visuals, and experimental feature validation, especially in teams that need design, engineering, and product thinking to work together.",
      contacts: [
        {
          label: "Email",
          value: "zhujieyohji@gmail.com",
          href: "mailto:zhujieyohji@gmail.com",
        },
        {
          label: "Phone",
          value: "+86 18048054389",
          href: "tel:+8618048054389",
        },
        {
          label: "AI Tool Site",
          value: "yoboxapp.com/app",
          href: "https://yoboxapp.com/app",
        },
        {
          label: "Infinite Canvas",
          value: "comfyui.yoboxapp.com",
          href: "https://comfyui.yoboxapp.com/",
        },
      ],
      availability: {
        title: "Best-fit collaboration areas",
        body: "Most useful in roles or projects where design, engineering, and product judgment need to move together.",
        items: [
          "AI product visual systems",
          "ComfyUI / workflow automation",
          "AI features and MVP prototypes",
          "Global-facing AI gameplay and growth creatives",
        ],
      },
    },
  },
};

const state = {
  locale: "zh",
  revealObserver: null,
  themeObserver: null,
  orbCleanup: null,
};

const el = (selector) => document.querySelector(selector);
const els = (selector) => Array.from(document.querySelectorAll(selector));

function getPreferredLocale() {
  const stored = window.localStorage.getItem("yoji-locale");
  if (stored && siteData[stored]) {
    return stored;
  }

  const languages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];

  return languages.some((lang) => /^zh\b/i.test(lang)) ? "zh" : "en";
}

function renderTitleLines(lines) {
  return lines
    .map(
      (line, index) => `
        <span class="title-line">
          <span class="title-inner" style="--line-delay:${index * 120}ms">${line}</span>
        </span>
      `,
    )
    .join("");
}

function renderActions(actions) {
  return actions
    .map(
      ({ label, href, variant }) =>
        `<a class="button ${variant}" href="${href}">${label}</a>`,
    )
    .join("");
}

function renderMetrics(metrics) {
  return metrics
    .map(
      ({ value, label }) => `
        <li class="metric-card" data-motion>
          <strong>${value}</strong>
          <span>${label}</span>
        </li>
      `,
    )
    .join("");
}

function renderBriefPoints(points) {
  return points
    .map(
      ({ title, body }) => `
        <article class="brief-point">
          <strong>${title}</strong>
          <span>${body}</span>
        </article>
      `,
    )
    .join("");
}

function renderMiniLinks(items) {
  return items
    .map(
      ({ label, value, href }) => `
        <a class="mini-link" href="${href}" target="_blank" rel="noreferrer">
          <strong>${label}</strong>
          <span>${value}</span>
        </a>
      `,
    )
    .join("");
}

function renderAbilityCards(cards) {
  return cards
    .map(
      ({ tone, eyebrow, title, summary, features, stat, preview }, index) => `
        <article class="ability-card tilt-card tone-${tone} reveal" data-motion>
          <div class="ability-preview">
            <span class="ability-index">${String(index + 1).padStart(2, "0")}</span>
            <div class="preview-stack">
              ${preview.map((item) => `<span class="preview-chip">${item}</span>`).join("")}
            </div>
          </div>

          <div class="ability-content">
            <p class="card-kicker">${eyebrow}</p>
            <h3>${title}</h3>
            <p>${summary}</p>
            <ul class="feature-list">
              ${features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <div class="ability-stat">${stat}</div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjectLinks(links) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="project-links">
      ${links
        .map(
          ({ label, href }) =>
            `<a class="project-link" href="${href}" target="_blank" rel="noreferrer">${label}</a>`,
        )
        .join("")}
    </div>
  `;
}

function renderProjects(projects) {
  return projects
    .map(
      ({ tone, period, role, title, description, highlights, links, windows }) => `
        <article class="project-card tilt-card tone-${tone} reveal" data-motion>
          <div class="project-copy">
            <div class="project-meta">
              <span>${period}</span>
              <span>${role}</span>
            </div>

            <h3>${title}</h3>
            <p>${description}</p>

            <ul class="project-highlights">
              ${highlights
                .map(
                  ({ value, label }) => `
                    <li>
                      <strong>${value}</strong>
                      <span>${label}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>

            ${renderProjectLinks(links)}
          </div>

          <div class="project-art">
            ${windows
              .map(
                ({ eyebrow, title: windowTitle, lines }, index) => `
                  <article class="project-window window-${index + 1}">
                    <span class="window-label">${eyebrow}</span>
                    <h4>${windowTitle}</h4>
                    <ul class="window-lines">
                      ${lines.map((line) => `<li>${line}</li>`).join("")}
                    </ul>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderWorkflow(steps) {
  return steps
    .map(
      ({ title, body }, index) => `
        <article class="workflow-step reveal">
          <div class="workflow-index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSnapshotCards(cards) {
  return cards
    .map(
      ({ title, body }) => `
        <article class="snapshot-item reveal">
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function renderTimeline(items) {
  return items
    .map(
      ({ period, meta, title, body }) => `
        <article class="timeline-item reveal">
          <div class="timeline-meta">
            <span>${period}</span>
            <span>${meta}</span>
          </div>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function renderSkillBars(skills) {
  return skills
    .map(
      ({ label, value }) => `
        <div class="skill-row reveal">
          <div class="skill-meta">
            <span>${label}</span>
            <span>${value}</span>
          </div>
          <div class="skill-track">
            <span class="skill-fill" style="width:${value}%"></span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderTools(tools) {
  return tools.map((tool) => `<span class="tool-tag">${tool}</span>`).join("");
}

function renderContacts(contacts) {
  return contacts
    .map(
      ({ label, value, href }) => `
        <a class="contact-card" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} data-motion>
          <strong>${label}</strong>
          <p>${value}</p>
        </a>
      `,
    )
    .join("");
}

function renderAvailability({ title, body, items }) {
  return `
    <strong>${title}</strong>
    <p>${body}</p>
    <ul class="availability-list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderFocusItems(items) {
  const duplicated = [...items, ...items];
  return duplicated.map((item) => `<span class="focus-item">${item}</span>`).join("");
}

function renderNav(items) {
  return items
    .map(
      ({ label, href }) => `
        <a class="nav-link" href="${href}">
          <span class="nav-top">
            <span class="nav-dot" aria-hidden="true"></span>
            <span>${label}</span>
          </span>
        </a>
      `,
    )
    .join("");
}

function applyLocale(locale) {
  const data = siteData[locale] || siteData.zh;
  state.locale = locale;
  window.localStorage.setItem("yoji-locale", locale);

  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.title = data.meta.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", data.meta.description);
  }

  el("#brandRole").textContent = data.brandRole;
  el("#navGrid").innerHTML = renderNav(data.nav);

  el("#heroEyebrow").textContent = data.hero.eyebrow;
  el("#heroTitle").innerHTML = renderTitleLines(data.hero.titleLines);
  el("#heroSummary").textContent = data.hero.summary;
  el("#orbCaption").textContent = data.hero.orbCaption;
  el("#heroActions").innerHTML = renderActions(data.hero.actions);
  el("#heroMetrics").innerHTML = renderMetrics(data.hero.metrics);

  el("#briefLabel").textContent = data.brief.label;
  el("#briefStatus").textContent = data.brief.status;
  el("#briefTitle").textContent = data.brief.title;
  el("#briefSummary").textContent = data.brief.summary;
  el("#briefPoints").innerHTML = renderBriefPoints(data.brief.points);
  el("#miniLinks").innerHTML = renderMiniLinks(data.brief.links);

  el("#statementKicker").textContent = data.statement.kicker;
  el("#statementCopy").innerHTML = data.statement.html;
  el("#focusTrack").innerHTML = renderFocusItems(data.statement.focus);

  el("#abilitiesLabel").textContent = data.abilities.label;
  el("#abilitiesTitle").textContent = data.abilities.title;
  el("#abilitiesDescription").textContent = data.abilities.description;
  el("#abilityGrid").innerHTML = renderAbilityCards(data.abilities.cards);

  el("#projectsLabel").textContent = data.projects.label;
  el("#projectsTitle").textContent = data.projects.title;
  el("#projectsDescription").textContent = data.projects.description;
  el("#projectList").innerHTML = renderProjects(data.projects.list);

  el("#workflowLabel").textContent = data.workflow.label;
  el("#workflowTitle").textContent = data.workflow.title;
  el("#workflowList").innerHTML = renderWorkflow(data.workflow.steps);

  el("#snapshotLabel").textContent = data.snapshot.label;
  el("#snapshotTitle").textContent = data.snapshot.title;
  el("#snapshotGrid").innerHTML = renderSnapshotCards(data.snapshot.cards);
  el("#timelineHeading").textContent = data.snapshot.timelineHeading;
  el("#timelineList").innerHTML = renderTimeline(data.snapshot.timeline);
  el("#skillsHeading").textContent = data.snapshot.skillsHeading;
  el("#skillBars").innerHTML = renderSkillBars(data.snapshot.skills);
  el("#toolCloud").innerHTML = renderTools(data.snapshot.tools);

  el("#contactLabel").textContent = data.closing.label;
  el("#closingTitle").textContent = data.closing.title;
  el("#closingBody").textContent = data.closing.body;
  el("#contactGrid").innerHTML = renderContacts(data.closing.contacts);
  el("#availabilityCard").innerHTML = renderAvailability(data.closing.availability);

  els("[data-locale-switch]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.localeSwitch === locale));
  });

  setupReveal();
  setupMotionCards();
  restartTitleIntro();
}

function restartTitleIntro() {
  document.body.classList.remove("is-ready");
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  });
}

function setupLocaleSwitch() {
  els("[data-locale-switch]").forEach((button) => {
    if (button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      applyLocale(button.dataset.localeSwitch);
    });
  });
}

function setupReveal() {
  if (state.revealObserver) {
    state.revealObserver.disconnect();
  }

  state.revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  els(".reveal").forEach((node) => state.revealObserver.observe(node));
}

function setupMotionCards() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsHover = window.matchMedia("(hover: hover)").matches;

  if (!supportsHover || prefersReducedMotion) {
    return;
  }

  els("[data-motion], .motion-panel").forEach((card) => {
    if (card.dataset.motionBound === "true") {
      return;
    }

    card.dataset.motionBound = "true";

    let frameId = 0;
    let nextX = 0.5;
    let nextY = 0.5;
    const maxRotate = card.classList.contains("project-card")
      ? 8
      : card.classList.contains("ability-card")
        ? 10
        : 4.5;

    const applyMotion = () => {
      frameId = 0;
      const rotateY = (nextX - 0.5) * maxRotate * 2;
      const rotateX = (0.5 - nextY) * maxRotate * 1.5;
      const lift = card.classList.contains("project-card") ? -10 : -6;

      card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--lift", `${lift}px`);
      card.style.setProperty("--glow-x", `${(nextX * 100).toFixed(2)}%`);
      card.style.setProperty("--glow-y", `${(nextY * 100).toFixed(2)}%`);
    };

    const reset = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--lift", "0px");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    };

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      nextX = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
      nextY = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
      nextX = Math.max(0, Math.min(1, nextX));
      nextY = Math.max(0, Math.min(1, nextY));

      if (!frameId) {
        frameId = window.requestAnimationFrame(applyMotion);
      }
    });

    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
  });
}

function setupHeaderThemeObserver() {
  if (state.themeObserver) {
    return;
  }

  state.themeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.dataset.headerTheme = entry.target.dataset.headerTheme || "light";
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-35% 0px -50% 0px",
    },
  );

  els("section[data-header-theme]").forEach((section) => state.themeObserver.observe(section));
}

function setupHeroOrb() {
  const canvas = el("#heroOrb");
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const pointer = {
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  };

  let width = 0;
  let height = 0;
  let frameId = 0;
  let isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const rotateY = (x, z, angle) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [x * cos + z * sin, z * cos - x * sin];
  };

  const rotateX = (y, z, angle) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [y * cos - z * sin, y * sin + z * cos];
  };

  const rotateZ = (x, y, angle) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [x * cos - y * sin, x * sin + y * cos];
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const render = (time) => {
    if (!width || !height) {
      resize();
    }

    pointer.x += (pointer.targetX - pointer.x) * (isReduced ? 1 : 0.06);
    pointer.y += (pointer.targetY - pointer.y) * (isReduced ? 1 : 0.06);

    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const majorRadius = Math.min(width, height) * 0.24;
    const minorRadius = majorRadius * 0.44;
    const perspective = majorRadius * 7.6;
    const rotY = time * 0.00035 + (pointer.x - 0.5) * 1.15;
    const rotX = 1.1 + (pointer.y - 0.5) * 1.15 + Math.sin(time * 0.00028) * 0.08;
    const rotZ = time * 0.00016;

    const glow = ctx.createRadialGradient(cx, cy, majorRadius * 0.1, cx, cy, majorRadius * 1.4);
    glow.addColorStop(0, "rgba(255,255,255,0.08)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    const loops = [];
    const ringCount = 64;
    const segmentCount = 108;

    for (let i = 0; i < ringCount; i += 1) {
      const v = (i / ringCount) * Math.PI * 2;
      const points = [];
      let depth = 0;

      for (let j = 0; j <= segmentCount; j += 1) {
        const u = (j / segmentCount) * Math.PI * 2;

        let x = (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u);
        let y = (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u);
        let z = minorRadius * Math.sin(v);

        [x, z] = rotateY(x, z, rotY);
        [y, z] = rotateX(y, z, rotX);
        [x, y] = rotateZ(x, y, rotZ);

        const scale = perspective / (perspective - z);
        points.push({
          x: cx + x * scale,
          y: cy + y * scale,
          z,
        });
        depth += z;
      }

      loops.push({
        depth: depth / points.length,
        brightness: (Math.sin(v) + 1) / 2,
        points,
      });
    }

    loops.sort((a, b) => a.depth - b.depth);

    loops.forEach((loop, index) => {
      const normalizedDepth = (loop.depth + minorRadius) / (minorRadius * 2);
      const shadowStrength = 0.08 + normalizedDepth * 0.14;
      const darkValue = Math.round(28 + normalizedDepth * 118);
      const lightValue = Math.round(120 + loop.brightness * 110);

      ctx.beginPath();
      loop.points.forEach((point, pointIndex) => {
        if (pointIndex === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.lineWidth = 1.3 + normalizedDepth * 2.4;
      ctx.strokeStyle = `rgba(${darkValue}, ${darkValue}, ${darkValue}, ${0.16 + normalizedDepth * 0.74})`;
      ctx.shadowBlur = 18 + normalizedDepth * 18;
      ctx.shadowColor = `rgba(255,255,255,${shadowStrength})`;
      ctx.stroke();

      if (index % 3 === 0) {
        ctx.beginPath();
        loop.points.forEach((point, pointIndex) => {
          if (pointIndex === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.lineWidth = 0.8 + normalizedDepth * 1.4;
        ctx.strokeStyle = `rgba(${lightValue}, ${lightValue}, ${lightValue}, ${0.06 + normalizedDepth * 0.18})`;
        ctx.shadowBlur = 0;
        ctx.stroke();
      }
    });

    ctx.beginPath();
    ctx.arc(cx, cy, majorRadius * 0.44, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(6, 6, 6, 0.9)";
    ctx.fill();

    if (!isReduced) {
      frameId = window.requestAnimationFrame(render);
    }
  };

  const onPointerMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.targetX = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
    pointer.targetY = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
    pointer.targetX = Math.max(0, Math.min(1, pointer.targetX));
    pointer.targetY = Math.max(0, Math.min(1, pointer.targetY));
  };

  const onPointerLeave = () => {
    pointer.targetX = 0.5;
    pointer.targetY = 0.5;
  };

  const onResize = () => {
    resize();
    if (isReduced) {
      render(performance.now());
    }
  };

  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onMotionChange = () => {
    isReduced = media.matches;
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }

    resize();
    render(performance.now());
  };

  resize();
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("resize", onResize);
  media.addEventListener("change", onMotionChange);
  render(performance.now());

  state.orbCleanup = () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }

    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerleave", onPointerLeave);
    window.removeEventListener("resize", onResize);
    media.removeEventListener("change", onMotionChange);
  };
}

function init() {
  setupLocaleSwitch();
  setupHeaderThemeObserver();
  applyLocale(getPreferredLocale());
  setupHeroOrb();
}

init();
