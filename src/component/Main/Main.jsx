import React from "react";
import * as mainStyle from "./main.module.css";
//DivInfo
import DivInfo from "./DivInfo";
//Context
import { useData } from "../../context/DataContext";
function Main() {
  const { Data } = useData();
  return (
    <div className={mainStyle.children}>
      {Data.map((person) =>
        person.id == 1 ? <DivInfo person={person} /> : null
      )}
    </div>
  );
}

export default Main;
