import type { Asset } from "./Asset";

export interface AssetSearchRequest {
  page: number;
  size: number;
  isNotInAlbum?: boolean;
  type?: Asset["type"];
}
