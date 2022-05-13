export default function PreviewArea(props) {
  console.log('Props with address in Preview Component: ', props);

  /*  function simulateClick(anchorTag) {
    anchorTag.click();
  } */

  // doing this just to force a download to fs from the browser feels utterly ridiculus
  function stolenDLCodeBlockFromSO() {
    fetch(props.imgAddress, {
      method: 'GET',
      headers: {
        'Content-Type': 'image/png',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `custom.img`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch(() => {});
  }

  return (
    <>
      <h2>Your meme</h2>

      <button
        onClick={() => {
          stolenDLCodeBlockFromSO();
        }}
      >
        Download
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
