import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './home.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function Home() {
  const [data,setdata]=useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers=()=>{
  axios.get('http://localhost:4000/users').then(res=>{
    console.log(res.data);
    setdata(res.data);
    
  }).catch(err=>{
    console.log(err);
  })
  }

  const deleteFun=(id)=>{
    if(window.confirm("Are you sure to delete that user ?")){
      axios.delete(`http://localhost:4000/user/${id}`).then(res=>{
        toast.success(res.data);
        navigate('/')
      }).catch(err=>{
        console.log(err);
      })
    }

  }

  return (
    <div style={{marginTop:"150px" ,marginBottom:"100px"}}>
      <table className='styled-table'>

        <thead>
          <tr>
            <th style={{textAlign:"center"}}>NO</th>
            <th style={{textAlign:"center"}}>NAME</th>
            <th style={{textAlign:"center"}}>AGE</th>
            <th style={{textAlign:"center"}}>TYPE</th>
            <th style={{textAlign:"center"}}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            data&&data.map((item,index) =>{
              return(
                <tr key={index}>
                  <th scope='row'>{index+1}</th>
                  <th>{item.name}</th>
                  <th>{item.age}</th>
                  <th>{item.roll}</th>
                  <th>
                    <Link to={`/update/${item.id}`}>
                      <button className='btn btn-edit' >Edit</button>
                    </Link>               
                      <button className='btn btn-delete' onClick={()=>deleteFun(item.id)}>Delete</button>
                    <Link to={`/view/${item.id}`}>
                      <button className='btn btn-view' >View</button>
                    </Link>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Home
