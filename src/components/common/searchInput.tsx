import SearchIcon from "@/components/icons/search";

const SearchIntput = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search Song/Artist"
        className="bg-gray-200/5 text-gray-300 px-3 py-2 w-full rounded-md text-sm"
      />
      <SearchIcon className="h-4 w-4 fill-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default SearchIntput;
