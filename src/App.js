import React from "react";
import { MyNavBar } from "./components/MyNavBar";
import { menuForGuest } from "./data/DifferentMenus";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/HomePage'
import {About} from './pages/AboutPage'
import {Cocktails} from './pages/CocktailsPage'
import { Footer } from "./components/Footer";
import { CocktailDetails } from "./pages/CocktailDetails";
function App() {


  return (
    <>
      <MyNavBar menu={menuForGuest} />

      <Routes>
      <Route path="*" element={<h1>ERROR 404</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:name" element={<CocktailDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Footer/>
    </>



  );
}

export default App;
