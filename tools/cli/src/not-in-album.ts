import type { ApiContext } from "@immich-wizard/immich-api/src/api/ApiContext.ts";
import { getAssetsNotInAlbum } from "@immich-wizard/immich-api/src/api/getAssetsNotInAlbum.ts";


const ctx: ApiContext = {
  apiKey: process.env["IMMICH_API_KEY"] as string,
  baseUrl: process.env["IMMICH_BASE_URL"] as string,
}

const assets = await getAssetsNotInAlbum(ctx, 1, 1000, "VIDEO");
console.log(JSON.stringify(assets, null, 2));
