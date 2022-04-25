import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className='navbar' style={{ width: "100%",height:"55px", backgroundColor:"violet"}}>
      <div className='navbar-header' style={{width:"80%",marginRight:" auto",paddingLeft:"20px"}}>
        <div className='navbar-element' style={{display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"center", padding:"10px",fontSize:"20px",color:"black"}}>
          <a style={{color:"black"}} onClick={()=>navigate("/myproject")} >Current Project</a>
          <a style={{color:"black"}} onClick={()=>navigate("/archieveproject")} >Archive Project</a>
          <a style={{color:"black"}} onClick={()=>navigate("/completedproject")} >Complete Project</a>
          <a style={{ color: "black" }} onClick={() => navigate("/addProject")} >Add Project</a>
          <a style={{ color: "black" }} onClick={() => {localStorage.removeItem("user");  navigate("/") }} >logout</a>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar