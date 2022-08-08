import './index.css';
import Header from './Header';
import BoardHeader from './BoardHeader';
import PostForm from './PostForm';
import AuthModel from './AuthModel';

function App() {
  return (
    <div>
      <Header/>
      <AuthModel />
      <BoardHeader/>
      <PostForm />
      
      
      <div className=' px-6' >
        <div className='border border-reddit_border-default p-2 rounded-md' >
          <h5 className='text-reddit_text-gray text-sm' >Posted by u/test123 5 hours ago</h5>
          <h2 className='text-2xl mb-3' >Flexbox.</h2>
          <div className='text-sm leading-6' >
            Heya, just started learning HTML and CSS last week. I find so much enjoyment learning already but I do have to ask if spending an entire day on learning CSS flexbox means I am not cut out for this kind of work? I dedicated 6 hours if not more and I feel as though I may forget everything tomorow. Will I struggle with JS?
          </div>
        </div>
      </div>
     


    </div>
  );
}

export default App;
