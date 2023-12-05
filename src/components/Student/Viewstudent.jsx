import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';




const Viewstudent = () => {
  var [selected, setSelected] = useState()
  var [update, setUpdate] = useState(false)
  var [student, setstudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3010/view")
      .then(Response => {
        console.log(Response.data)
        setstudents(Response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const updatevalues = (value) => {
    console.log("updated", value)
    setSelected(value)
    setUpdate(true)
  }


  var result =
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Admission No</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Course</TableCell>
            <TableCell>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row, index) => {

            console.log(row[index])

            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.admissionno}
                </TableCell>
                <TableCell >{row.Name}</TableCell>
                <TableCell >{row.age}</TableCell>
                <TableCell >{row.course}</TableCell>
                <TableCell ><EditIcon onClick={() => updatevalues(row)} /></TableCell>


              </TableRow>

            )
          })}
        </TableBody>
      </Table>
    </TableContainer>


  if (update)
    result = <Studentedit data={selected} method='put' />
  return (result)
}

export default Viewstudent
