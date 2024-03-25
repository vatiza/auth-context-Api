
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => [
        logOut()
            .then(() => {

            })
            .catch(error => { console.log(error.message) })
    ]
    return (

        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl text-white  ">Context API</button>
            <div className='navbar-end'>
                <Link className="btn btn-ghost text-xl text-white" to='/'>Home</Link>
                <Link className="btn btn-ghost text-xl text-white" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost text-xl text-white" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl text-white" to='/register'>Registration</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs">Signout</button>
                    </>
                        : <Link to='/login'>login</Link>
                }
            </div>
        </div>
    )
};

export default Header; 