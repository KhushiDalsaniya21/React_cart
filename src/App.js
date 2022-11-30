import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateLayout from "./app/layouts/PrivateLayout";
import HomeContainer from "./app/portal/Home";
import About from "./app/portal/Home/component/About/about";
import Contact from "./app/portal/Home/component/Contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/*" element={<h1>404 page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
