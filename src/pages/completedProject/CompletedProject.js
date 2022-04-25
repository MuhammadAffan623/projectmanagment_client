import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'antd';
import CardUi from '../../components/CardUi';

const CompletedProject = () => {
    const [project, setProj] = useState([])
    const [reversed, setReversed] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        
        axios({
            url: "http://localhost:5000/projects/completed",
            method: "GET",
            headers: {
                authorization: user.token
            }
            }).then((res) => {
                console.log(res)
                setProj(res.data)
            }).catch((err) => {
                console.log(err)
            })
    },[])
    const searchHandler = (e) => {
        axios({
            url: `http://localhost:5000/serachProject/completed/${e.target.value}`,
            method: "GET",
            headers: {
                authorization: user.token
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
      <h1 style={{padding:"15px"}} >CompletedProject   
      </h1>
      <div>
      <input onChange={searchHandler} />
          <button onClick={notreverseProject}>A-z</button>
          <button onClick={reverseProject} >Z-a</button>
      </div>
      {!user ? (<h1 style={{margin:"10%"}}>You must be logged in</h1>) : (
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
        )}
    
      </>
  )
}

export default CompletedProject