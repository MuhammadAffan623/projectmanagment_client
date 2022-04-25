import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const App = ({projectid}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate()
  const showModal = () => {
    setIsModalVisible(true);
  };

    const handleOk = () => {
        axios.put("http://localhost:5000/addToarchieve", {
            projectid
        }).then((res) => {
          console.log("success", res)
          navigate("/success")
        }).catch((err) => { 
            console.log(err)
        })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="danger" onClick={showModal}>
        add to Arhieve
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>do yo actually wanted to add this project to archieved</p>
 
      </Modal>
    </>
  );
};

export default App;