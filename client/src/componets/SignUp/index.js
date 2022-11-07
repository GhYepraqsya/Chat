import React, { useReducer, useState } from 'react';
import axios from 'axios'
import {
  RsgisterBody,
  RsgisterButton,
  RsgisterForm,
  RsgisterInput,
  RsgisterTitle
} from './style'
import { useSelector } from 'react-redux';
import { Button, Input, Form } from 'antd';
import * as actions from '../../redux/action'
import { connect } from 'react-redux';

const SignUp = ({ signUp }) => {
  // const [userData, setUserData] = useState({
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     password: ""
  // })

  const [user, setUser] = useReducer((state, action) => ({
    ...state,
    ...action
  }), {})

  const handelChange = (e, key) => {
    setUser({ [key]: e.target.value })
    // setUserData({
    //     ...userData,
    //     [key]: e.target.value,
    // })
  }

  const hendelClick = () => {
    // const { firstname, lastname, email, password } = userData;

    // if (!firstname && !lastname && !email && !password) {
    //     return
    // };

    signUp(user);
  }

  return (
    <>
      <RsgisterBody>
        <RsgisterTitle>Sign Up</RsgisterTitle>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'You should type at least 8 characters' },
              { max: 16, message: 'You should type at maximum 16 characters' },
            ]
            }
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <RsgisterForm>
                    <Input type='text' placeholder='Firstname' value={user.firstname || ""} onChange={(e) => handelChange(e, 'firstname')} />
                    <Input type='text' placeholder='Lastname' value={user.lastname || ""} onChange={(e) => handelChange(e, 'lastname')} />
                    <Input type='email' placeholder='Email' value={user.email || ""} onChange={(e) => handelChange(e, 'email')} />
                    <Input type='password' placeholder='Password' value={user.password || ""} onChange={(e) => handelChange(e, 'password')} />
                    <Button type='primary' shape="round"  size="large" onClick={hendelClick}>Sign Up</Button>
                </RsgisterForm> */}
      </RsgisterBody>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(actions.signUp(data)),
})

export default connect(null, mapDispatchToProps)(SignUp)