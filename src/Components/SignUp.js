import React from 'react'
import { Formik,Form } from 'formik';
import {TextField} from "./TextField";
import * as Yup from "yup";

const SignUp = () => {
const validate=Yup.object({
firstName:Yup.string()
.max(15,'Must be 15 characters or less')
.required('Required'),
lastName:Yup.string()
.max(20,'Must be 20 characters or less')
.required('Required'),
email:Yup.string()
.email('Email is Invalid')
.required('Required'),
password:Yup.string()
.min(6,'Password must be at least 6 characters')
.required('Password is Required'),
confirmPassword:Yup.string()
.oneOf([Yup.ref('password'),null], 'Password Must match')
.required('Confirmed Password Required')
    })
    return (
        <Formik
        initialValues =
        {{
firstName:'',
secondName:'',
email:'',
password:'',
confirmPassword:''
}}
validationSchema={validate}
onSubmit={
    values=>
    {
        console.log(values);
    }
}
>
            {formik =>
            (
                <div>
                 <h1 class="my-4 font-weight-bold-display-4">SignUp</h1>
                <Form>
                <TextField label ="First Name" name="firstName" type ="text" />
                <TextField label ="Last Name" name="lastName" type ="text" />
                <TextField label ="Email" name="email"  type ="email" />
                <TextField label ="Password" name="password" type ="password" />
                <TextField label ="Confirm Password" name="confirmPassword" type ="confirmPassword" />
                 <button class="btn btn-dark mt-3" type="submit">Register</button>
                 <button class="btn btn-danger mt-3 ml-3" type="submit">Reset</button>
                 </Form>
                </div>
            )  
            }
        </Formik>
    )
}


export default SignUp;
