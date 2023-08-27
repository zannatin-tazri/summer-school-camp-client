import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const {user, logOut}=useContext(AuthContext)
  console.log(user);
  const handleLogout=()=>{
    logOut()
    .then(result=>{})
    .catch(error=>console.log(error));
  }
  
    return (
        <div className="mx-8 my-4 px-10 text-indigo-950"> 
            <div className="navbar bg-indigo-300 rounded">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
        <Link to="/instructors">Instructor</Link>
          
        </li>
        <li><Link to='/classes'>Classes</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">ArtVenture Camp</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li >
        <Link to="/instructors">Instructor</Link>
      </li>
      <li><Link to='/classes'>Classes</Link></li>
      <li><a>Dashboard</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <Link to='/login' className="btn">Login</Link>
    <Link to='/register' className="btn">Register</Link>
    {user && <span>
      {user.photoURL} <button className="btn" onClick={handleLogout}>Log out</button></span>}
  </div>
</div>
            
        </div>
    );
};

export default Header;