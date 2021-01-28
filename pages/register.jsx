import React,{useState, useContext} from 'react';
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authContext from "../context/authContext";

function Register() {

    const AuthContext = useContext(authContext)
    const { registrarUsuario, loading } = AuthContext

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastname: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email debe ser válido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ir vacío').min(6,'El password debe tener al menos 6 caracteres')
        }),
        onSubmit: async (values) => {
            registrarUsuario(values)
        }
    })

    return (
        <Layout>
            <ToastContainer
                position="bottom-right"
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
                <div className="contentBx">
                    <div className="formBx">
                        <h2>Register</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="inputBx">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ingrese su nombre"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.name && formik.errors.name ? (
                                        <div className="error-message">
                                            <p>{formik.errors.name}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="inputBx">
                                <label htmlFor="lastname">Apellido</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Ingrese su lastname"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.lastname && formik.errors.lastname ? (
                                        <div className="error-message">
                                            <p>{formik.errors.lastname}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="inputBx">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ingrese su email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div className="error-message">
                                            <p>{formik.errors.email}</p>
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
                            <div className="inputBx">
                                {
                                    !loading ? <input type="submit" value="Sign up"/> : <input type="submit" value="Cargando..."/>
                                }
                            </div>
                            <div className="inputBx-register">
                                <p>Have an account?</p>
                                <Link href="/login">
                                    <a >Sign in</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="imgBx">
                    <img src="img/register-foto.jpg" alt=""/>
                </div>
            </section>
        </Layout>
    );
}

export default Register;