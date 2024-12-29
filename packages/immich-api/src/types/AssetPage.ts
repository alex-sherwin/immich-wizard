import type { Asset } from "./Asset";



export interface AssetPage {
  total: number;
  count: number;
  facets: unknown[];
  nextPage: string;
  items: Asset[];
}
