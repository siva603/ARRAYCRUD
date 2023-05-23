import React from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.js';
import AddEdit from './pages/AddEdit.js';
import About from './pages/About.js'
import Home from './pages/Home.js';
import View from './pages/View.js';

function App() {
 
  return (
  <BrowserRouter>
  <div className='App'>
    <Header/>
    <ToastContainer position='top-center'/>
    <Routes>
    <Route exact path='/' Component={Home}/>
      <Route exact path='/add' Component={AddEdit}/>
      <Route exact path='/update/:id' Component={AddEdit}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/view/:id' Component={View}/>
    </Routes>
  </div>
  </BrowserRouter>
)
  }
export default App;
