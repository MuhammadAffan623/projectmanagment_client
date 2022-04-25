import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NormalLoginForm = () => {
  const navigate = useNavigate()
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);
   await axios.post("http://localhost:5000/", {
      email: values.email,
      password: values.password
    }).then((res) => {
      console.log("success", res)
      if (res.status == 200) {
        localStorage.setItem('user',JSON.stringify(res.data.user))
        navigate("/addProject")
      }
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div style={{margin:"10%"}}>
      <h2>Login</h2>
   
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
   

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
          <span> </span>
        Or <a onClick={()=>navigate("/signup")}> register now!</a>
      </Form.Item>
      </Form>
      </div>
  );
};

export default () => <NormalLoginForm />;