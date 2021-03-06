import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../home.css';

import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd';





class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {



    const { getFieldDecorator } = this.props.form;
    return (


      <div className="container">

<h1 className="header">Medical Assistant</h1>


        <div className="col-12 col-sm-10 col-md-6 col-lg-4 ">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Ім'я користувача"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Пароль"
                />,
              )}

            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="" className="pass">
                Забули пароль
              </a>
            </Form.Item>
            <Form.Item>
              <div className="row">
                <div className="col-6">
                  <Button type="dashed" htmlType="submit" className="login-form-button" >
                    Уввійти
                  </Button>
                </div>
                <div className="col-6">
                  <Button type="dashed" htmlType="submit" className="register-form-button" >
                    Зареєструватися
                  </Button>
                </div>
              </div>
            </Form.Item>
          </Form>



        </div>
      </div>




    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;