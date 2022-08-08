import Button from "./Button";
import Input from "./Input";

function AuthModel() {
    return(
        <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:'rgba(0,0,0,.6)'}} >
            <div className=" border border-gray-700 w-3/4 mx-auto bg-white p-5 self-center rounded-md" >
                <h1 className="text-2xl mb-3" >Log In</h1>
                
                <Input type={"text"} className=" mb-2 w-full " />
                <Input type={"password"} className="mb-2 w-full " />
                <Button className=" w-full text-white" >Log In</Button>
            </div>

        </div>

    );
}

export default AuthModel;