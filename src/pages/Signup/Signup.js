import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,TeamOutlined,IdcardOutlined  } from '@ant-design/icons';
import "../login/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NormalLoginForm = () => {
    const navigate = useNavigate();
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);
   await axios.post("http://localhost:5000/register", {
      email: values.email,
       password: values.password,
       firstName: values.firstName,
       lastName: values.lastName,
      confirmPassword: values.confirmPassword
    }).then((res) => {
      console.log("success", res)
      navigate("/")
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div style={{margin:"10%"}}>
      <h2>Register  </h2>
   
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
          >
        <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your firstName!',
          },
        ]}
      >
        <Input prefix={<TeamOutlined  className="site-form-item-icon" />} placeholder="Enter firstName" />
        </Form.Item>
              
        <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastName!',
          },
        ]}
      >
        <Input prefix={<IdcardOutlined className="site-form-item-icon" />} placeholder="Enter lastName" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please input your confirmPassword!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="confirmPassword"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          register now
          </Button>
          <span> </span>
        Or <a onClick={()=>navigate("/")}> login!</a>
      </Form.Item>
      </Form>
      </div>
  );
};

export default () => <NormalLoginForm />;