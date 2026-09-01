import type { Platform, ContentType, EmotionTone } from "./types";

export const PLATFORM_CONFIG: Record<
  Platform,
  { label: string; emoji: string; description: string }
> = {
  xiaohongshu: {
    label: "小红书",
    emoji: "📕",
    description: "以生活经验和真实感受为主，表达自然，适合图文分段和具体细节",
  },
  douyin: {
    label: "抖音",
    emoji: "🎵",
    description: "短视频平台，开头需要尽快点明问题或场景，句子简短，口语感较强",
  },
  bilibili: {
    label: "B站",
    emoji: "📺",
    description: "视频社区，适合清楚交代主题，也可以加入适量互动和轻松表达",
  },
  youtube: {
    label: "YouTube",
    emoji: "▶️",
    description: "长视频平台，开头适合明确内容范围、观看理由和接下来的信息结构",
  },
  x: {
    label: "X",
    emoji: "𝕏",
    description: "短文本平台，适合直接提出观点、问题或观察，避免过多铺垫",
  },
};

export const CONTENT_TYPE_CONFIG: Record<
  ContentType,
  { label: string; icon: string }
> = {
  video: { label: "视频", icon: "🎬" },
  "image-text": { label: "图文", icon: "📝" },
  "product-ad": { label: "产品介绍", icon: "📦" },
  tutorial: { label: "教程", icon: "📖" },
  opinion: { label: "观点帖", icon: "💡" },
};

// 10 styles mapped per platform — each platform gets its own flavor
export const PLATFORM_STYLES: Record<Platform, string[]> = {
  xiaohongshu: [
    "朋友分享",
    "亲身体验",
    "避坑提醒",
    "要点清单",
    "前后对比",
    "处境共鸣",
    "问题引入",
    "省钱方法",
    "生活细节",
    "冷门经验",
  ],
  douyin: [
    "直接点题",
    "反常识",
    "具体问题",
    "情绪共鸣",
    "发起挑战",
    "数字切入",
    "转折开场",
    "场景代入",
    "提问开场",
    "观点开场",
  ],
  bilibili: [
    "互动提问",
    "原理拆解",
    "轻松玩梗",
    "知识反差",
    "圈内视角",
    "实际测评",
    "案例改编",
    "观众预判",
    "概念解释",
    "经历复盘",
  ],
  youtube: [
    "问题回答",
    "信息缺口",
    "案例故事",
    "步骤预告",
    "经验依据",
    "对比测试",
    "趋势解读",
    "不同观点",
    "资源整理",
    "经验分享",
  ],
  x: [
    "直接观点",
    "简短判断",
    "反共识",
    "数据对照",
    "简短提问",
    "亲身经历",
    "提出异议",
    "一句总结",
    "二选一",
    "回应热点",
  ],
};

// Color mapping for style badges — 10 colors cycle
export const STYLE_COLORS = [
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-800",
  "bg-sky-100 text-sky-800",
  "bg-teal-100 text-teal-800",
  "bg-orange-100 text-orange-800",
  "bg-indigo-100 text-indigo-800",
  "bg-red-100 text-red-800",
  "bg-slate-200 text-slate-800",
  "bg-emerald-100 text-emerald-800",
  "bg-fuchsia-100 text-fuchsia-800",
];

export const EMOTION_TONE_CONFIG: Record<
  EmotionTone,
  { label: string; icon: string; description: string }
> = {
  urgent: {
    label: "直接",
    icon: "⚡",
    description: "尽快说明问题和时间条件，避免夸张或恐吓",
  },
  curious: {
    label: "好奇心",
    icon: "🔍",
    description: "制造信息缺口，引导继续阅读或观看",
  },
  humorous: {
    label: "幽默",
    icon: "😄",
    description: "用轻松反差降低阅读门槛，适合生活化表达",
  },
  emotional: {
    label: "情绪共鸣",
    icon: "💭",
    description: "强调用户身份、处境和真实感受",
  },
  authoritative: {
    label: "有依据",
    icon: "📌",
    description: "说明经验、方法或案例来源，不虚构身份和结论",
  },
  rebellious: {
    label: "反常识",
    icon: "🔥",
    description: "通过反直觉观点制造讨论欲和停留欲",
  },
};
