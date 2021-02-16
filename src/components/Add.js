import React from "react";

function Add(props) {
  return (
      <div>
        <h2>Add</h2>
        
        <form >
    <div class="form-field">
      <label for="title">Tittle</label>
      <input type="text" id1="title" name="title"  min="100" value="" required />
    </div><br></br>
  
  <div class="form-field">
      <label for="description">Description</label>
      <input type="text" id2="description" name="description"  min="100" value="" required />
    </div><br></br>
    
    
   <button type="button" onclick="alert('Data submitted')">
             Submit
</button>

  
  
      
     
  </form>
      </div>
    );
  }

 
export default Add;