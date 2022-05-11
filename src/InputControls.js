import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function InputControls(props) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('');
  const [templateList, setTemplateList] = useState([]);

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

  const getTemplates = async function () {
    await axios
      .get(requestBaseAddress)
      .then((response) => {
        console.log('template response: ', response.data);
        const templates = [''];
        response.data.forEach((entry) => {
          templates.push(entry);
        });
        console.log('templates array: ', templates);
        setTemplateList(templates);
      })
      .catch(() => {
        return [];
      });
  };
  useEffect(() => {
    getTemplates().catch(() => {});
  }, []);

  return (
    <>
      <h2>Select your text and picture template</h2>
      <label>
        {' '}
        Top text
        <input
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        {' '}
        Bottom text
        <input
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        {' '}
        Meme template
        {/* <input
          list="memeTemplates"
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        />
        <datalist id="memeTemplates">
          {templateList.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </datalist> */}
        <select
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        >
          {templateList.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
      <button
        data-test-id="generate-meme"
        onClick={() => {
          handleGeneration();
        }}
      >
        Generate
      </button>
    </>
  );
}
