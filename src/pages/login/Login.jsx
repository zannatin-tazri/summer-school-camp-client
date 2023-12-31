import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {
  const auth= getAuth();
  const provider=new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log('error',error.message);
    })
  }

  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const location = useLocation();
  console.log(location);

  const from=location.state?.from?.pathname || '/'

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
          const loggeduser=result.user;
          console.log(loggeduser);
          form.reset();
          navigate(from, {replace:true});
        })
        .catch(error=>{
          console.log(error);
        })
      }
    return (
        <div className="hero min-h-screen bg-base-50 ">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary bg-indigo-300 text-gray-600" type="submit" value="Login" />
              </div>
              </form>
              <small>New to ArtVenture Camp? <Link className="text-indigo-900" to='/register'>Register</Link> </small>

              <div>
                <button onClick={handleGoogleSignIn} className=" m-4 btn btn-primary bg-indigo-300 text-gray-600">Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;