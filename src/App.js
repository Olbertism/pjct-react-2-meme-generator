/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { InputWrapper, PreviewWrapper } from './elements';
// import History from './History';
// import './App.css';
import InputControls from './InputControls';
import PreviewArea from './PreviewArea';

export default function App() {
  const [imgAddress, setImgAddress] = useState(
    'https://api.memegen.link/images/ams.png',
  );
  const [requestData, setRequestData] = useState('');

  const [template, setTemplate] = useState('ams');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    if (requestData !== '') {
      setImgAddress(requestData);
      console.log(imgAddress);
    }
  }, [requestData, imgAddress]);

  /*   function replaceSpecialChars(aString) {
    console.log();
  } */

  useEffect(() => {
    if (topText !== '' || bottomText !== '') {
      console.log('Top text in parent:', topText);
      setImgAddress(
        `https://api.memegen.link/images/${template}/${topText}/${bottomText}.png`,
      );
    } else if (topText.length === 0 && bottomText.length === 0) {
      setImgAddress(`https://api.memegen.link/images/${template}.png`);
    } else if (bottomText.length === 0) {
      setImgAddress(
        `https://api.memegen.link/images/${template}/${topText}.png`,
      );
      console.log('Bottom text in parent: ', bottomText);
    } else if (topText.length === 0) {
      setImgAddress(
        `https://api.memegen.link/images/${template}/${bottomText}.png`,
      );
    }
  }, [topText, bottomText, imgAddress, template]);

  console.log('RequestData in Parent: ', requestData);
  console.log('Latest img address: ', imgAddress);
  console.log('template in parent: ', template);

  return (
    <main>
      <article>
        <h1>Dank memes generator</h1>
        <InputWrapper>
          <InputControls
            passRequestData={setRequestData}
            templateChangeListener={setTemplate}
            topTextChangeListener={setTopText}
            bottomTextChangeListener={setBottomText}
          />
        </InputWrapper>
        <PreviewWrapper>
          <PreviewArea imgAddress={imgAddress} />
        </PreviewWrapper>
        {/* <History requestData={requestData} /> */}
      </article>
    </main>
  );
}
