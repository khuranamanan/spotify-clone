"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadMoadal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import Button from "./Button";

interface LibraryProps {
  songs: Song[];
}

export default function Library({ songs }: LibraryProps) {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const onPlay = useOnPlay(songs);

  function onCLick() {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
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
      <div className="flex flex-col gap-y-2 mt-4 px-2">
        {songs.length === 0 ? (
          <div className="flex flex-col items-center gap-2 w-full text-center text-neutral-400 text-sm mt-4">
            {user && (
              <>
                <p>Add Songs to see it in your Library!</p>
                <Button
                  onClick={() => uploadModal.onOpen()}
                  className="w-fit py-2"
                >
                  Add Songs
                </Button>
              </>
            )}
            {!user && (
              <>
                <p>Log in to see your library!</p>
                <Button
                  onClick={() => authModal.onOpen()}
                  className="w-fit py-2"
                >
                  Log In
                </Button>
              </>
            )}
          </div>
        ) : (
          songs.map((song) => (
            <MediaItem
              key={song.id}
              onClick={(id: string) => onPlay(id)}
              data={song}
            />
          ))
        )}
      </div>
    </div>
  );
}
