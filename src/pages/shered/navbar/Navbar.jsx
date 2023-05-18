import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/Authprovider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/'}>Home</Link> </li>
                            <li> <Link to={'/'}>All Toys</Link> </li>
                            <li> <Link to={'/'}>Add A Toy</Link> </li>
                            <li> <Link to={'/'}>My Toys</Link> </li>
                            <li> <Link to={'/'}> Blogs</Link> </li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <div className='flex items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52zCO3VG8E5YLkejXT4o_BAFjlNsd1lK80WVURovBPOI1P8wzrAiE&s=0" className='h-10 w-10' alt="" /> 
                     <h1>Wheels And Deels</h1>
                        </div>
                      </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to={'/'}>Home</Link> </li>
                        <li> <Link to={'/'}>All Toys</Link> </li>
                        <li> <Link to={'/'}>Add A Toy</Link> </li>
                        <li> <Link to={'/'}>My Toys</Link> </li>
                        <li> <Link to={'/'}> Blogs</Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user && <Link to={'/login'}><button className='btn btn-error text-white'>login</button></Link>}
                    {user && <button onClick={handleLogout} className='btn btn-error text-white'>logut</button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;