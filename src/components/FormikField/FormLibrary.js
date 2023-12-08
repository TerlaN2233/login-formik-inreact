// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import styleFormik from './FormikLibrary.module.css'
function validate(values) {
    const errors = {};
    if (!values.username?.trim()) {
        errors.username = 'Ad boş qala bilməz';
    }

    if (!values.email?.trim()) {
        errors.email = 'eMail boş qala bilməz';
    }
    if (!values.password?.trim()) {
        errors.password = 'Password boş qala bilməz';
    }
    return errors
}
export default function FormLibrary() {
    const [valueInput, setValueInput] = useState('')
    const inpRef = useRef();
    const onSubmit = (values) => {
        alert(`yours userName: ${values.username} - yours email: ${values.email} - yours Password: ${values.password}`)
    }
    return (
        <>
        <h1 className={styleFormik.fomrikText}>Login through formik</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: ''
                }}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ errors }) => (
                    <Form className={styleFormik.baseFormik}>
                        <div className={styleFormik.ddb}>
                            <div className='mt-1' >
                                <label className={`${styleFormik.labelFormik} me-3`}>Username: </label>
                                <Field
                                    name="username"
                                    className={errors.username ? styleFormik.formikInpActive : styleFormik.formikInp}
                                />
                                <div className={`${styleFormik.msg} `}>
                                    <p> <ErrorMessage name='username'></ErrorMessage></p>
                                </div>
                            </div>
                            <div className='mt-1'>
                                <label className={`${styleFormik.labelFormik} me-3 `}>Email: </label>
                                <Field
                                    name="email"
                                    className={errors.email ? styleFormik.formikInpActive : styleFormik.formikInp}
                                />
                                <div className={`${styleFormik.msg} `}>
                                    <p><ErrorMessage name='email'></ErrorMessage></p>
                                </div>
                            </div>
                            <div className='mt-1'>
                                <label className={`${styleFormik.labelFormik} me-3`}>Password: </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className={errors.password ? styleFormik.formikInpActive : styleFormik.formikInp}
                                />
                                <div className={`${styleFormik.msg} `}>
                                    <p><ErrorMessage name='password'></ErrorMessage></p>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary mt-2 ms-5 w-50'>Submit</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
