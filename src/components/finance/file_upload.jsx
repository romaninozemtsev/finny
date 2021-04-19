import React, {useCallback} from 'react';
import StyledDropzone from './styled_dropzone';
import {processDropFiles} from './utils/process_tx_file';

export default function FileUpload({onFileUploaded}) {
  const onDrop = useCallback((acceptedFiles) => {
    processDropFiles(acceptedFiles).then(results => onFileUploaded(results))
  }, [])
  return <StyledDropzone onDrop={onDrop} />
}