import P1 from "../assets/projects/p1.png";
import P2 from "../assets/projects/p2.png";
import React from "react";
import CardProjects from "./ui/CardProjects";

function Projects() {
  return (
    <div className="w-[90%] text-center mx-auto mt-[120px]">
      <h1 className="text-4xl font-bold p-6">
        Mis <span className="text-purple-300">Recientes Proyectos</span>.
      </h1>
      <div className="grid md:grid-cols-2 gap-12 w-[60%] mx-auto">
        <CardProjects
          Image={P1}
          Title="CodePen"
          Description="Este es un Clon de Codepen, sencillo y comodo"
          isReact="false"
          HrefLink="https://github.com/Angel45003/nieto.link"
        />
        <CardProjects
          Image={P2}
          Title="Disney+"
          Description="Este es un Clon (FrontEnd) de Disney+"
          isReact="true"
          HrefLink="https://github.com/Angel45003/Disney-Clone"
        />
      </div>
    </div>
  );
}

export default Projects;
