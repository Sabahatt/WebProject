import Button from "./Button";
import Input from "./Input";
import {useState, useContext} from 'react';
import axios from 'axios'
import AuthModelContext from "./AuthModelContext";
import UserContext from "./UserContext";

import ClickOutHandler from 'react-clickout-handler';


function AuthModel() {
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //console.log(modalType.initialState)

    const modelContext = useContext(AuthModelContext);
    const user = useContext(UserContext);

    

    const visibleClass = modelContext.show ? 'block' : 'hidden';


    function login()
    {
        const data = {email, password};
        axios.post('http://localhost:4000/login', data, {withCredentials:true})
        .then(()=>{
            modelContext.setShow(false);
            user.setUser({username});
        })

    }

    function register (e) {
        e.preventDefault();
        const data = {email, username, password};
        console.log(data)
        // axios.post({url: 'http://localhost:4000/register'}, data, {config: {withCredentials:true}})
        axios.post('http://localhost:4000/register', data, {withCredentials:true})
        .then(()=> {
            user.setUser({username})
            modelContext.setShow(false);
            setEmail('');
            setUsername('');
            setPassword('');
        }
        )
    }

    return(
        <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visibleClass} style={{backgroundColor:'rgba(0,0,0,.6)'}} >
            
        <ClickOutHandler  onClickOut={()=> modelContext.setShow(false)}>

            <div className=" border border-gray-700 w-3/4 sm:w-1/2 mx-auto bg-white p-5 self-center rounded-md" >

                {modalType === 'login' && (
                    <h1 className="text-2xl mb-3" >Log In</h1>
                )}
                {modalType === 'register' && (
                    <h1 className="text-2xl mb-3" >Sign Up</h1>
                )}

                {modalType === 'register' && (
                    <Input type={"text"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full " 
                    placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
                )}
                
                <Input type={"text"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full " 
                placeholder='USERNAME' value={username} onChange={e => setUsername(e.target.value)} />
                <Input type={"password"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full "
                 placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)} />

                {modalType === 'login' && (
                    <Button className=" w-full text-white" onClick={() => login()}>
                        Log In
                    </Button>
                )}

                {modalType === 'register' && (
                    <Button className=" w-full text-white" onClick={ e => register(e) }>
                        Sign up
                    </Button>
                )}

                


                {modalType === 'login' && (
                      <div>
                        New to Reddit? <button onClick={() => setModalType('register')} >SIGN UP</button>
                      </div>
                )}
                   {modalType === 'register' && (
                      <div>
                        Already have an account? <button onClick={() => setModalType('login')} >Log In</button>
                      </div>
                )}
              
            </div>
            </ClickOutHandler>


        </div>

    );
}

export default AuthModel;