import React, { useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Student = (props) => {
  const navigate=useNavigate();
  var [inputs, setInputs] = useState({ "admissionno": '', "Name": '', "age": '', "course": 'BCA' })

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  }
  const addHandler = () => {
    console.log("clicked")
    console.log(inputs)

    axios.post("http://localhost:3010/new", inputs)
      .then(response => {
        alert("Record saved")
      })
      .catch(err => console.log(err))
  }

const viewHandler=()=>
{
  navigate('/studentview')
}
  return (
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>

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
      <Button variant="contained" onClick={viewHandler}>view</Button> 


    </div>
  )
}

export default Student
