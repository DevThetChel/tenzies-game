import "../css/die.css";
export function Die(props) {
  console.log(props.die.isHeld);

  return (
    <>
      <button
        onClick={() => {
          props.holdNumber(props.die.id);
        }}
        className={props.die.isHeld ? "die-button held" : "die-button"}
      >
        {props.die.number}
      </button>
    </>
  );
}
