export default function CreateAccount(props){
    return(
        <form className='account-form'>
            <h1>Create your account</h1>
            <div>
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
            </div>
            <input type='email' placeholder='Your email address'/>
            <p>You will need to confirm this email belongs to you.</p>
            <div>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm password'/>
            </div>
            <p>Passwords must be at least 8 characters long and have a mix of letters and either numbers or symbols</p>
            <div>
                <input type='checkbox'/>
                <p>Show password</p>
            </div>
            <input type='submit' placeholder='Submit'/>
        </form>
    )
}