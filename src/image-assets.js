const fallbackAsset = {
  src: "https://placehold.co/1200x900/111111/f5f0e8?text=replace+image+url",
  alt: {
    zh: "待替换图片占位",
    en: "Placeholder image",
  },
};

export const imageAssets = {
  "work.case_01.panel_01": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba36e793c9b.jpeg",
    alt: {
      zh: "AI 电商图自动化系统 / SKU Pipeline 占位图",
      en: "AI e-commerce automation / SKU Pipeline placeholder",
    },
  },
  "work.case_01.panel_02": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba370075d7d.jpeg",
    alt: {
      zh: "AI 电商图自动化系统 / Web Shipping 占位图",
      en: "AI e-commerce automation / Web Shipping placeholder",
    },
  },
  "work.case_01.panel_03": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba36c2bae5b.jpeg",
    alt: {
      zh: "AI 电商图自动化系统 / Reusable System 占位图",
      en: "AI e-commerce automation / Reusable System placeholder",
    },
  },
  "work.case_02.panel_01": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba3847d8d7d.jpeg",
    alt: {
      zh: "AI 相机玩法与人像效果系统 / Portrait Logic 占位图",
      en: "AI camera gameplay / Portrait Logic placeholder",
    },
  },
  "work.case_02.panel_02": {
    src: "https://placehold.co/1200x900/152033/e9eefc?text=work.case_02.panel_02",
    alt: {
      zh: "AI 相机玩法与人像效果系统 / Gameplay Research 占位图",
      en: "AI camera gameplay / Gameplay Research placeholder",
    },
  },
  "work.case_02.panel_03": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba38c9f0084.jpeg",
    alt: {
      zh: "AI 相机玩法与人像效果系统 / Product Fit 占位图",
      en: "AI camera gameplay / Product Fit placeholder",
    },
  },
  "work.case_03.panel_01": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba3a3c68341.jpg",
    alt: {
      zh: "游戏角色模型训练与提效 / LoRA Assets 占位图",
      en: "Game character model training / LoRA Assets placeholder",
    },
  },
  "work.case_03.panel_02": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba3a65b1aa6.jpg",
    alt: {
      zh: "游戏角色模型训练与提效 / Preview System 占位图",
      en: "Game character model training / Preview System placeholder",
    },
  },
  "work.case_03.panel_03": {
    src: "https://cdn.imgos.cn/vip/2026/03/18/69ba3a8357b6a.jpg",
    alt: {
      zh: "游戏角色模型训练与提效 / Efficiency Lift 占位图",
      en: "Game character model training / Efficiency Lift placeholder",
    },
  },
};

export function getImageAsset(key, locale = "en") {
  const asset = imageAssets[key];

  if (!asset) {
    return {
      src: fallbackAsset.src,
      alt: fallbackAsset.alt[locale] ?? fallbackAsset.alt.en,
    };
  }

  return {
    src: asset.src,
    alt: asset.alt?.[locale] ?? asset.alt?.en ?? fallbackAsset.alt.en,
  };
}
