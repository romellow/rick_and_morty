import React from "react";
import "./styles.css";
import CharList from "./CharList";
import Header from "./Header";
import About from "./About";
import Main from "./Main";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/characters" element={<CharList/>}/>
        </Routes>
      </Router>
    </div>
  );
}
