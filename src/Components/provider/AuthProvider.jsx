import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase_config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'rifat' }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;