import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { useNavigate} from "react-router-dom"

const Home = () => {

  const [sort, setSort] = useState('sorting')
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [value, setValue] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:5050/books")
    setData(
      res.data.filter((item) => item._id.toLowerCase().includes(value.toLowerCase()))
    )
  }

  const deletData = async (id) => {
    await axios.delete(`http://localhost:5050/books/${id}`)
    await getData()
  }

  useEffect(() => {
    getData()
  }, [value])




  const handleSort = ()=>{
    let sortData = []

    sortData = [...data].sort((a,b)=>{
      setSort('sorting')
      return(a.price - b.price)
    })

    setData(sortData)
  }

  

  // const handleSort = async () => {

  //   let sortData = []

  //   sortData = [...data].sort((a, b) => {
  //     setSort('sorting')
  //     return (a.price - b.price)
  //   })

  //   setData(sortData)

  // }

  
  return (
    <div className='home-container'>
      <div className='home-parent'>
        <div className='parent-parent'>
          <div className='history'>
            <h1>The History of Phipino</h1>
            <button>Browse Store</button>
          </div>
        </div>

      </div>
      <div className='books-cart'>
        <div className='best'>
          <h2>Best Selling Books Ever</h2>
        </div>
        <button onClick={handleSort}>sort</button>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <div className='cart-best'>

          {
            data.map((d) => (
              <div className='cart' key={d._id} onClick={()=> navigate(`id/${d._id}`)}>
                <img src={d.img} alt="" />
                <h1>{d.name}</h1>
                <span>{d.author}</span>
                <p>{d.price}</p>
                <button onClick={() => deletData(d._id)}>delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
