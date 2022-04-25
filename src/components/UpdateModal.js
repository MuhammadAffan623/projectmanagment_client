import React, { useState } from 'react';
import { Modal} from 'antd';
import { Form, Input, Button, DatePicker,Upload } from 'antd';
import { UploadOutlined,MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "../pages/login/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const App = ({ data }) => {

    const [projectImage, setProj] = useState({})
  const navigate=useNavigate()
  console.log("project id form update form ",data)
    const user = JSON.parse(localStorage.getItem('user'))
    const onFinish = async (values) => {

        const faomdata = new FormData()
        faomdata.append("projectImage", projectImage)
        faomdata.append("projectName",values.projectName)
        faomdata.append("description",values.description)
        faomdata.append("startDate",values.startDate)
        faomdata.append("githubLink",values.githubLink)
        faomdata.append("liveUrl",values.liveUrl)
        faomdata.append("techStack",values.techStack)
        console.log(faomdata)
        await axios({
            method: 'PUT',
            url: `http://localhost:5000/updateProject/${data._id}`,
            headers: {
              authorization: user.token
          },
            data:  faomdata
          }).then((res) => {
            console.log("success", res)
            navigate("/success")
        }).catch((err) => {
          console.log(err)
        }).then((res) => {
            console.log("success",res)
          }).catch((err) => {
            console.log(err)
          })
    }
    // console.log('Received values of form: ', values);
    

  const normFile = (e) => {
    console.log('Upload event:', e);
      console.log('Upload event value:', e.target.value);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
    console.log("project id from update modal", data)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
      <span style={{ marginRight: "15px" }}>
        
      <Button type="primary" onClick={showModal} >
        Update
      </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

          <div style={{margin:"10%",padding:"25px 0px"}}>
      <h2>Update Project: </h2>
   
          <Form
              encType='multipart/form-data'
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="projectName"
        rules={[
          {
            required: true,
            message: 'Please input your projectName!',
          },
        ]}
      >
        <Input   placeholder="Project name" />
              </Form.Item>
              <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input your project description!',
          },
        ]}
      >
        <Input.TextArea placeholder="description" />
              </Form.Item>
              
              <Form.Item
        name="startDate"
        rules={[
          {
            required: true,
            message: 'Please input your project startDate!',
          },
        ]}
              >
                  <DatePicker placeholder="select startDate  " />
              </Form.Item>
              
              <Form.Item
        name="githubLink"
        rules={[
          {
            required: true,
            message: 'Please input your project githubLink!',
          },
        ]}
      >
        <Input placeholder="githubLink" />
              </Form.Item>
              <Form.Item
        name="liveUrl"
        rules={[
          {
            required: true,
            message: 'Please input your project liveUrl!',
          },
        ]}
      >
        <Input placeholder="liveUrl" />
              </Form.Item>
   
              {/*  */}
              
              <Form.List
        name="techStack"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 tech '));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item

                    label={index === 0 ? 'techs' : 'techs'}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input tech name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="tech stack name" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add techStack
              </Button>
             
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
        </Form.List>
        <label>AddProject Image</label>
                <input type="file" name="projectImage" onChange={e=>setProj(e.target.files[0])} />
                
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{marginTop:"15px"}}>
         update project  
          </Button>
          
      </Form.Item>
      </Form>
      </div>
      </Modal>
    </span>
  );
};

export default App;