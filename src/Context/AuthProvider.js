import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const Authcontext = createContext();
const AuthProvider = ({ children }) => {
    const allcontext = useFirebase();
    return (
        <Authcontext.Provider value={allcontext}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;