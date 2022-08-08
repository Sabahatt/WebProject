function Button(props) {
    let classNames= "border border-sky-700 font-bold text-sm rounded-full  ";
    if (props.outline) {
        classNames += "  text-sky-700 hover:bg-sky-100 py-1 px-5";
    }
    else {
        classNames += " bg-sky-700 hover:bg-sky-600 text-white py-1 px-5";
    }
    return(
        <button {...props} className={classNames + props.className}  />
    );
}

export default Button;