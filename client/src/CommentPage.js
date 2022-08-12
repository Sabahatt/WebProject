import Comment from "./Comment";

function CommentPage(props) {

  const commentId = props.match.params.id;

  return (
    <div className="py-4 px-6 bg-reddit_light">
      <div className="bg-reddit_light-brighter p-3 rounded-md">
        <Comment id={commentId} />
      </div>
    </div>
  );
}
export default CommentPage;