import styled from 'styled-components';

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

export const RsgisterInput = styled.input`
    width: 500px;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3f51b5;
    margin-top: 30px;
    font-size: 15px;
    outline: none;
`;

export const RsgisterButton = styled.button`
    width: 400px;
    height: 45px;
    padding: 10px;
    background: #3f51b5;
    border: none;
    margin-top: 30px;
    font-size: 15px;
    outline: none;
    color: #ffffff;
`;
