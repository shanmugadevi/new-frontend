import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; 


const Add = (props) => {

const { handleSubmit} = useForm();
const onSubmit = (values) =>  {
const body = {
            title: values.title,
            description: values.description
        };
  axios.post(`http://127.0.0.1:8000/api/events/create`, body)
      .then(res => {
        console.log(res);
        console.log(res.data);
       {/*console.log(values);*/}
      })
    }
  return (
      <div>
        <h2>Todo Add</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-field">
      <label for="title">Tittle</label>
      <input type="text" id1="title" name="title"  min="100" value="" required />
    </div><br></br>
  
  <div class="form-field">
      <label for="description">Description</label>
      <input type="text" id2="description" name="description"  min="100" value="" required  />
    </div><br></br>
    
    
   <button type="button"  >
             Submit
</button>
</form>
      </div>
    )
  }


export default (Add);
