import React, { useReducer } from 'react';
import {
  RsgisterBody,
  RsgisterDatePicker,
  RsgisterInput,
  RsgisterInputPassword,
  RsgisterInputSelect,
  RsgisterTitle
} from './style'
import {
  Button,
  Form,
  Select,
} from 'antd';
import * as actions from '../../redux/action'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const SignUp = ({ signUp }) => {

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
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };

  const [user, setUser] = useReducer((state, action) => ({
    ...state,
    ...action
  }), {})
  const navigate = useNavigate();

  const handelChange = (e, key) => {
    if (key === "gender") {
      setUser({ [key]: e });
      return
    }

    if (key === "date") {
      setUser({ [key]: e._d });
      return
    }

    setUser({ [key]: e.target.value })
  }

  const hendelClick = () => {
    if (Object.keys(user).length < 6) {
      return
    }

    signUp(user).then((res) => {
      navigate('/sign-in')
    });
  }


  return (
    <>
      <RsgisterBody>
        <RsgisterTitle>Sign Up</RsgisterTitle>
        <Form
          {...formItemLayout}
          name="register"
          scrollToFirstError
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input your firstname!', whitespace: true }]}
          >
            <RsgisterInput placeholder='Firstname' value={user.firstname || ""} onChange={(e) => handelChange(e, 'firstname')} />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
          >
            <RsgisterInput placeholder='Lastname' value={user.lastname || ""} onChange={(e) => handelChange(e, 'lastname')} />
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <Form.Item name="date-picker"  {...config}>
              <RsgisterDatePicker placeholder='Date Picker' onChange={(e) => handelChange(e, 'date')} />
            </Form.Item>
            <RsgisterInputSelect placeholder="select your gender" value={user.gender || []} onChange={(e) => handelChange(e, 'gender')}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </RsgisterInputSelect>
          </Form.Item>
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
            <RsgisterInput placeholder='E-mail' value={user.email || ""} onChange={(e) => handelChange(e, 'email')} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <RsgisterInputPassword placeholder='Password' value={user.password || ""} onChange={(e) => handelChange(e, 'password')} />
          </Form.Item>

          <Form.Item
            name="confirm"
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
          <Form.Item {...tailFormItemLayout}>
            <div>
              <Button type="primary" htmlType='submit' onClick={hendelClick}>
                Sign Up
              </Button>
            </div>

          </Form.Item>
        </Form>
      </RsgisterBody>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(actions.signUp(data)),
})

export default connect(null, mapDispatchToProps)(SignUp)