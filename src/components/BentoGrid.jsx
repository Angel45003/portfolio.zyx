import React from "react";
import CardBento from "./ui/CardBento";

function BentoGrid() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-[900px] w-[100%] mx-auto mt-[60px] text-center gap-16">
        <CardBento
          Description="Creación de Apps totalmente responsivas."
          ImageBento="/src/assets/b1.svg"
        />
        <CardBento
          Description="Manejos de Control en Proyectos (Dashboard)"
          ImageBento="/src/assets/b4.svg"
        />
        <CardBento
          Description="Optimización en Apps."
          ImageBento="/src/assets/b5.svg"
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
