import axios from 'axios'
import React,{useState,useEffect} from 'react'
import CardUi from '../../components/CardUi'
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const Currentproject = () => {
    const navigate=useNavigate()
    const [project, setProj] = useState([])
    const [reversed, setReversed] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    useEffect(() => {
        axios({
            url: "http://localhost:5000/projects/current",
            method: "GET",
            headers: {
                authorization: user.token
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
            url: `http://localhost:5000/serachProject/current/${e.target.value}`,
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
  
    return (<div style={{paddingLeft:"15px"}}>
      
      <h1 style={{padding:"15px"}} >All Project   
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
     
      </div>
  )
}

export default Currentproject