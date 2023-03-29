import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = (props) => {
  var [input, setInput] = useState(props.data)
  console.log("add page props " + props.data)

  const inputHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }
  const readvalues = () => {
    console.log("clicked")
    if (props.method == "post") {
      axios.post("http://localhost:3000/Books", input)
        .then(Response => {
          console.log("post data" + Response.data)
          alert("sucess")
        }).catch(err => {
          console.log(err)
        })
    } else if (props.method === "put") {
      axios.put("http://localhost:3000/Books" + input.id, input)
        .then(Response => {
          console.log("put data" + Response.data)
          alert("sucess")
          window.location.reload(false);
        }).catch(err => {
          console.log(err)
        })
    }
  }
  return (
    <div>
      <br></br>
      <br></br>
      <center>
        <h1>WELCOME TO THE BOOK STORE</h1>
        <TextField label='BOOK Name' name='name' variant='outlined'
          value={input.name} onChange={inputHandler} />
        <br></br>
        <br></br>
        <TextField label='Author' name='author' variant='outlined'
          value={input.grade} onChange={inputHandler} />
        <br></br>
        <br></br>
        <TextField label='Publishedon' name='date' variant='outlined'
          value={input.grade} onChange={inputHandler} />
          <br></br><br></br><br></br>
        <Button variant='contained' onClick={readvalues}
          color='success'>SUBMIT</Button>
      </center>
      <br></br>

    </div>
  )
}

export default Add
