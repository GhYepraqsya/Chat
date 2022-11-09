import React, { useReducer, useState } from 'react';
import axios from 'axios'
import {
  RsgisterBody,
  RsgisterButton,
  RsgisterForm,
  RsgisterInput,
  RsgisterInputPassword,
  RsgisterInputSelect,
  RsgisterTitle
} from './style'
import { useSelector } from 'react-redux';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import * as actions from '../../redux/action'
import { connect } from 'react-redux';

const SignUp = ({ signUp }) => {
  // const [userData, setUserData] = useState({
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     password: ""
  // })

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

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
          {...formItemLayout}
          // form={form}
          name="register"
          // onFinish={onFinish}
          // initialValues={{
          //   residence: ['zhejiang', 'hangzhou', 'xihu'],
          //   prefix: '86',
          // }}
          scrollToFirstError
        >
          <Form.Item
            name="firstName"
            // label="Firstname"
            // tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your firstname!', whitespace: true }]}
          >
            <RsgisterInput placeholder='Firstname' />
          </Form.Item>

          <Form.Item
            name="lastName"
            // label="Lastname"
            // tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
          >
            <RsgisterInput placeholder='Lastname' />
          </Form.Item>

          <Form.Item
            name="email"
            // label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <RsgisterInput placeholder='E-mail' />
          </Form.Item>

          <Form.Item
            name="password"
            // label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <RsgisterInputPassword placeholder='Password' />
          </Form.Item>

          <Form.Item
            name="confirm"
            // label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <RsgisterInputPassword placeholder='Confirm Password' />
          </Form.Item>

          <Form.Item
            name="gender"
            // label="Gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <RsgisterInputSelect placeholder="select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </RsgisterInputSelect>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
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