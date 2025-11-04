import React,{useState,useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import NavBar from "./components/NavBar.jsx"

import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Profile from "./pages/Profile.jsx"
import Auth from "./pages/Auth.jsx"

export default function App() {
  let [user,setUser] = useState(null);
  useEffect(() => {
    localStorage.getItem("user") && setUser(JSON.parse(localStorage.getItem("user")));
  },[])
  return (
    <div>
      <BrowserRouter>
        <NavBar user = {user} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/auth" element={<Auth setUser = {setUser} />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
