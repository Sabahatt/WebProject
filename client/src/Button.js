function Button(props) {
  let classNames = "border border-sky-700 rounded-full px-3 text-sm font-bold ";
  if (props.outline) {
    classNames += " text-sky-700 hover:bg-sky-100 ";
  } else {
    classNames += " bg-sky-700 hover:bg-sky-600 ";
  }
  return (
    <button {...props} className={classNames + props.className} />
  );
}

export default Button;