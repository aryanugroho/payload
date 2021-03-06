import fs from 'fs';
import mime from 'mime';
import path from 'path';
import { File } from './types';

const getFileByPath = (filePath: string): File => {
  if (typeof filePath === 'string') {
    const data = fs.readFileSync(filePath);
    const mimetype = mime.getType(filePath);
    const { size } = fs.statSync(filePath);

    const name = path.basename(filePath);

    return {
      data,
      mimetype,
      name,
      size,
    };
  }

  return undefined;
};

export default getFileByPath;
