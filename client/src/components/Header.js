import React ,{useEffect,useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import './header.css'

function Header() {
    const [activeTab,setActiveTab] =useState("Home");
    const location=useLocation();
    useEffect(()=>{
      if(location.pathname==='/')
    setActiveTab("Home");
    else if(location.pathname==="/add")
    setActiveTab("AddUser");
    else if(location.pathname==="/update/:id")
    setActiveTab("AddUser")
    else if(location.pathname==="/about")
    setActiveTab("About")
    },[location]);

  return (
    <div className='header'>
        <p className='logo'>User management system</p>
        <div className="header-right">
            <Link to='/'>
            <p className={`${activeTab === "Home" ? "active" : "" }`} onClick={()=>setActiveTab("Home")}> Home</p>
            </Link>
            <Link to='/add'>
            <p className={`${activeTab === "AddUser" ? "active" : "" }` } onClick={()=>setActiveTab("AddUser")}> Add</p>
            </Link>     
            <Link to='/about'>
            <p className={`${activeTab === "About" ? "active" : "" }`} onClick={()=>setActiveTab("About")}>About</p>
            </Link>
        </div>
      
    </div>
  )
}
export default Header
