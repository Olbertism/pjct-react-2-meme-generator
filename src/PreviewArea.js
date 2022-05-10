import './App.css';

export default function PreviewArea(props) {
  console.log('Props with address in Preview Component: ', props);
  return (
    <div>
      <h2>Your meme</h2>

      <img src={props.imgAddress} alt="meme" />
    </div>
  );
}
