import image1 from './Images/signup.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="container">
            <div className="login-page">
                <div className="image-holder">
                    <h2>Start your journey with us!</h2>
                    <img src={image1} alt="image1"/>
                </div>
                <div className="login-content">
                    <form action="" className="login">
                        <h2>Login Page</h2>
                        <Link to ="/" class="link">Dont have an account? Sign-up now!</Link>
                        <div><input type= "text" placeholder="Email*" required/></div>
                        <div><input type= "text" placeholder="Password*" required/></div>
                        <div class ="submit-button"><button>Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;