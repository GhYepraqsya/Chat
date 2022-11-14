import styled from 'styled-components';
import { Checkbox, Form, Button, Input,  } from 'antd';

export const SignInBody = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const SignInForm = styled.form`
    width: 600px;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SignInTitle = styled.h1`
    color: #3f51b5;
    font-size: 50px;
`;

export const SignInInput = styled(Input)`
    width: 500px;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3f51b5a1;
    margin-top: 10px;
    font-size: 15px;

    &:focus{
        outline: none !important;
        border-color: #1d32a7 !important;
        box-shadow: none !important;
    } 

    &:hover{
        border-color: #1d32a7 !important;
    }
`;

export const SignInInputPassword = styled(Input.Password)`
    width: 500px;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3f51b5a1;
    margin-top: 10px;
    font-size: 15px;

    &:focus{
        outline: none !important;
        border-color: #1d32a7 !important;
        box-shadow: none !important;
    } 

    &:hover{
        border-color: #1d32a7 !important;
    }
`;

export const SignInButton = styled(Button)`
width: 400px;
height: 45px;
padding: 10px;
background: #3f51b5;
border: none;
margin-top: 30px;
font-size: 15px;
outline: none;
color: #ffffff;

.ant-row{
    background: #3f51b5 !important;
}
`;
