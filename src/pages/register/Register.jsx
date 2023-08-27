// import { useState } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const [error, setError]=useState('');
  const {createUser}=useContext(AuthContext);
  // const [email,setEmail]=useState('');
    const handleRegister=event=>{

        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,password,confirm);
         
        setError('');
        if(password !==confirm){
          setError("Your Password Didn't match")
          return
        }
        else if(password.length<6){
          setError("Your password length should more than 6 characters")
          return
        }
        // else if(!password.match([A-Z])){
        //   setError("Password should contail at least 1 uppercase")
        //   return
        // }
        createUser(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
        })
        .catch(error=>{
          console.log(error);
          setError(error.message);
        })
      }
    
    return (
        <div className="hero min-h-screen bg-base-50 ">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
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
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="re-type password" name="confirm" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary bg-indigo-300 text-gray-600" type="submit" value="Register" />
              </div>
              <p>{error}</p>
              </form>
              <small>Already have an account? <Link className="text-indigo-900" to='/login'>Login</Link> </small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;