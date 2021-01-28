import React, {useContext, useEffect, useMemo} from 'react';
import Footer from "./Footer";
import Header from "./Header";
import authContext from "../../context/authContext";

function Layout({children}) {

    //Extrar el usuario autenticado del storage
    const AuthContext = useContext(authContext)
    const { usuarioAutenticado,usuario, token } = AuthContext
    const auth = typeof window !== 'undefined' ? localStorage.getItem('auth'): ''
    if (auth){
        if(usuario === null){
            usuarioAutenticado()
        }
    }else {

    }

    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;