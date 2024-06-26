import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";

const Login = () => {
    const { singIn } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        singIn(email, pass)
            .then(result => {
                const logginUser = result.user;
                console.log(logginUser);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col   ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to='/register'><button className="btn btn-link">New Registration</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;