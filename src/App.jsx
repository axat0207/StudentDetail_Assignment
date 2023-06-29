import React, { useState } from "react";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/Student";

const App = () => {
  // Define state variables using useState hook
  const [name, setName] = useState();
  const [num, setNum] = useState();

  // Render the components and set the state variables
  return (
    <BrowserRouter>
      <Routes>
        {/* Render the Student component and pass setName and setNum as props */}
        <Route path="/" element={<Student setName={setName} setNum={setNum} />} />
        
        {/* Render the Home component and pass name and num as props */}
        <Route path="/home" element={<Home name={name} contact={num} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
