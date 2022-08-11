import './index.css';
import Header from './Header';
import BoardHeader from './BoardHeader';
import PostForm from './PostForm';
import AuthModel from './AuthModel';
import AuthModelContext from './AuthModelContext';
import UserContext from './UserContext';


import {useState, useEffect} from 'react';

import Post from './Post';
import axios from 'axios';

function App() {
  
  const [showAuthModel, setshowAuthModel] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:4000/user',{withCredentials:true})
    .then(response=>setUser(response.data));
  },[])

  function logout()
  {
    console.log("log")
    axios.post('http://localhost:4000/logout',{withCredentials:true})
    .then(()=> setUser({}));
  }

  return (
    <AuthModelContext.Provider value={{show:showAuthModel,setShow:setshowAuthModel}}>
    <UserContext.Provider value={{...user,logout,setUser}}>

      <Header/>
      <AuthModel />
      <BoardHeader/>
      <PostForm />
      <Post />

    </UserContext.Provider>
    </AuthModelContext.Provider>
  );
}

export default App;
