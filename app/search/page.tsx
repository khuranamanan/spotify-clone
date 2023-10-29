import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";

import SearchContent from "./components/SearchContent";
import Heaader from "@/components/Heaader";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string };
}

async function Search({ searchParams }: SearchProps) {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Heaader className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Heaader>
      <SearchContent songs={songs} />
    </div>
  );
}

export default Search;
