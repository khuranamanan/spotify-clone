"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

function SongItem(props: SongItemProps) {
  const imagePath = useLoadImage(props.data);

  return (
    <div
      onClick={() => {
        props.onClick(props.data.id);
      }}
      className="group relative flex flex-col items-center justify-center rounded-md space-x-4 overflow-hidden
       bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          className="object-cover"
          fill
          alt="Song Cover"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{props.data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {props.data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
}

export default SongItem;
