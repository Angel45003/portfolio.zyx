import Image1 from "../assets/b1.svg";
import Image4 from "../assets/b4.svg";
import Image5 from "../assets/b5.svg";
import React from "react";
import CardBento from "./ui/CardBento";

function BentoGrid() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-[900px] w-[100%] mx-auto mt-[60px] text-center gap-16">
        <CardBento
          Description="Creación de Apps totalmente responsivas."
          ImageBento={Image1}
        />
        <CardBento
          Description="Manejos de Control en Proyectos (Dashboard)"
          ImageBento={Image4}
        />
        <CardBento
          Description="Optimización en Apps."
          ImageBento={Image5}
          IsLarge="true"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-[900px] w-[100%] mx-auto mt-[60px] text-center gap-16">
        <CardBento Description="Mis Skills" isSkills="true" />
        <CardBento
          Description="¿Estas List@ para Contactarme?"
          isContact="true"
        />
      </div>
    </>
  );
}

export default BentoGrid;
