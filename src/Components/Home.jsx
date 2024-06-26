import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";



const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>This is Home {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;