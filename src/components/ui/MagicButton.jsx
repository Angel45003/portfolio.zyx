import React from "react";

function MagicButton({ Title, Icons }) {
  return (
    <>
      <div className="w-[190px] mx-auto bg-gradient-to-t from-purple-200 to-purple-500 rounded-lg p-[2px] cursor-pointer">
        <div className="bg-black p-[6px] rounded-lg flex justify-around items-center">
          <Icons />
          <span>{Title}</span>
        </div>
      </div>
    </>
  );
}

export default MagicButton;
