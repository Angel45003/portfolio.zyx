import React from "react";
import { FaMailBulk } from "react-icons/fa";

function CardBento({ Description, ImageBento, IsLarge, isSkills, isContact }) {
  if (isContact == "true") {
    return (
      <article className="bg-gradient-to-l from-purple-500 to-indigo-500 md:w-[450px] w-[400px] rounded-lg shadow-md cursor-pointer flex justify-around items-center flex-col p-[20px] mx-auto">
        <div>
          <h1 className="text-3xl font-semibold">{Description}</h1>
          <div className="p-[6px] m-[10px] bg-zinc-900 w-[200px] mx-auto rounded-lg border-[2px] border-zinc-950 font-semibold flex justify-center items-center gap-6">
            <FaMailBulk />
            <p>Copiar Mail</p>
          </div>
        </div>
      </article>
    );
  }

  if (isSkills == "true") {
    return (
      <article
        id="box"
        className="bg-[#050620] md:w-[450px] w-[400px] rounded-lg shadow-md cursor-pointer flex justify-around items-center mx-auto"
      >
        <div>
          <h1 className="text-5xl font-bold">{Description}</h1>
        </div>
        <div className="z-10 *:bg-zinc-900/55 p-[6px] grid grid-cols-2 *:m-[6px] *:rounded-lg bg-gradient-to-l from-[#030414] *:-z-10 to-transparent scale-125">
          <div>Express</div>
          <div>Node.js</div>
          <div>React.js</div>
          <div>Python</div>
        </div>
      </article>
    );
  }

  if (IsLarge == "true") {
    return (
      <>
        <article
          id="box"
          className="bg-[#050620] md:w-[900px] w-[400px] rounded-lg shadow-md cursor-pointer flex justify-around flex-col items-center mx-auto"
        >
          <img
            className="w-[400px] rounded-lg shadow-sm"
            src={ImageBento}
            alt=""
          />
          <div className="absolute w-[400px] translate-y-[80px] md:translate-x-[-120px]">
            <h1 className="text-3xl font-bold">{Description}</h1>
          </div>
        </article>
      </>
    );
  } else {
    return (
      <>
        <article
          id="box"
          className="bg-[#050620] w-[450px] rounded-lg shadow-md cursor-pointer flex justify-around flex-col items-center mx-auto"
        >
          <img
            className="w-[450px] rounded-lg shadow-sm"
            src={ImageBento}
            alt=""
          />
          <div className="absolute w-[400px] translate-y-[80px]">
            <h1 className="text-3xl font-bold">{Description}</h1>
          </div>
        </article>
      </>
    );
  }
}

export default CardBento;
