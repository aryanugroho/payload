import React from 'react';
import { Props } from './types';
import UploadCard from '../UploadCard';

import './index.scss';

const baseClass = 'upload-gallery';

const UploadGallery: React.FC<Props> = (props) => {
  const { docs, onCardClick, collection } = props;


  if (docs && docs.length > 0) {
    return (
      <ul className={baseClass}>
        {docs.map((doc, i) => (
          <li key={i}>
            <UploadCard
              {...doc as {id: string, filesize: number, mimeType: string, filename: string}}
              {...{ collection }}
              onClick={() => onCardClick(doc)}
            />
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

export default UploadGallery;
