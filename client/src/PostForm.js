import {ChevronDownIcon, FireIcon} from '@heroicons/react/outline';

function PostForm() {
    return (
        <div className='bg-reddit_light px-6 py-4' >
        <div className='border border-reddit_border-default p-2 rounded-md' >
          <button className='flex rounded-full border bg-gray-100 text-red-700 font-bold pr-5 pl-5 pb-1'>
          <FireIcon className='text-red-700 w-5 h-5 mt-2 m-1' />
          <p className='pt-1' >Hot</p>
          <ChevronDownIcon className='text-red-700 w-5 h-5 mt-2 ml-1' />
          </button>
        </div>
      </div>
    );
}

export default PostForm;