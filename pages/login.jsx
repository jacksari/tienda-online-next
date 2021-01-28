import React, {useContext, useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import Link from 'next/link'
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import authContext from "../context/authContext";
import { useRouter } from 'next/router'

function Login() {
    //Context
    const AuthContext = useContext(authContext)
    const { iniciarSesion, loading,autenticado } = AuthContext

    //Router next
    const router = useRouter();
    useEffect(() => {
        if(autenticado){
            router.push('/')
        }
    }, [autenticado]);

    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string().email('El email debe ser válido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ir vacío')
        }),
        onSubmit: async (values) => {
            iniciarSesion(values)
        }
    })
    return (
        <Layout>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="login">
                <div className="imgBx">
                    <img src="img/login-foto.jpg" alt=""/>
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2>Login</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="inputBx">
                                <label htmlFor="identifier">Email</label>
                                <input
                                    type="text"
                                    id="identifier"
                                    name="identifier"
                                    placeholder="Ingrese su nombre"
                                    value={formik.values.identifier}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.identifier && formik.errors.identifier ? (
                                        <div className="error-message">
                                            <p>{formik.errors.identifier}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="inputBx">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Ingrese su password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div className="error-message">
                                            <p>{formik.errors.password}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="remember">
                                <input type="checkbox" name=""/>Remember me
                            </div>
                            <div className="inputBx">
                                {
                                    !loading ? (
                                        <input type="submit" value="Sign in"/>
                                    ) : (
                                        <input type="submit" value="Cargando..."/>
                                    )
                                }
                            </div>
                            <div className="inputBx-register">
                                <p>Don't have an account?</p>
                                <Link href="/register">
                                    <a >Sign up</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;