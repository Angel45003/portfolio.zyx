import React from "react";

function CardProjects({ Image, Title, Description, HrefLink, isReact }) {
  if (isReact == "true") {
    return (
      <>
        <a id="ani-hover" target="_blank" href={HrefLink} className="w-[400px]">
          <div className="w-full bg-neutral-950/55 transition-all duration-150 cursor-pointer hover:shadow-md gap-6">
            <div className="bg-gradient-to-l from-indigo-500 to-purple-300 m-[20px] rounded-lg">
              <img
                className="p-[6px] w-[400px] mx-auto rotate-2 -z-10 rounded-lg"
                src={Image}
                alt={Title}
              />
            </div>
            <div className="p-[6px]">
              <h1 className="text-3xl font-semibold">{Title}</h1>
              <div>
                <p className="p-[6px] opacity-50">{Description}</p>
                <div className="*:m-[6px] *:bg-zinc-900/55 *:p-[3px] rounded-full">
                  <span className="text-blue-600">Reactjs</span>
                  <span className="text-blue-300">TailwindCSS</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  } else {
    return (
      <>
        <a href={HrefLink} target="_blank" className="w-[400px]" id="ani-hover">
          <div className="w-full bg-neutral-950/55 transition-all duration-150 cursor-pointer hover:shadow-md gap-6">
            <div className="bg-gradient-to-l from-indigo-500 to-purple-300 m-[20px] rounded-lg">
              <img
                className="p-[6px] w-[400px] mx-auto rotate-2 -z-10 rounded-lg"
                src={Image}
                alt={Title}
              />
            </div>
            <div className="p-[6px]">
              <h1 className="text-3xl font-semibold">{Title}</h1>
              <div>
                <p className="p-[6px] opacity-50">{Description}</p>
                <div className="*:m-[6px] *:bg-zinc-900/55 *:p-[3px] rounded-full">
                  <span className="text-orange-600">Vitejs</span>
                  <span className="text-blue-300">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  }
}

export default CardProjects;
