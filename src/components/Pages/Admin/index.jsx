import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./index.scss"
import { Button } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import AddSchema from "./../Schema/AddSchema"
import { AddBooks } from '../../../Schema/AddBooks';


const Add = () => {

  // const [state , setState] = useState({
  //   img: "",
  //   name: "",
  //   author: "",
  //   price: ""
  // })

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddBooks)
  });

  const onPost = async () => {
    const values = getValues()

    await axios.post("http://localhost:5050/books", {
      img: values.img,
      name: values.name,
      author: values.author,
      price: values.price
    })
  }
  

  

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onPost)} style={{ width: '30%', margin: '0 auto', padding: '30px 0' }}>
        <Box
          
          sx={{
            '& > :not(style)': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="img" variant="outlined" {...register('img')} />
          {errors.img?.message && <p style={{color:'red'}}>{errors.img?.message}</p>}
          <TextField id="filled-basic" label="name" variant="filled" {...register('name')} />
          {errors.name?.message && <p style={{color:'red'}}>{errors.name?.message}</p>}
          <TextField id="filled-basic" label="author" variant="filled" {...register('author')} />
          {errors.author?.message && <p style={{color:'red'}}>{errors.author?.message}</p>}
          <TextField id="standard-basic" label="price" type='number' variant="standard" {...register('price')} />
          {errors.price?.message && <p style={{color:'red'}}>{errors.price?.message}</p>}
        </Box>

          <button >Add Books</button>
      </form>
    </div>
  )
}

export default Add