import { Popover, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const App = ({ projectid }) => {
    const navigate = useNavigate()
    const hitApi = () => {
        axios.put("http://localhost:5000/addTocompleted", {
            projectid
        }).then((res) => {
            console.log("success", res)
            navigate("/success")
        }).catch((err) => { 
            console.log(err)
        })
    }
    const content = (
        <div>
          <p>Mark this project as completed</p>
        </div>
    );
    return(
    <Popover content={content} title="Title">
    <Button style={{backgroundColor:"green",marginTop:"7px",color:"white"}} onClick={hitApi}>Completed</Button>
        </Popover>
    )
}
export default App