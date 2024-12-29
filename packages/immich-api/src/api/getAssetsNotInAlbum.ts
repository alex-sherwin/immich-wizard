import type { Asset } from "../types/Asset";
import type { AssetSearchRequest } from "../types/AssetSearchRequest";
import type { AssetSearchResponse } from "../types/AssetSearchResponse";
import type { ApiContext } from "./ApiContext";
import { apiHeaders } from "./apiHeaders";

export async function getAssetsNotInAlbum(ctx: ApiContext, page: number, size: number, type: AssetSearchRequest["type"]): Promise<Asset[]> {

  const req: AssetSearchRequest = {
    page,
    size,
    type,
    isNotInAlbum: true,
  };
  
  const result = await fetch(`${ctx.baseUrl}/api/search/metadata`, {
    method: "POST",
    headers: apiHeaders(ctx),
    body: JSON.stringify(req),
  });

  if (result.status !== 200) {
    throw new Error("got non-200/OK response");
  }

  const responseBody = await result.json() as AssetSearchResponse;

  return responseBody.assets.items;
}
