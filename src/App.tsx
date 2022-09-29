import React from 'react';
import Header from './Components/Header';
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import Footer from "./Components/Footer";
import MainBody from "./Components/MainBody";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="main">
          <LeftPanel/>
          <MainBody/>
          <RightPanel/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
