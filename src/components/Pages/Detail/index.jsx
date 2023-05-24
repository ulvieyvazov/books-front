import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailBooks = ()  => {


    const params = useParams()

    const [data,setData] = useState([])

    const getData = async()=>{
        const res = await axios.get(`http://localhost:5050/books/${params.id}`)
        setData(res.data)
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            < img src={data?.img} alt="" />
            <h2>{data?.name}</h2>
            <h2>{data?.author}</h2>
            <p>{data?.price}</p>
        </div>
    )
}

export default DetailBooks
