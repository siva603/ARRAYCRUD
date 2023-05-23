import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router';
import './view.css';
import axios from 'axios';
function View() {
  const {id} =useParams();
  const [user,setUser] =useState({
    name:"",
    age:null,
    roll:""
  });
  
  useEffect(()=>{
    getUser(id)
  },[id]);
  const getUser=(userId)=>{
    axios.get(`http://localhost:4000/user/${userId}`).then(res=>{
    console.log(res.data);
    setUser(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className='view' >
      <h2>welcom  {user.name}</h2>
      <h3>ID : {user.id}</h3>
      <h3>NAME : {user.name}</h3>
      <h3>AGE :{user.age}</h3>
      <h3>TYPE :{user.roll}</h3>  
    </div>
  )
}

export default View
