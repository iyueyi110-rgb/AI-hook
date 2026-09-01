import { GenerationError } from "./service.ts";
import { GENERATION_ERROR_COPY } from "../../content/copy.ts";

export interface ClassicGenerationErrorResponse {
  error: string;
  message: string;
  status: number;
}

export function mapGenerationError(
  error: GenerationError
): ClassicGenerationErrorResponse {
  switch (error.code) {
    case "missing_key":
      return {
        error: "生成服务暂不可用",
        message: "生成服务尚未完成配置，请稍后重试或联系维护者。",
        status: 503,
      };
    case "auth":
      return {
        error: "生成服务暂不可用",
        message: "生成服务认证失败，请稍后重试或联系维护者。",
        status: 502,
      };
    case "rate_limit":
      return {
        error: "尝试次数较多",
        message: "生成服务当前较忙，请稍后再试。",
        status: 429,
      };
    case "timeout":
      return {
        error: "请求超时",
        message: "生成等待时间较长，请重试；你的主题和选项已保留。",
        status: 504,
      };
    case "empty_response":
      return {
        error: GENERATION_ERROR_COPY.failedTitle,
        message: GENERATION_ERROR_COPY.failedMessage,
        status: 500,
      };
    case "invalid_json":
      return {
        error: GENERATION_ERROR_COPY.incompleteTitle,
        message: GENERATION_ERROR_COPY.incompleteMessage,
        status: 500,
      };
    case "invalid_count":
      return {
        error: GENERATION_ERROR_COPY.incompleteTitle,
        message: GENERATION_ERROR_COPY.incompleteMessage,
        status: 500,
      };
    case "upstream":
      return {
        error: "生成服务繁忙",
        message: "模型服务暂时不可用，请稍后重试。",
        status: 502,
      };
    case "internal":
      return {
        error: GENERATION_ERROR_COPY.failedTitle,
        message: GENERATION_ERROR_COPY.failedMessage,
        status: 500,
      };
  }
}
