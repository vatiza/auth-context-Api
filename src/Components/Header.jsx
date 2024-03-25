
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl text-white  ">Context API</button>
            <div className='navbar-end'>
                <Link className="btn btn-ghost text-xl text-white" to='/'>Home</Link>
                <Link className="btn btn-ghost text-xl text-white" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl text-white" to='/register'>Registration</Link>
            </div>
        </div>
    )
};

export default Header; 