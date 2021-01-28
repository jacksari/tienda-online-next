import React from 'react';
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Layout/Breadcrumbs";
import Input from "../components/Layout/Input";
import {useFormik} from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'

function Account() {
    const formikAccount = useFormik({
        initialValues: {
            name: '',
            lastname: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastname: Yup.string().required('El apellido es obligatorio'),
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    const formikEmail = useFormik({
        initialValues: {
            email: '',
            emailConfirm: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El nombre es obligatorio'),
            emailConfirm: Yup.string().required('El apellido es obligatorio'),
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <Layout>
            <Breadcrumbs title="Acount"/>
            <section className="container account">
                <form
                    className="account-name"
                >
                    <h2 className="line-red">Cambia tu nombre y apellidos</h2>
                    <Input
                        name="name"
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        style="account-input"
                        type="text"
                        formik={formikAccount}
                    />
                    <Input
                        name="lastname"
                        label="Apellido"
                        placeholder="Ingrese su apellido"
                        style="account-input"
                        type="text"
                        formik={formikAccount}
                    />
                    <div className="inputBx">
                        <input type="submit" value="Sign in"/>
                    </div>
                </form>
                <form
                    className="account-name"
                >
                    <h2 className="line-red">Cambia tu Email</h2>
                    <Input
                        name="email"
                        label="Email"
                        placeholder="Ingrese su email"
                        style="account-input"
                        type="text"
                        formik={formikEmail}
                    />
                    <Input
                        name="emailConfirm"
                        label="Confirme email"
                        placeholder="Confirme su email"
                        style="account-input"
                        type="text"
                        formik={formikEmail}
                    />
                </form>
            </section>
        </Layout>
    );
}

export default Account;