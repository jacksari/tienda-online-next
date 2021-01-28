import React from 'react';

function Input({label,type,name,placeholder,formik,style}) {
    //value={formik.values.identifier}
    //onChange={formik.handleChange}
    //onBlur={formik.handleBlur}
    return (
        <div className={style.inputBx}>
            <label htmlFor="identifier">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}

            />
            {
                formik.touched.name && formik.errors.name ? (
                    <div className="error-message">
                        <p>{formik.errors.name}</p>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Input;