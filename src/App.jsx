import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Header from './Components/Header';
import Foot from './Components/Foot';
import PrivateRouter from './Components/PrivateRouter';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs' element={<Blogs/>}/>
<Route element={<PrivateRouter/>}>
<Route path='/dashboard' element={<Dashboard/>}/>

  
  </Route> 
         <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Foot/>
    </BrowserRouter>
  );
};

export default App;