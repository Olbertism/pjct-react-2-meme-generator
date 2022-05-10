import { useEffect, useState } from 'react';
import './App.css';
import InputControls from './InputControls';
import PreviewArea from './PreviewArea';

export default function App() {
  const [imgAddress, setImgAddress] = useState('https://place-hold.it/300x300');
  const [requestData, setRequestData] = useState('');

  useEffect(() => {
    if (requestData !== '') {
      setImgAddress(requestData);
      console.log(imgAddress);
    }
  }, [requestData, imgAddress]);

  console.log('RequestData in Parent: ', requestData);
  console.log('LAtest img address: ', imgAddress);

  return (
    <main>
      <h1>Meme Generator</h1>
      <InputControls passRequestData={setRequestData} />
      <PreviewArea imgAddress={imgAddress} />
    </main>
  );
}
