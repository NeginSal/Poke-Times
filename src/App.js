import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/> }></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="/posts/:id" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;