export const HOME_COPY = {
  productDefinition: "内容开头（Hook）",
  title: "一段内容，生成不同平台的开头",
  subtitle: "输入主题，一次生成 10 个版本，比较后再选择和修改。",
  initialTitle: "输入一个主题，生成第一批开头。",
  initialDescription: "结果会按参考分排序。你可以逐条比较、保留、改写，再决定最终版本。",
} as const;

export const FORM_COPY = {
  topicLabel: "这条内容主要想讲什么？",
  topicPlaceholder: "例如：第一次去重庆旅游，需要注意哪些问题？",
  platformLabel: "准备发到哪里？",
  contentTypeLabel: "这条内容是什么形式？",
  audienceLabel: "希望谁看到这条内容？",
  audiencePlaceholder: "例如：第一次去重庆、预算有限的自由行游客",
  toneLabel: "希望用什么语气？",
  lengthLabel: "开头大约多长？",
  generate: "生成 10 个开头",
  generating: "正在生成 10 个开头",
} as const;

export const RESULT_COPY = {
  title: "这次生成的开头",
  recommended: "建议先看这 3 条",
  rankedFirst: "排序靠前",
  save: "留下来以后用",
  saved: "已留下",
  copy: "复制",
  rewrite: "改写这一条",
  regenerate: "换一批",
  chooseFinal: "设为最终版本",
  chosenFinal: "已设为最终版本",
} as const;

export const EMPTY_COPY = {
  savedTitle: "还没有保留的内容",
  savedDescription: "看到合适的开头后，可以先收藏。",
  historyTitle: "还没有生成记录",
  historyDescription: "输入一个主题，生成第一批开头。",
} as const;

export const GENERATION_ERROR_COPY = {
  insufficientTitle: "还需要一点信息",
  insufficientMessage: "目前的信息还不够，再补充内容主题或目标用户后重试。",
  failedTitle: "这次没有生成成功",
  failedMessage: "这次没有生成成功，请重新尝试。",
  incompleteTitle: "生成结果格式不完整",
  incompleteMessage: "生成结果格式不完整，系统已自动重试。请重新尝试。",
  networkTitle: "暂时无法连接",
  networkMessage: "暂时无法连接生成服务，请检查网络后重新尝试。",
} as const;
