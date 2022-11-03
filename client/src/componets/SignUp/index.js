import React from 'react'
import {
    RsgisterBody,
    RsgisterButton,
    RsgisterForm,
    RsgisterInput,
    RsgisterTitle
} from './style'

export default function SignUp() {
    return (
        <>
            <RsgisterBody>
                <RsgisterTitle>Sign Up</RsgisterTitle>
                <RsgisterForm>
                    <RsgisterInput type='text' placeholder='Firstname' />
                    <RsgisterInput type='text' placeholder='Lastname' />
                    <RsgisterInput type='email' placeholder='Email' />
                    <RsgisterInput type='password' placeholder='Password' />
                    <RsgisterButton type='button'>Sign Up</RsgisterButton>
                </RsgisterForm>
            </RsgisterBody>
        </>
    )
}
