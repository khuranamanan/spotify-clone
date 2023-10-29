import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

function MediaItem({ data, onClick }: MediaItemProps) {
  const imagePath = useLoadImage(data);

  function handleClick() {
    if (onClick) {
      return onClick(data.id);
    }

    // TODO: Turn on the player
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md w-12 h-12 overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          className="object-cover"
          fill
          alt="Song Cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}

export default MediaItem;
