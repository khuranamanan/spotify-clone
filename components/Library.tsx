"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

export default function Library() {
  function onCLick() {
    //TODO: Handle Add Music Modal
  }

  return (
    <div className="flex flex-col">
      <div className="text-neutral-400 flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} />
          <p className="font-medium text-base">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onCLick}
          className="cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-2">List of Songs</div>
    </div>
  );
}
