export default function PreviewArea(props) {
  console.log('Props with address in Preview Component: ', props);
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
    </>
  );
}
