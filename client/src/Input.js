function Input(props) {
    return (
        <input {...props} className={"p-2 m-2 border border-gray-400 rounded-md block"+ props.className} />
    );
}

export default Input;