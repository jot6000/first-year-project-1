import {useState} from 'react'
import accounts from './TestData.json'
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    let navigate = useNavigate()

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const emailChanged = (event) =>{
        setemail(event.target.value)
    }

    const passwordChanged = (event) =>{
        setpassword(event.target.value)
    }

    const submit = () =>{
        if(accounts.find(account=>account.email === email && account.password === password)){
            navigate("/homepage")
        }
        else{
            alert("Details invalid")
        }
    }

    return(
        <form onSubmit={submit}>
            <header>Login</header>
            <div>
                <input
                    type='email'
                    onChange={(event)=>emailChanged(event)}
                    value={email}
                    placeholder='Email'
                />
                <input 
                    type="text" 
                    onChange={(event)=>passwordChanged(event)} 
                    value={password} 
                    placeholder="Password"
                />
                <div>
                    <input/>
                    <div>Show password</div>
                </div>
            </div>
            <input type='submit'/>
            <p>Not got an account <a>Click Here</a> to create one</p>
        </form>
    )
}