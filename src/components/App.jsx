import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './../App.css'
import './../index.css'
import React from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
}

export default App
