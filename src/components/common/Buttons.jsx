import { Link } from "react-router-dom";

function Button({ text, icon, id, type = "primary", onClick, url, title }) {
  const style = {
    primary:
      "bg-port-yellow text-port-dark p-2 px-auto text-center w-full border border-port-dark flex items-center justify-center",
    githubBtn:
      "bg-port-yellow text-port-dark p-2 px-auto text-center w-full border border-port-dark rounded-bl-xl flex gap-2 items-center justify-center",
    liveBtn:
      "bg-port-yellow text-port-dark p-2 px-auto text-center w-full border border-port-dark rounded-br-xl flex gap-2 items-center justify-center",
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
