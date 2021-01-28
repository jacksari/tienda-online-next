import authContext from "./authContext";
import React,{ useReducer, useMemo } from 'react'
import authReducer from "./authReducer";
import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LIMMPIAR_ALERTA,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    CARGANDO
} from "../types";
import tokenAuth from "../config/tokenAuth";
import clienteAxios from "../config/axios";
import {  toast } from 'react-toastify';

const AuthState = ({children}) => {
    //Definir State inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        loading: false,
    }

    //Definir el reducer
    const [state,dispatch] = useReducer(authReducer,initialState)

    //Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        dispatch({
            type: CARGANDO,
            payload: true
        })
        try{
            datos.username = `${datos.name.toLowerCase()}.${datos.lastname.toLowerCase()}.${Date.now()}`
            datos.img = `https://ui-avatars.com/api/?name=${datos.name}+${datos.lastname}`
            const respuesta = await clienteAxios.post('/auth/local/register', datos);
            console.log(respuesta)
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            })
            toast.success('🦄 Wow so easy!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }catch (e){
            console.log(e.response)
            dispatch({
                type: REGISTRO_ERROR,
                payload: e.response.data.message[0].messages[0].message
            })
            //console.log(e.response.data.msg)
        }
        dispatch({
            type: CARGANDO,
            payload: false
        })
    }
    //Autenticar usuarios
    const iniciarSesion = async datos => {
        console.log(datos)
        dispatch({
            type: CARGANDO,
            payload: true
        })
        tokenAuth()

        try{
            const resp = await clienteAxios.post('/auth/local', datos);
            console.log(resp)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: resp.data.jwt
            })
        }catch (e){
            console.log(e.response)
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response.data.msg
            })
        }
        dispatch({
            type: CARGANDO,
            payload: false
        })
    }
    //Retornar usuario autenticado en base al jwt
    const usuarioAutenticado = async () => {
        console.log('usuarioAutenticado')
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }
        try{
            const resp = await clienteAxios.get('users/me')
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: resp.data
            })
        }catch (e) {
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response.data.msg
            })
        }
    }
    //Cerrar sesión
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                loading: state.loading,
                mensaje: state.mensaje,
                iniciarSesion,
                registrarUsuario,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;
