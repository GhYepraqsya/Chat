import React from 'react'
import { SignInBody, SignInButton, SignInForm, SignInInput } from './style'

export default function SignIn() {
    return (
        <>
            <SignInBody>
                <SignInForm>
                    <SignInInput type='email' placeholder='Email' />
                    <SignInInput type='password' placeholder='Password' />
                    <SignInButton type='button' >Sign In</SignInButton>
                </SignInForm>
            </SignInBody>
        </>
    )
}
