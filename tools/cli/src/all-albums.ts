import type { ApiContext } from "@immich-wizard/immich-api/src/api/ApiContext.ts";
import { getAllAlbums } from "@immich-wizard/immich-api/src/api/getAllAlbums.ts";

const ctx: ApiContext = {
  apiKey: process.env["IMMICH_API_KEY"] as string,
  baseUrl: process.env["IMMICH_BASE_URL"] as string,
}

const albums = await getAllAlbums(ctx);
console.log(JSON.stringify(albums, null, 2));
