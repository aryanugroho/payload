export type FileSize = {
  filename: string;
  filesize: number;
  mimeType: string;
  name: string;
  width: number;
  height: number;
  crop: string;
}

export type FileSizes = {
  [size: string]: FileSize
}

export type FileData = {
  filename: string;
  filesize: number;
  mimeType: string;
  width: number;
  height: number;
  sizes: FileSizes;
};

export type ImageSize = {
  name: string,
  width: number,
  height: number,
  crop?: string, // comes from sharp package
};

export type IncomingUploadType = {
  imageSizes?: ImageSize[];
  staticURL?: string;
  staticDir?: string;
  adminThumbnail?: string;
}

export type Upload = {
  imageSizes?: ImageSize[]
  staticURL: string
  staticDir: string
  adminThumbnail?: string
}

export type File = {
  data: Buffer
  mimetype: string
  name: string
  size: number
}
