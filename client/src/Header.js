import redditlogo from './redditlogo.png';
import {HomeIcon, SearchIcon,ChevronDownIcon} from '@heroicons/react/solid';
import {UserIcon, LoginIcon} from '@heroicons/react/outline';
import { useState, useEffect, useRef } from 'react';

function Header() {
  
  const [dropdownVisibilityClass, setDropdownVisibilityClass] = useState({initialState: 'hidden'});
  
  function useUserDropdown(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownVisibilityClass({value: 'hidden'});
        }
      }
      document.addEventListener({type: 'mousedown'}, handleClickOutside);
      return () => {
        document.removeEventListener({type: 'mousedown'}, handleClickOutside);
      };
     
    }, {deps: [ref]}
    );
  }

  const userDropdownRef = useRef({initialValue: null});
  useUserDropdown(userDropdownRef);

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

        <button className='rounded-full border border-sky-700 text-sky-700 hover:bg-sky-100 font-bold pl-5 pr-5 mr-1 pb-1' >Log In</button>
        <button className='rounded-full border bg-sky-700 text-white hover:bg-sky-600 font-bold pl-5 pr-5 pb-1' >Sign Up</button>
        

        <button className=' rounded-md flex ml-4 border border-white hover:border-reddit_border-default' onClick={() => toggleDropdown()} ref={userDropdownRef} >
          <UserIcon className='text-gray-500 w-6 h-6 m-1' />
          <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 ml-1' />
        </button>

        <div className={'absolute right-0 top-8 hover:text-white bg-white border border-reddit_border-default z-10 rounded-md overflow-hidden ' + dropdownVisibilityClass.value}>
          <button className='flex w-40 py-2 px-3 hover:bg-sky-600  text-sm' >
            <LoginIcon className='w-6 h-6 mr-2 ' />
            Log In / Sign Up
          </button>

        </div>

        </div>
      </header>
    );
}

export default Header;