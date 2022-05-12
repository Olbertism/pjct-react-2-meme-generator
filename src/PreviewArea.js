export default function PreviewArea(props) {
  console.log('Props with address in Preview Component: ', props);

  /*  function simulateClick(anchorTag) {
    anchorTag.click();
  } */

  return (
    <>
      <h2>Your meme</h2>

      <a href={props.imgAddress}>
        <img
          src={props.imgAddress}
          alt="a dank meme"
          data-test-id="meme-image"
          width="400"
        />
        Download
      </a>

      {/* <button
        onClick={() => {
          document.getElementById('DL').simulateClick();
        }}
      >
        <a id="DL" href={props.imgAddress} download="test">
          Download 2
        </a>
      </button> */}
    </>
  );
}
