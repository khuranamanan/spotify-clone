import { create } from "zustand";

interface UsePlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (id: string[]) => void;
  reset: () => void;
}

const usePlayer = create<UsePlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id) => set({ activeId: id }),
  setIds: (ids) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
}));

export default usePlayer;
