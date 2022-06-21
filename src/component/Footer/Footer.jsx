import React from "react";
import * as footerStyle from "./footer.module.css";
//Context
import { useData } from "../../context/DataContext";
//DivFooter
import DivFooter from "./DivFooter";
function Footer() {
  const { Data } = useData();
  return (
    <div className={footerStyle.children}>
      {Data.map((person) =>
        person.id == 1 ? <DivFooter person={person} /> : null
      )}
    </div>
  );
}

export default Footer;
