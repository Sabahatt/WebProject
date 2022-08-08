import Button from "./Button";
import Input from "./Input";
import {useState} from 'react';

function AuthModel() {
    const [modalType, setModalType] = useState({initialState : 'login'});
    const {email, setEmail} = useState({initialState: ''});
    const {username, setUsername} = useState({initialState: ''});
    const {password, setPassword} = useState({initialState: ''});
    

    return(
        <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:'rgba(0,0,0,.6)'}} >
            <div className=" border border-gray-700 w-3/4 sm:w-1/2 mx-auto bg-white p-5 self-center rounded-md" >
                {modalType === 'login' && (
                    <h1 className="text-2xl mb-3" >Log In</h1>
                )}
                    {modalType === 'register' && (
                    <h1 className="text-2xl mb-3" >Sign Up</h1>
                )}
                {modalType === 'register' && (
                    <Input type={"text"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full " placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />

                )}
                
                
                <Input type={"text"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full " placeholder='USERNAME' value={username} onChange={e => setUsername(e.target.value)} />
                <Input type={"password"} className="placeholder:text-gray-500 placeholder:text-xs placeholder:font-bold mb-2 w-full " placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)} /> 
                <Button className=" w-full text-white" >
                    {modalType === 'login' ? 'Log In' : 'Sign up' }
                </Button>
                {modalType === 'login' && (
                      <div>
                        New to Reddit? <button onClick={() => setModalType({value: 'register'})} >SIGN UP</button>
                      </div>
                )}
                   {modalType === 'register' && (
                      <div>
                        Already have an account? <button onClick={() => setModalType({value: 'login'})} >Log In</button>
                      </div>
                )}
              
            </div>

        </div>

    );
}

export default AuthModel;