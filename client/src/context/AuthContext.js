import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "611949ed736381ccc879e2be",
        username: "john",
        email: "john@gmail.com",
        profilePicture: "",
        coverPicture: "",
        isAdmin: false,
        followers: ["61194a75736381ccc879e2c0"],
        followings: [],
    },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}