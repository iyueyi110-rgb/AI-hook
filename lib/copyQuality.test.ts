import assert from "node:assert/strict";
import test from "node:test";

import { findPromotionalCopyTerms } from "./copyQuality.ts";

test("finds every configured promotional phrase without changing the source copy", () => {
  const source = "一站式能力深度赋能创作者，提供精准高效的全链路服务，全面提升结果。";

  assert.deepEqual(findPromotionalCopyTerms(source), [
    "赋能",
    "全链路",
    "一站式",
    "精准高效",
    "全面提升",
    "深度赋能",
  ]);
  assert.equal(source, "一站式能力深度赋能创作者，提供精准高效的全链路服务，全面提升结果。");
});

test("deduplicates matches and returns an empty list for natural copy", () => {
  assert.deepEqual(findPromotionalCopyTerms("高转化不是承诺，高转化也不能当结论。"), ["高转化"]);
  assert.deepEqual(findPromotionalCopyTerms("同一条内容，发到不同平台时开头可以怎么改？"), []);
});
