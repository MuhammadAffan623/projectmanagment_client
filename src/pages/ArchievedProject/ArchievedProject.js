import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Row, Col } from 'antd';
import CardUi from '../../components/CardUi';


const ArchievedProject = () => {
    const [project, setProj] = useState([])
    const [reversed, setReversed] = useState(false)
    useEffect(() => {
        axios({
            url: "http://localhost:5000/projects/archived",
            method: "GET",
            headers: {
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2MzE3YzM1NGE4ZjYzMzQ5Mjc5ODY0IiwiZW1haWwiOiJmYWhpbUBnbWFpbC5jb20iLCJpYXQiOjE2NTA3NDgxMjd9.LpgEE3McTpuDNMPhnLvrjN3uUFL2hk3q4E0ULpU9zw8"
            }
            }).then((res) => {
                console.log(res)
                setProj(res.data)
                // console.log(project)
            }).catch((err) => {
                console.log(err)
            })
        
    }, [])
    
    const searchHandler = (e) => {
        axios({
            url: `http://localhost:5000/serachProject/archieve/${e.target.value}`,
            method: "GET",
            headers: {
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2MzE3YzM1NGE4ZjYzMzQ5Mjc5ODY0IiwiZW1haWwiOiJmYWhpbUBnbWFpbC5jb20iLCJpYXQiOjE2NTA3NDgxMjd9.LpgEE3McTpuDNMPhnLvrjN3uUFL2hk3q4E0ULpU9zw8"
            }
            }).then((res) => {
                console.log(res)
                setProj(res.data)
                console.log("search api",project)
            }).catch((err) => {
                console.log(err)
            })
    }
    const reverseProject = () => {
        setReversed(true)
    }
    const notreverseProject = () => {
        setReversed(false)
    }
   
    return (<>
   <h1 style={{padding:"15px"}} >Archieved Project   
        </h1>
        <div>
      <input onChange={searchHandler} />
          <button onClick={notreverseProject}>A-z</button>
          <button onClick={reverseProject} >Z-a</button>
          </div>
  <Row>
  {reversed && (project.reverse().map((data, index) => (
              <Col span={6}>
              <CardUi data={data}/> 
              </Col>
        ))) }
        {!reversed && project.map((data, index) => (
              <Col span={6}>
              <CardUi data={data}/> 
              </Col>
        ))}
        </Row>
  
  </>
   
  )
}

export default ArchievedProject