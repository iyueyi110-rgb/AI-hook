export const PROMOTIONAL_COPY_TERMS = [
  "赋能",
  "全链路",
  "一站式",
  "智能化升级",
  "精准高效",
  "全面提升",
  "爆款密码",
  "流量密码",
  "高转化",
  "深度赋能",
] as const;

export function findPromotionalCopyTerms(value: string): string[] {
  return PROMOTIONAL_COPY_TERMS.filter((term) => value.includes(term));
}
