//React
import { useState, useEffect, useContext } from "react";
//Pages
import Main from "./component/Main/Main";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
//CSS
import * as appStyle from "./app.module.css";
//Context
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className={appStyle.container}>
        <Main />
        {/* <Navbar /> */}
        <Projects />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
