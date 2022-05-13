export default function PreviewArea(props) {
  console.log('Props with address in Preview Component: ', props);

  /*  function simulateClick(anchorTag) {
    anchorTag.click();
  } */

  return (
    <>
      <h2>Your meme</h2>

      <button>
        <a id="DL" href={props.imgAddress} download="test">
          Download
        </a>
      </button>

      <a href={props.imgAddress}>
        <img
          src={props.imgAddress}
          alt="a dank meme"
          data-test-id="meme-image"
          width="400"
        />
        click
      </a>
    </>
  );
}
