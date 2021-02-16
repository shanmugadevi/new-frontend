import React from "react";
import  { Link } from "react-router-dom";
function Home (props) {
  return(
   
   <div>     
  <h1>Welcome</h1>
            
  <Link to="/Add" >
   <button type="button">
             Add
</button>
</Link>
<Link to="/edi" >
   <button type="button">
            Edit
</button>
</Link>

</div> 
  );  
}
    
        
      
    
     
           
          
       
    
      
      

export default Home;