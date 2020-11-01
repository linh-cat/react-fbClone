import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./Feed/Feed";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
