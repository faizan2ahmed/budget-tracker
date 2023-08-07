import image1 from './Images/signup.png';
import { Link } from "react-router-dom";


const SignUp = () => {
    return ( 
        <div className="container">
            <div className="sign-up-page">
                <div className="image-holder">
                    <h2>Start your journey with us!</h2>
                    <img src={image1} alt="image1"/>
                </div>
                <div className="sign-up-content">
                    <form action="" className="sign-up">
                    <h2>Sign-up Page</h2>
                    <Link to ="/Login" class="link">Already have an account? Login now!</Link>
                    <div><input type= "text" placeholder="First Name*" required/></div>
                    <div><input type= "text" placeholder="Last Name*" required/></div>
                    <div><input type= "text" placeholder="Email*" required/></div>
                    <div><input type= "text" placeholder="Password*" required/></div>
                    <div><input type= "text" placeholder="Confirm Password*" required/></div>
                    <div><input type= "text" placeholder="Budget Limit*" required/></div>
                    <div class ="submit-button"><button>Submit</button></div>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;