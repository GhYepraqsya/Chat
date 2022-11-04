import React, { useState } from 'react';
import axios from 'axios'
import {
    RsgisterBody,
    RsgisterButton,
    RsgisterForm,
    RsgisterInput,
    RsgisterTitle
} from './style'

export default function SignUp() {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const handelChange = (e, key) => {
        setUserData({
            ...userData,
            [key]: e.target.value,
        })
    }

    const hendelClick = () => {
        const { firstname, lastname, email, password } = userData;

        if (!firstname && !lastname && !email && !password) {
            return
        }
        axios({
            method: "post",
            url: "http://localhost:5000/register",
            data: userData,
        })
    }

    return (
        <>
            <RsgisterBody>
                <RsgisterTitle>Sign Up</RsgisterTitle>
                <RsgisterForm>
                    <RsgisterInput type='text' placeholder='Firstname' value={userData.firstname} onChange={(e) => handelChange(e, 'firstname')} />
                    <RsgisterInput type='text' placeholder='Lastname' value={userData.lastname} onChange={(e) => handelChange(e, 'lastname')} />
                    <RsgisterInput type='email' placeholder='Email' value={userData.email} onChange={(e) => handelChange(e, 'email')} />
                    <RsgisterInput type='password' placeholder='Password' value={userData.password} onChange={(e) => handelChange(e, 'password')} />
                    <RsgisterButton type='button' onClick={hendelClick}>Sign Up</RsgisterButton>
                </RsgisterForm>
            </RsgisterBody>
        </>
    )
}
