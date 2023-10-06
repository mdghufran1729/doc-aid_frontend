import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Register from "./pages/Register";
// import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./component/Navbar";
import Prescription from "./pages/Prescription";
import Scheduling from "./pages/Scheduling";

function App() {
  return (
    <div>
    <Scheduling/>
    </div>
  //   <div>
  //       <Routes>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/about" component={About} />
  //         <Route path="/services" component={Services} />
  //         <Route path="/contact" component={Contact} />
  //       </Routes>
  //  </div>
  );
}

export default App;
