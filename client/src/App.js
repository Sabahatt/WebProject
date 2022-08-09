import './index.css';
import Header from './Header';
import BoardHeader from './BoardHeader';
import PostForm from './PostForm';
import AuthModel from './AuthModel';
import AuthModelContext from './AuthModelContext';
import {useState, useContext} from 'react';

import Post from './Post';

function App() {
  
  const [showAuthModel, setshowAuthModel] = useState(false);

  return (
    <AuthModelContext.Provider value={{show:showAuthModel,setShow:setshowAuthModel}}>
      <Header/>
      <AuthModel />
      <BoardHeader/>
      <PostForm />
      <Post />
    </AuthModelContext.Provider>
  );
}

export default App;
