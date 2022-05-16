import Search from "./components/Search";
import React from "react"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pages from "./pages/Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
