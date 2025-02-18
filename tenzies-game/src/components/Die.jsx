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
        aria-pressed={props.die.isHeld}
        aria-label={`Die with value ${props.die.number}, ${
          props.die.isHeld ? "held" : "not held"
        }`}
      >
        {props.die.number}
      </button>
    </>
  );
}
