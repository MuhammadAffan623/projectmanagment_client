import React from 'react'
import { Button } from 'antd';
import { Card } from 'antd';
import MarkCompleted from "./MarkCompleted"
import UpdateModal from "./UpdateModal"
import ArchieveModal from "./ArchieveModal"
import UpdateForm from './UpdateForm';
const { Meta } = Card;

const CardUi = ({data}) => {

  const imgUrl = "http://localhost:5000/" + data.imagePath
  const projTitle = "Project Title : " + data.projectName
  console.log(data.techStack)
  return (
    
    <Card
      bordered
      title= {projTitle} 
    hoverable
      style={{
        width: 300,
        margin: 10
      }}
    cover={<img alt="example" src={imgUrl} />}
  >
      <Meta title="Project Description:" description={data.description} />
      <Meta title="Start Date:"  description={data.startDate} />
      
      <div style={{marginLeft:"4%"}} >
      <Meta title="tech Stack"/>
      {data.techStack.map(data => 
        (<div style={{margin:"4px"}}>
          <Button style={{backgroundColor:"yellow",display:"flex"}}>
        {data}
      </Button>
        </div>)
      )}
</div>
<a href={data.githubLink}  >Github Link</a> <br/>
      <a href={data.liveUrl} >Live url</a> <br /> 
      <UpdateModal data={data} />  
      <ArchieveModal projectid={data._id} />
      <MarkCompleted projectid={data._id}/>
      </Card>
  )
}

export default CardUi

 