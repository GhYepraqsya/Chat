import React, { useReducer } from 'react'
import { Checkbox, Form, Button, Input, } from 'antd';
import { SignInBody, SignInButton, SignInForm, SignInInput, SignInInputPassword } from './style'
import * as actions from '../../redux/action'
import { connect } from 'react-redux';

const SignIn = ({
  signIn,
}) => {
  const [user, setUser] = useReducer((state, action) => ({
    ...state,
    ...action
  }), {})

  const handelChange = (e, key) => {
    setUser({ [key]: e.target.value })
  }
  const handelClick = () => {
    signIn(user)
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <SignInBody>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
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
            <SignInInput placeholder='E-mail' value={user.email || ""} onChange={(e) => handelChange(e, 'email')} />

          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <SignInInputPassword placeholder='Password' value={user.password || ""} onChange={(e) => handelChange(e, 'password')} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handelClick}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </SignInBody>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => dispatch(actions.signIn(data)),
})

export default connect(null, mapDispatchToProps)(SignIn)
