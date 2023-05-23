import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams} from 'react-router';
import axios from 'axios';

function AddUser() {
  const [data,setdata] =useState({
    name:"",
    age:null,
    roll:""
  });
  const navigate=useNavigate();
  const {id} =useParams();

  useEffect(()=>{
    getuser(id)
  },[id]);
  const getuser=(id)=>{
    if(id){
      axios.get(`http://localhost:4000/user/${id}`).then(res=>{
        console.log(res.data);
        setdata(res.data);
        }).catch(err=>{
          console.log(err);
        })
    }
  }

  const handleChange=(e)=>{

    setdata({...data,[e.target.name]:e.target.value});
  }

  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000/user/${id}`,data).then(res=>{
      toast.success(res.data);
      setTimeout(() => {
        navigate('/')
      }, 1000);
      }).catch(err=>{
        console.log(err);
      })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(data.name&&data.age&&data.roll){
      axios.post("http://localhost:4000/user",data).then(res=>{
        if(res.status===200)
        toast.success(res.data);
        navigate('/')
        if(res.status===400)
        {
          alert(res.data);
          alert("status 400")
          toast.error(res.data)
        }
      }).catch(err=>{
        console.log(err);
      })
    }
    else{
      toast.error("Please enter details");
    } 
  }
  return (
    <div  style={{width:"min-content",height:"auto",textAlign:"center",backgroundColor:"pink",marginTop:"200px",marginLeft:"400px"}} >
        <form onSubmit={id ? handleUpdate:handleSubmit} style={{border:"3px solid blue" ,display:"grid"}}>
          <input type='text' name='name' placeholder='name' value={data.name} onChange={handleChange} style={{margin:"10px",fontSize:"20px"}}/>
          <input type='number' name='age' placeholder='age' value={data.age} onChange={handleChange} style={{margin:"10px",fontSize:"20px"}}/>
          <input type='text' name='roll' placeholder='roll' value={data.roll} onChange={handleChange} style={{margin:"10px",fontSize:"20px"}}/>
          <input type='submit' value={id ? "updata" : "add"}style={{margin:"10px",fontSize:"20px"}}/>
        </form>
    </div>
  )
}

export default AddUser
