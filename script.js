const siteData = {
  profile: {
    brandName: "YOHJI",
    eyebrow: "AI Visual Designer / Prompt Director / Motion-Ready Key Visuals",
    kicker: "CV x Portfolio x Visual System",
    titleHtml:
      'I design <span class="accent">AI visuals</span><br />that look directed,<br />not generated.',
    summary:
      "把提示词工程、品牌审美、动态图像思维和落地标准，压缩成一套面向品牌、产品和营销场景的视觉系统。",
    actions: [
      { label: "See Selected Works", href: "#projects", variant: "button-primary" },
      { label: "Open Contact Panel", href: "#contact", variant: "button-secondary" },
    ],
    stats: [
      { value: "06+", label: "Years across brand, digital, and motion-oriented visual work" },
      { value: "50+", label: "Reusable visual directions, key visuals, and AI-first design outputs" },
      { value: "01", label: "Core principle: strong taste, fast iteration, repeatable systems" },
    ],
    headerCta: { label: "Book Interview", href: "#contact" },
  },
  brief: {
    label: "Design Brief / 2026",
    status: "Open for interviews",
    title: "AI-first art direction for launches, campaigns, and premium visual systems.",
    summary:
      "这不是一份普通简历页，而是一个带审美判断和产出能力的 AI 视觉设计产品。",
    items: [
      {
        title: "Visual Tone",
        body: "Cinematic, tactile, luminous, fashion-tech. 强调高级材质、镜头感和品牌级完成度。",
      },
      {
        title: "Typical Deliverables",
        body: "KV、发布页主视觉、社媒物料、短视频首帧、故事板、AI 角色和系列化视觉模板。",
      },
      {
        title: "How I Work",
        body: "Brief decode -> visual territories -> prompt matrix -> retouch -> motion-ready delivery.",
      },
    ],
    prompts: [
      "/ consistent visual DNA",
      "/ luxury surface + hard light",
      "/ motion-first hero frames",
      "/ launch page storytelling",
      "/ AI imagery with art direction",
    ],
  },
  // Replace placeholder image URLs below with your final exported assets.
  modes: [
    {
      tone: "emerald",
      title: "Brand Worlds",
      summary: "为品牌搭建完整的图像气质，从系列主视觉到广告拆图，都保持同一个视觉 DNA。",
      tags: ["KV", "Look System", "Campaign"],
      code: "Mode_01",
      image: {
        src: "https://cdn.imgos.cn/vip/2026/03/17/69b97709e6e37.jpg",
        alt: "Placeholder cover for Brand Worlds mode.",
      },
    },
    {
      tone: "pink",
      title: "AI Portraits",
      summary: "做可控的人像和角色设定，兼顾审美、品牌适配和跨场景一致性。",
      tags: ["Character", "Beauty", "Consistency"],
      code: "Mode_02",
      image: {
        src: "https://cdn.imgos.cn/vip/2026/03/17/69b976f57bac6.jpg",
        alt: "Placeholder cover for AI Portraits mode.",
      },
    },
    {
      tone: "cyan",
      title: "Motion Frames",
      summary: "用静帧提前设计镜头节奏，让 AI 图像天然适合继续扩展成短视频和动态物料。",
      tags: ["Storyboard", "Start/End", "Tempo"],
      code: "Mode_03",
      image: {
        src: "https://cdn.imgos.cn/vip/2026/03/17/69b976e0ab532.jpg",
        alt: "Placeholder cover for Motion Frames mode.",
      },
    },
    {
      tone: "amber",
      title: "Product Visuals",
      summary: "把 AI 产品和 SaaS 的抽象功能，翻译成看得懂、记得住、可传播的图像叙事。",
      tags: ["Landing", "Launch", "Narrative"],
      code: "Mode_04",
      image: {
        src: "https://cdn.imgos.cn/vip/2026/03/17/69b976ce0b002.jpg",
        alt: "Placeholder cover for Product Visuals mode.",
      },
    },
    {
      tone: "violet",
      title: "Prompt Systems",
      summary: "不是一次性出图，而是把提示词、参考图和修图规则做成可继承的视觉资产。",
      tags: ["Libraries", "QA", "Scalability"],
      code: "Mode_05",
      image: {
        src: "https://cdn.imgos.cn/vip/2026/03/17/69b976aec4d19.jpg",
        alt: "Placeholder cover for Prompt Systems mode.",
      },
    },
  ],
  projects: [
    {
      tone: "emerald",
      meta: "Spec Launch / 2026",
      title: "Orbit / Wearable Launch System",
      description:
        "为虚构智能穿戴品牌建立整套发布视觉，从主 KV、发布页首屏、社媒广告到短视频首帧，统一成同一种冷感、精密、发光的品牌气质。",
      tags: ["Launch Visuals", "AI Art Direction", "Motion-ready Composition"],
      highlights: [
        { value: "12", label: "Launch assets with one shared visual language" },
        { value: "04", label: "Visual territories narrowed into one final system" },
        { value: "72h", label: "From prompt exploration to polished final frame" },
      ],
      artworks: [
        {
          label: "KV_01",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b976955d800.jpg",
          alt: "Placeholder artwork for Orbit key visual.",
        },
        {
          label: "Prompt DNA",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b9767fdb431.jpg",
          alt: "Placeholder artwork for Orbit prompt DNA board.",
        },
        {
          label: "Motion Sheet",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b976684d3f3.jpg",
          alt: "Placeholder artwork for Orbit motion sheet.",
        },
      ],
    },
    {
      tone: "pink",
      meta: "Spec Campaign / 2026",
      title: "Lumen / Synthetic Beauty Campaign",
      description:
        "将美妆商业片的皮肤质感、光位逻辑和广告排版一起纳入 AI 流程，做出可以延展成品牌 campaign 的系列女性形象和产品合成图。",
      tags: ["Beauty", "Character Consistency", "Commercial Retouch Logic"],
      highlights: [
        { value: "03", label: "Character systems built for consistent campaign visuals" },
        { value: "18", label: "Hero frames across portrait, packshot, and editorial layouts" },
        { value: "01", label: "Unified prompt-and-retouch playbook for scale" },
      ],
      artworks: [
        {
          label: "Portrait",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b976556422a.jpg",
          alt: "Placeholder artwork for Lumen portrait frame.",
        },
        {
          label: "Packshot",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b97645af861.jpg",
          alt: "Placeholder artwork for Lumen packshot frame.",
        },
        {
          label: "Editorial",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b97632dd03f.jpg",
          alt: "Placeholder artwork for Lumen editorial frame.",
        },
      ],
    },
    {
      tone: "cyan",
      meta: "Spec Product Story / 2026",
      title: "Frame Zero / AI Product Storytelling",
      description:
        "面向 AI 产品官网和发布传播，统一主视觉、功能场景图和广告封面语言，让产品页在第一屏就有清晰的高级感和记忆点。",
      tags: ["Website Hero", "Product Narrative", "Conversion-aware Visuals"],
      highlights: [
        { value: "01", label: "Homepage visual system that scales into campaigns" },
        { value: "06", label: "Key screens translated into premium storytelling assets" },
        { value: "Fast", label: "Made for faster iteration without lowering taste" },
      ],
      artworks: [
        {
          label: "Hero",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b97622d5d7a.jpg",
          alt: "Placeholder artwork for Frame Zero hero visual.",
        },
        {
          label: "Interface",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b9781173687.jpg",
          alt: "Placeholder artwork for Frame Zero interface visual.",
        },
        {
          label: "Ad Cover",
          src: "https://cdn.imgos.cn/vip/2026/03/17/69b975ee22165.jpg",
          alt: "Placeholder artwork for Frame Zero ad cover.",
        },
      ],
    },
  ],
  workflow: [
    {
      title: "Decode the Brief",
      body: "先把品牌语气、投放场景、竞品风格和画面目标拆清楚，避免 AI 直接把视觉带向错误方向。",
    },
    {
      title: "Build Visual Territories",
      body: "先出多组风格方向，不急着追求完成图，先找到适合品牌的结构、材质、光感和镜头语言。",
    },
    {
      title: "Create Prompt Matrix",
      body: "把主体、环境、镜头、材质、构图和负向约束做成模块，保证系列图稳定、好控、可复制。",
    },
    {
      title: "Polish for Delivery",
      body: "最后以设计师标准做精修、版式、构图复核和动态延展，让结果更像作品，不像随机生成。",
    },
  ],
  snapshots: [
    {
      title: "Output Range",
      body: "品牌 KV、官网主视觉、海报、广告封面、故事板、系列人像、角色和动态图像首帧。",
    },
    {
      title: "Value to Teams",
      body: "能在有限时间里扩展更多视觉方向，同时维持品牌统一性和高级审美，不把团队拖进大量返工。",
    },
    {
      title: "Why This Site",
      body: "这份页面本身就是一种证明: 你不仅能出图，还能把 AI 能力包装成产品级的视觉表达。",
    },
  ],
  timeline: [
    {
      stage: "Now",
      title: "AI Visual Designer",
      body: "聚焦 AI 图像、品牌视觉、镜头化叙事和 prompt 系统，将生成结果变成真正可交付的设计资产。",
    },
    {
      stage: "Background",
      title: "Brand + Digital + Motion Thinking",
      body: "有传统视觉设计和数字传播的底子，所以知道什么画面能打动品牌方，也知道什么素材能真正用于传播。",
    },
    {
      stage: "Edge",
      title: "Taste with System Thinking",
      body: "不是用 AI 逃避设计，而是用 AI 扩展方向、压缩试错，再用设计判断收口成高完成度结果。",
    },
  ],
  tools: [
    "ComfyUI",
    "Midjourney",
    "Flux",
    "Stable Diffusion",
    "Photoshop",
    "After Effects",
    "Figma",
    "Blender",
    "Runway",
    "Kling",
    "Prompt Writing",
    "Art Direction",
  ],
  manifesto: {
    title: "AI should widen direction, not lower taste.",
    body:
      "如果你需要一个既懂视觉品味、又能把 AI 产出流程化的人，这个页面就是我的自我介绍。",
  },
  contacts: [
    { label: "Email", value: "zhujieyohji@gmail.com", href: "mailto:zhujieyohji@gmail.com" },
    { label: "Phone", value: "+86 18048054389", href: "tel:+8618048054389" },
    { label: "WeChat", value: "zj741838392" },
    { label: "Indie Project", value: "yoboxai.com", href: "https://yoboxai.com/" },
    {
      label: "ComfyUI Workspace",
      value: "comfyui.yoboxapp.com",
      href: "https://comfyui.yoboxapp.com/",
    },
  ],
};

const el = (selector) => document.querySelector(selector);

const renderTags = (items) =>
  items
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");

const renderAction = ({ label, href, variant }) =>
  `<a class="button ${variant}" href="${href}">${label}</a>`;

const renderMode = ({ tone, title, summary, tags, code, image }) => `
  <article class="mode-card motion-card tone-${tone}">
    <div class="mode-preview">
      <img
        class="mode-preview-image"
        src="${image.src}"
        alt="${image.alt}"
        loading="lazy"
        decoding="async"
      />
      <div class="preview-label">
        <span>${title}</span>
        <span>${code}</span>
      </div>
    </div>
    <div class="mode-content">
      <h3>${title}</h3>
      <p>${summary}</p>
      <div class="tag-row">${renderTags(tags)}</div>
    </div>
  </article>
`;

const projectArtLayers = ["layer-back", "layer-mid", "layer-front"];

const renderProjectArt = ({ label, src, alt }, index) => `
  <figure class="art-layer ${projectArtLayers[index] ?? ""}">
    <img class="art-image" src="${src}" alt="${alt}" loading="lazy" decoding="async" />
    <figcaption class="art-chip">${label}</figcaption>
  </figure>
`;

const renderProject = ({ tone, meta, title, description, tags, highlights, artworks }) => `
  <article class="project-card motion-card tone-${tone}">
    <div class="project-copy">
      <div class="project-meta">${meta}</div>
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="tag-row">${renderTags(tags)}</div>
      <ul class="project-highlights">
        ${highlights
          .map(
            ({ value, label }) => `
              <li class="motion-card">
                <strong>${value}</strong>
                <span>${label}</span>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
    <div class="project-art">
      ${artworks.map(renderProjectArt).join("")}
    </div>
  </article>
`;

const renderWorkflow = ({ title, body }, index) => `
  <article class="workflow-step motion-card">
    <div class="step-index">${String(index + 1).padStart(2, "0")}</div>
    <div>
      <h3>${title}</h3>
      <p>${body}</p>
    </div>
  </article>
`;

const renderSnapshot = ({ title, body }) => `
  <article class="snapshot-item motion-card">
    <strong>${title}</strong>
    <p>${body}</p>
  </article>
`;

const renderTimeline = ({ stage, title, body }) => `
  <article class="timeline-item motion-card">
    <div class="timeline-topline">
      <span>${stage}</span>
      <span>Signal</span>
    </div>
    <h3>${title}</h3>
    <p>${body}</p>
  </article>
`;

const renderContact = ({ label, value, href }) => {
  const content = `
    <strong>${label}</strong>
    <span>${value}</span>
  `;

  if (href) {
    const externalAttrs = href.startsWith("http")
      ? ' target="_blank" rel="noreferrer"'
      : "";

    return `<a class="contact-card motion-card" href="${href}"${externalAttrs}>${content}</a>`;
  }

  return `<div class="contact-card motion-card">${content}</div>`;
};

const hydrateContent = () => {
  const { profile, brief, modes, projects, workflow, snapshots, timeline, tools, manifesto, contacts } =
    siteData;

  document.title = `${profile.brandName} | AI Visual Designer`;

  el("#brandName").textContent = profile.brandName;
  el("#headerCta").textContent = profile.headerCta.label;
  el("#headerCta").href = profile.headerCta.href;

  el("#heroEyebrow").textContent = profile.eyebrow;
  el("#heroKicker").textContent = profile.kicker;
  el("#heroTitle").innerHTML = profile.titleHtml;
  el("#heroSummary").textContent = profile.summary;
  el("#heroActions").innerHTML = profile.actions.map(renderAction).join("");
  el("#heroStats").innerHTML = profile.stats
    .map(
      ({ value, label }) => `
        <li class="motion-card">
          <strong>${value}</strong>
          <span>${label}</span>
        </li>
      `,
    )
    .join("");

  el("#briefLabel").textContent = brief.label;
  el("#briefStatus").textContent = brief.status;
  el("#briefTitle").textContent = brief.title;
  el("#briefSummary").textContent = brief.summary;
  el("#briefList").innerHTML = brief.items
    .map(
      ({ title, body }, index) => `
        <article class="brief-item motion-card">
          <div class="index">${index + 1}</div>
          <div>
            <strong>${title}</strong>
            <span>${body}</span>
          </div>
        </article>
      `,
    )
    .join("");
  el("#promptStack").innerHTML = brief.prompts
    .map((prompt) => `<span class="prompt-chip">${prompt}</span>`)
    .join("");

  el("#modeGrid").innerHTML = modes.map(renderMode).join("");
  el("#projectGrid").innerHTML = projects.map(renderProject).join("");
  el("#workflowList").innerHTML = workflow.map(renderWorkflow).join("");
  el("#snapshotGrid").innerHTML = snapshots.map(renderSnapshot).join("");
  el("#timelineList").innerHTML = timeline.map(renderTimeline).join("");
  el("#toolCloud").innerHTML = renderTags(tools);
  el("#manifestoTitle").textContent = manifesto.title;
  el("#manifestoBody").textContent = manifesto.body;
  el("#contactList").innerHTML = contacts.map(renderContact).join("");
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
};

const resetCardMotion = (card) => {
  card.classList.remove("is-tilting");
  card.style.setProperty("--rotate-x", "0deg");
  card.style.setProperty("--rotate-y", "0deg");
  card.style.setProperty("--card-lift", "0px");
  card.style.setProperty("--image-shift-x", "0px");
  card.style.setProperty("--image-shift-y", "0px");
  card.style.setProperty("--card-x", "50%");
  card.style.setProperty("--card-y", "50%");
};

const setupCardMotion = () => {
  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  });

  const supportsHover = window.matchMedia("(hover: hover)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reactiveCards = document.querySelectorAll(".motion-card, .panel");

  reactiveCards.forEach((card, index) => {
    card.style.setProperty("--float-delay", `${(index % 7) * -0.85}s`);
    card.style.setProperty("--flow-duration", `${10 + (index % 5) * 1.2}s`);
    card.style.setProperty("--pulse-duration", `${7.2 + (index % 4) * 0.9}s`);
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");

    if (card.classList.contains("motion-card")) {
      resetCardMotion(card);
    }

    if (!supportsHover || prefersReducedMotion) {
      return;
    }

    const maxRotate = card.matches(".project-card") ? 8 : card.matches(".mode-card") ? 10 : 4.5;
    const shiftRange = card.matches(".project-card") ? 24 : card.matches(".mode-card") ? 16 : 8;
    const lift = card.matches(".project-card") ? -10 : card.matches(".mode-card") ? -8 : -4;
    let frameId = 0;
    let nextRatioX = 0.5;
    let nextRatioY = 0.5;

    const applyMotion = () => {
      frameId = 0;

      card.style.setProperty("--card-x", `${nextRatioX * 100}%`);
      card.style.setProperty("--card-y", `${nextRatioY * 100}%`);

      if (!card.classList.contains("motion-card")) {
        return;
      }

      const rotateY = (nextRatioX - 0.5) * maxRotate * 2;
      const rotateX = (0.5 - nextRatioY) * maxRotate * 1.6;
      const shiftX = (nextRatioX - 0.5) * shiftRange;
      const shiftY = (nextRatioY - 0.5) * shiftRange;

      card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--card-lift", `${lift}px`);
      card.style.setProperty("--image-shift-x", `${(-shiftX).toFixed(2)}px`);
      card.style.setProperty("--image-shift-y", `${(-shiftY).toFixed(2)}px`);
    };

    card.addEventListener("pointerenter", () => {
      if (card.classList.contains("motion-card")) {
        card.classList.add("is-tilting");
      }
    });

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const pointerX = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const pointerY = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
      nextRatioX = rect.width ? pointerX / rect.width : 0.5;
      nextRatioY = rect.height ? pointerY / rect.height : 0.5;

      if (!frameId) {
        frameId = window.requestAnimationFrame(applyMotion);
      }
    });

    const reset = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      if (card.classList.contains("motion-card")) {
        resetCardMotion(card);
      }
    };

    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
  });
};

hydrateContent();
setupReveal();
setupCardMotion();
