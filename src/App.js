import React from 'react'
import './styles.css';
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"
import Login from "./components/Login.js"
import Newpage from "./components/Newpage.js"



export default function App() {
  return (
    <div>
      <Content />
      <Login />
      <Newpage />
      <Footer />
    </div>
  )
}
