import getLikedSongs from "@/actions/getLikedSongs";
import Heaader from "@/components/Heaader";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

async function Liked() {
  const songs = await getLikedSongs();

  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Heaader>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:w-44 lg:h-44">
              <Image
                src="/images/liked.png"
                className="object-cover"
                fill
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <p className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                Liked Songs
              </p>
            </div>
          </div>
        </div>
      </Heaader>
      <LikedContent songs={songs} />
    </div>
  );
}

export default Liked;