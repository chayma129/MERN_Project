
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
function Logout() {
 
   let navigate=useNavigate()
    const log=()=>{
    
    localStorage.removeItem("CC_Token")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("user")
    navigate("/");
    
    }
    return (
    <>
       <div className="container">
    <Box sx={{ marginTop : 10, marginLeft : 40 ,border:"solid red",
   width:300, padding:5}}>
           <p> you are sure to disconnect</p>

<button  type="button" onClick={()=>{log()}} class="btn btn-danger">Click here</button>
       
       </Box></div>

    </>
 );
}
export default Logout; 


