import { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function InputControls(props) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('');

  const requestData = [topText, bottomText, template];
  console.log(requestData);
  const requestBaseAddress = 'https://api.memegen.link/templates/';

  function createReqBody() {
    const url = requestBaseAddress + template;
    const body = { text: [topText, bottomText] };
    return [url, body];
  }

  const handleImageURL = (url) => {
    console.log('URL from input component: ', url);
    props.passRequestData(url);
  };

  const handleGeneration = () => {
    axios
      .post(createReqBody()[0], createReqBody()[1])
      .then(function (response) {
        handleImageURL(response.data.url);
      })
      .catch(() => {});
  };

  return (
    <div>
      <h2>Input Controls</h2>
      <label>
        {' '}
        Top text:
        <input
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        {' '}
        Bottom text:
        <input
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        {' '}
        Template:
        <input
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          handleGeneration();
        }}
      >
        Generate
      </button>
    </div>
  );
}
