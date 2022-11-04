import './login.module.css'
const Login = () =>
 {
    const handleSubmit = (e) =>{
    e.preventDefault();
    }
    
    return ( 
        <div className="Login">
            <br/>
            <h2>Login</h2>     
            <form onSubmit={handleSubmit}>
            <label>Enter your username</label>
            <input type=""/>
            <label>Enter your password</label>
            <input type=""/>
            <button>Login</button>
            </form>
        </div>
     );
}
 
export default Login;