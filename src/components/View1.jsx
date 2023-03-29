import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View1 = () => {
  var [update, setUpdate] = useState(false)
  var [students, setstudents] = useState([])
  var [selected, setSelected] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/Books")
      .then(Response => {
        setstudents(students = Response.data)
        console.log(Response)
        axios.delete("http://localhost:3000/Books")
      })
  }, [])
  const updatevalue = (value) => {
    setSelected(value);
    setUpdate(true);
  }
  const deleteValue = (id) => {
    console.log("delete clicked")
    axios.delete("http://localhost:3000/Books/" + id)
      .then(Response => {
        alert("Suiiiiiiiiiiiiiii");
        window.location.reload(false)
      })
  }
  var finaljsx = <TableContainer>
    <br></br>
    <br></br>
    <Table>
      <TableHead>

        <TableRow>
          
          <TableCell>BookName</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Publishedon</TableCell>
          <TableCell>Update</TableCell>
          <TableCell>DELETE</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((value, index) => {
          return <TableRow key={index}>
            <TableCell>{value.id} </TableCell>
            <TableCell>{value.BookName} </TableCell>
            <TableCell>{value.Author} </TableCell>

            <TableCell><Button onClick={() => deleteValue(value.id)}>delete</Button></TableCell>
            <TableCell><Button onClick={() => updatevalue(value)}>UPDATE</Button></TableCell>
          </TableRow>
        })}
      </TableBody>

    </Table>
  </TableContainer>
  if (update)
    finaljsx = <Add data={selected} method="put" />

  return (
    <div>
      <br />
      <br />
      {finaljsx}
    </div>
  )
}

export default View1
