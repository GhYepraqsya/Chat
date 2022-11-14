import styled from 'styled-components';
import { Input, Select, Button, DatePicker } from 'antd';

export const RsgisterBody = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const RsgisterForm = styled.form`
    width: 600px;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const RsgisterTitle = styled.h1`
    color: #3f51b5;
    font-size: 50px;
`;

export const RsgisterInput = styled(Input)`
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

export const RsgisterDatePicker = styled(DatePicker)`
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

export const RsgisterInputPassword = styled(Input.Password)`
    width: 500px;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3f51b5a1;
    margin-top: 10px;
    font-size: 15px;
    outline: none;

    &:focus{
        outline: none !important;
        border-color: #1d32a7 !important;
        box-shadow: none !important;
        border-right-width:0 !important;
    } 

    &:hover{
        border-color: #1d32a7 !important;
    }
   }
`;

export const RsgisterInputSelect = styled(Select)`
    width: 500px !important;
    height: 40px;
    border: none;
    border-bottom: 1px solid #3f51b5a1;
    margin-top: 10px;
    font-size: 15px;
    outline: none;

    &:hover{
        border-color: #1d32a7 !important;
        transition: .2s;
    }
    
    .ant-select-selection-search{
        width: 100% !important;
    }

    .ant-select-selector{
        border: none !important;
        outline: none !important;
        border-color: none !important;
        box-shadow: none !important;
    }
 }
`;

export const RsgisterButton = styled(Button)`
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
