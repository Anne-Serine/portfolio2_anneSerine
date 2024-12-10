import { Link } from "react-router-dom";

function Button({ text, icon, id, type = "primary", onClick, url, title }) {
  const style = {
    primary:
      "bg-port-yellow p-2 px-4  border-[5px] tracking-[0.5rem] ",
    secondary:
      "bg-port-yellow p-1 max-w-[10rem] w-full tracking-wider uppercase",
    tertiary:
      "flex gap-2 items-center text-sm p-2 rounded-sm",
  };

  return url ? (
    <Link to={url} className={style[type]}>
      {icon}
      {text}
    </Link>
  ) : (
    <button
      value={id}
      id={id}
      className={style[type]}
      onClick={(e) => onClick(e.target.value)}
      title={title}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
