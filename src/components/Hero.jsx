import { FaTelegram } from "react-icons/fa";
import React from "react";
import MagicButton from "./ui/MagicButton";

function Hero() {
  return (
    <>
      <div class="relative w-full h-[300px] bg-transparent">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
        <div className="max-w-[100%] mx-auto text-center pt-[60px] bg-gradient-to-b from-transparent to-[#060726] -z-10 h-[100%]">
          <div className="absolute top-0 left-0 -z-10 w-[1600px]">
            <img src="/src/assets/bg.png" />
          </div>
          <div>
            <p className="text-white/55 text-xs font-semibold">
              Programador de Front-End
            </p>
          </div>
          <h1 className="md:text-5xl text-3xl font-bold">
            Creo Ideas en <span className="text-purple-200">Proyectos.</span>
          </h1>
          <div>
            <p className="text-xs p-[6px]">
              ¡Hola!, mí nombre es Angel Nieto, o tambien soy conocido como
              Nieto.
            </p>
          </div>
          <div>
            <MagicButton Title="Mis Experiencias" Icons={FaTelegram} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
