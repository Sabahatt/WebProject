import './index.css';
import Header from './Header';
import BoardHeader from './BoardHeader';
import PostForm from './PostForm';
import AuthModel from './AuthModel';
import Post from './Post';

function App() {
  return (
    <div>
      <Header/>
      {/* <AuthModel /> */}
      <BoardHeader/>
      <PostForm />
      <Post />


    </div>
  );
}

export default App;
