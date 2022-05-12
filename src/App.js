/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { InputWrapper, PreviewWrapper } from './elements';
import History from './History';
// import './App.css';
import InputControls from './InputControls';
import PreviewArea from './PreviewArea';

export default function App() {
  const [imgAddress, setImgAddress] = useState('https://place-hold.it/400x400');
  const [requestData, setRequestData] = useState('');

  useEffect(() => {
    if (requestData !== '') {
      setImgAddress(requestData);
      console.log(imgAddress);
    }
  }, [requestData, imgAddress]);

  console.log('RequestData in Parent: ', requestData);
  console.log('Latest img address: ', imgAddress);

  return (
    <main>
      <article>
        <h1>Dank memes generator</h1>
        <InputWrapper>
          <InputControls passRequestData={setRequestData} />
        </InputWrapper>
        <PreviewWrapper>
          <PreviewArea imgAddress={imgAddress} />
        </PreviewWrapper>
        <History requestData={requestData} />
      </article>
    </main>
  );
}
