import {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useHistory , useLocation} from 'react-router-dom';
import {auth} from '../firebase';
function Signup(){

    const location = useLocation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const history = useHistory();

    const handleSignup = () => {

        if(password !== confirmPassword){
            console.log('password do not match');
            return;
        }

        //const auth = getAuth();

        const signupPromise = new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) =>{
                const user = userCredential;
                resolve('SIGN UP SUCCESSFULLY' + user);
            })
            .catch((error) => {
                reject('unsuccessful '+ error.message);
            })
        });

        signupPromise
            .then((user) =>{
                console.log("going to next page");
    //            history.push('/chat');
            }).catch((err) =>{
                console.log('Sign up failed: '+err);
            });
    
        };

    const navigateToChat = ()=>{
        window.location.href = '/chat';
    }

    function userNameInputHandler(e){
        setUsername(e.target.value);
    }

    function passwordInputHandler(e){
        setPassword(e.target.value);

    }

    function confirmPasswordHandler(e){
        setConfirmPassword(e.target.value);
    }

    


    return(<form>
        <label>Username: </label><input type="text" value={username} onChange={userNameInputHandler}></input>
        <br></br>
        <label>Password: </label><input type="text" value={password} onChange={passwordInputHandler}></input>
        <br></br>
        <label>Confirm Password: </label> <input type="password" value={confirmPassword} onChange={confirmPasswordHandler}></input>
        <button type="button" onClick={handleSignup}>Signup</button>

    </form>)
}
export default Signup;


/*
Promises: 
commit to somehting, 
    ->resolved 
    ->rejected, 

    let p = new Promise((resolve, reject) =>{
        // what is the promise, 
        let a = 1 + 1;
        if (a == 2){
            resolve('success');
        }else{
            reject('failed')
        }
    })


    p.then((message) => { //message in this case is 'SUCCESS'
        console.log('This is in the then' + message);
    }).catch((message) => {
            //message in this case is 'failed'
        console.log('This is in the catch' + message);
    })

*/