import type { Album } from "../types/Album";
import type { ApiContext } from "./ApiContext";
import { apiHeaders } from "./apiHeaders";


export async function getAllAlbums(ctx: ApiContext): Promise<Album[]> {

  const result = await fetch(`${ctx.baseUrl}/api/albums`, {
    method: "GET",
    headers: apiHeaders(ctx),
  });

  if (result.status !== 200) {
    throw new Error(`got non-200/OK response when getting all albums`);
  }

  const albums = await result.json() as Album[];

  return albums;
}
