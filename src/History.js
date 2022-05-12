import { useEffect, useState } from 'react';

export default function History(props) {
  console.log('Props in History Component: ', props);

  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('USE EFFECT FOR STORAGE SETTER FIRES!');
    const newItems = JSON.parse(localStorage.getItem('items'));
    if (newItems) {
      setItems(newItems);
    }
  }, []);

  console.log('items in history is now: ', items);

  function clearStorage() {
    localStorage.clear();
    setItems([]);
  }

  console.log('parsed storage: ', JSON.parse(localStorage.getItem('items')));
  console.log('unparsed: ', localStorage.getItem('items'));
  console.log('stringified: ', JSON.stringify(localStorage.getItem('items')));

  let parsedStorage = JSON.parse(localStorage.getItem('items'));
  if (!parsedStorage) {
    parsedStorage = [];
  }

  return (
    <>
      <h2>HISTORY</h2>
      {/* <ul>{items.map((item) => {return <li key={item}>{item}</li>})}</ul> */}
      <div id="IAMHERE">
        {parsedStorage.map((item) => {
          return (
            <div key={item}>
              <ul>
                {item.map((stuff) => {
                  return <li key={stuff}>{stuff}</li>;
                })}
              </ul>
            </div>
          );
        })}

        {/* {test.map((item) => {
            return <li key={item}>{item}</li>
          })} */}
      </div>

      <button
        onClick={() => {
          clearStorage();
        }}
      >
        Clear
      </button>
    </>
  );
}
