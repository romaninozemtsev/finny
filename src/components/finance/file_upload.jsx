import React, {useCallback} from 'react';
import Btn from './btn';
import StyledDropzone from './styled_dropzone';
import {processDropFiles, processFileContent} from './utils/process_tx_file';

export default function FileUpload({onFileUploaded}) {
  const onDrop = useCallback((acceptedFiles) => {
    processDropFiles(acceptedFiles).then(results => onFileUploaded(results))
  }, [])
  const onClick = useCallback(() => {
    const name = 'BofA_sample_february';
    fetch('/sample_data/bofa_sample_february.csv').then(response => response.text()).then(data => processFileContent(data)).then(
      fileData => ([{name, ...fileData}])
    ).then(results => onFileUploaded(results));
  });
  return <div>
    <h4>Upload file here, or try sample</h4>
    <StyledDropzone onDrop={onDrop} />
    <Btn onClick={onClick}>Try Sample</Btn>
    </div>
}