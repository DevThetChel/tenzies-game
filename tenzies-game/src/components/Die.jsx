import "../css/die.css";
export function Die(props) {
  return (
    <>
      <button className="die-button">{props.value}</button>
    </>
  );
}
