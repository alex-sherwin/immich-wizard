import type { ApiContext } from "./ApiContext";

export function apiHeaders(ctx: ApiContext): Record<string, string> {
  return {
    "Content-Type": "application/json",
    "x-api-key": ctx.apiKey,
    "Accept": "application/json",
  };
}
