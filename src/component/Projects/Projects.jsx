import React from "react";
import * as projectsStyle from "./projects.module.css";
//Context
import { useData } from "../../context/DataContext";
//Div
import DivProjects from "./DivProjects";

function Projects() {
  const { Data } = useData();
  return (
    <div className={projectsStyle.children}>
      <div className={projectsStyle.container}>
        {Data.map((item) =>
          item.title ? <DivProjects key={item.id} item={item} /> : null
        )}
      </div>
    </div>
  );
}

export default Projects;
