import redditlogo from './redditlogo.png';
import {HomeIcon, SearchIcon,ChevronDownIcon} from '@heroicons/react/solid';
import {UserIcon, LoginIcon} from '@heroicons/react/outline';
import { useState, useContext } from 'react';
import ClickOutHandler from 'react-clickout-handler';
import AuthModelContext from "./AuthModelContext";
import UserContext from './UserContext';
import axios from 'axios';



import Button from './Button';

function Header() {
  
  const [dropdownVisibilityClass, setDropdownVisibilityClass] = useState({initialState: 'hidden'});

  const modelContext = useContext(AuthModelContext);
  const user = useContext(UserContext)

  function logout()
  {
    console.log("log yahi hai na")
    axios.post('http://localhost:4000/logout',{withCredentials:true})
    // .then(()=> setUser({}));
  }

  function toggleDropdown() {
    if (dropdownVisibilityClass.value === 'hidden') {
      setDropdownVisibilityClass({value: 'block'});
    }
    else {
      setDropdownVisibilityClass({value: 'hidden'});
    }
  }
    return (
        <header className='bg-reddit_light w-full p-2'>
        <div className="flex mx-4 relative">
        <img src={redditlogo} alt='' className='w-8 h-8 mr-4'/>
        <button className='rounded-md flex' >
        <HomeIcon className=' block w-8 h-8 mr-5' />
        <ChevronDownIcon className=' w-6 h-6 mt-2 ml-5' />
        </button>

        <form action="" className='bg-reddit_light-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow'>
          <SearchIcon className="text-slate-500 h-6 w-6 mt-1" />
          <input type="text" className="bg-reddit_light-brighter text-sm p-1 pl-2 pr-0 block  focus:outline-none" placeholder='Search Reddit' />
        </form>

        {/* <button onClick={()=>logout()}>logout</button> */}

      {/* {user.username && ( */}
        <div className='mx-1 hidden sm:block' >
        <Button outline className=' mx-2 ' onClick={() => modelContext.setShow(true)}>Log In</Button>
        <Button className=' ' onClick={() => modelContext.setShow(true)}>Sign Up</Button>
        </div>
      {/* )} */}
        
        
        

        <ClickOutHandler  onClickOut={()=> setDropdownVisibilityClass({value: 'hidden'})} >
          <button className=' rounded-md flex ml-4 border border-white hover:border-reddit_border-default' onClick={() => toggleDropdown()} >
            <UserIcon className='text-gray-500 w-6 h-6 m-1' />
            <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 ml-1' />
          </button>

          <div className={'absolute right-0 top-8 hover:text-white bg-white border border-reddit_border-default z-10 rounded-md overflow-hidden ' + dropdownVisibilityClass.value}>
          

          {user.username && (
          <span className='block w-50 py-2 px-2 text-sm'>
            Hello, {user.username};
          </span>
          )}

          {/* {user.username && ( */}
          <button className='flex w-40 py-2 px-3 hover:bg-sky-600  text-sm' onClick={() => modelContext.setShow(true)}>
            <LoginIcon className='w-6 h-6 mr-2 ' />
            Log In / Sign Up
          </button>
          {/* )} */}

          {/* {!user.username && ( */}
          <button className='flex w-40 py-2 px-3 hover:bg-sky-600  text-sm' onClick={()=> logout()}>
            <LoginIcon className='w-6 h-6 mr-2 ' />
            Log Out
          </button>
          {/* )} */}

        </div>
        </ClickOutHandler>

       

        </div>
      </header>
    );
}

export default Header;