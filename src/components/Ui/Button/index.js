import "./style.scss";

export default function Button(props) {
  const formClass = props.form === "rounded" ? "btn-rounded" : "btn-square";

  const sizeClass =
    props.size === "xl"
      ? "btn-xl"
      : props.size === "lg"
      ? "btn-lg"
      : props.size === "md"
      ? "btn-md"
      : props.size === "sm"
      ? "btn-sm"
      : props.size === "xs"
      ? "btn-xs"
      : "btn-md";

  const colorClass =
    props.color === "white"
      ? "btn-white"
      : props.color === "primary"
      ? "btn-primary"
      : props.color === "red"
      ? "btn-red"
      : props.color === "green"
      ? "btn-green"
      : props.color === "gray"
      ? "btn-gray"
      : "btn-primary";

  return (
    <button
      className={`btn ${sizeClass} ${colorClass} ${formClass} ${props.className}`}
      onClick={props.onClick}
      tabIndex="-1"
    >
      <span className="btn-text">
        {props.children}
      </span>
    </button>
  );
}
