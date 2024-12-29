export interface Asset {
  id: string;
  libraryId: string;
  type: "IMAGE" | "VIDEO" | "AUDIO" | "OTHER";
  originalFileName: string;
  originalPath: string;
  fileCreatedAt: string;
  fileModifiedAt: string;
  originalMimeType: string;
}
