import axios from 'axios'
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react'



const Studentedit = (props) => {
    console.log(props)
    var [inputs, setInputs] = useState(props.data)



    const inputHandler = (event) => {
      const { name, value } = event.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
      console.log(inputs);
    }
    const addHandler = () => {
      console.log("clicked")
   
        if(props.method==='put')
      axios.put("http://localhost:3010/edit/" +inputs._id,inputs)
        .then(response => {
          alert("Record updated")
          window.location.reload(false);
        })
        .catch(err => console.log(err))
    }
  

    return (
      <div>
        <h1>STUDENT Edit</h1>
  
        <TextField id="outlined-basic" label="Admission no" name="admissionno" value={inputs.admissionno} onChange={inputHandler} variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="name" name="Name" value={inputs.Name} onChange={inputHandler} variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Age" name="age" value={inputs.age} onChange={inputHandler} variant="outlined" />
        <br></br>
      
        <Select
          label="Age"
          name="course" onChange={inputHandler}
          value={inputs.course}
        >
          <MenuItem value={"BCA"}>BCA</MenuItem>
          <MenuItem value={"BBA"}>BBA</MenuItem>
          <MenuItem value={"BA"}>BA </MenuItem>
  
  
        </Select>
        <br></br>
        <Button variant="contained" onClick={addHandler}>SUBMIT</Button>
      
  
  
      </div>
    )
}

export default Studentedit
