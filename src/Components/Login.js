import { useEffect, useState } from "react";

function Login(){
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        // check if username and password exists, 

    })

    function userNameInputHandler(e){
        setUsername(e.target.value);

    }

    function passwordInputHandler(e){
        setPassword(e.target.value);
    }

    return(<form>
        <label>Username: </label><input type="text" onChange={userNameInputHandler}></input>
        <br></br>
        <label>Password: </label><input type="text" onChange={passwordInputHandler}></input>
        <br></br>
        <button >Login</button>

    </form>)
}

export default Login;
