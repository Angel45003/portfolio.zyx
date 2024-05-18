import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="w-[100%] mx-auto text-center mt-[30px] mb-[90px]">
        <h1 className="text-5xl font-semibold p-[6px]">
          ¿Listo para contratarme?
        </h1>
        <div>
          <MagicButton Icons={FaTelegramPlane} Title="Contactame Acá" />
        </div>
      </div>
    </>
  );
}

export default Contact;
