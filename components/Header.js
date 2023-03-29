import Image from "next/image"
import { useRouter } from "next/router"
import CloseIcon from '@mui/icons-material/Close';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useRef } from "react";
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from '@heroicons/react/24/solid';
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e =>{
        e.preventDefault();
        const term = searchInputRef.current.value
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full  p-6 items-center">
            <Image 
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
            height = {50}
            width ={150} 
            alt = "yes its an google image"
            className = 'cursor-pointer'
            onClick={()=>router.push("/")}
            />
            <form className="flex flex-grow px-6 py-3 sm:mr-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref = {searchInputRef} type="text" defaultValue ={router.query.term} className="flex-grow w-full focus:outline-none"/>
                <XMarkIcon className="h-5 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={()=>(searchInputRef.current.value="")}/>
                <MicrophoneIcon   className="mr-3 h-5 pl-4 border-l-2 hidden sm:inline-flex border-gray-300 ml-4 text-blue-500 " />
                <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex  "/>
                <button hidden type="submit" onClick={search}> Search</button>
            </form>
            <Avatar className="ml-auto" url="https://lh3.googleusercontent.com/a/AGNmyxaMFmd4gbGgsnV5uGvxC0uc_wf2dmP7by2G6ibtocY=s576"/>
        </div>
        <HeaderOptions/>
        
    </header>
    
  )
}

export default Header



