function Textarea (props) {
  return (
    <textarea {...props} className={"bg-reddit_light-brighter text-reddit_text p-2 border border-reddit_light-brightest rounded-md block "+props.className} />
  );
}

export default Textarea;