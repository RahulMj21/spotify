import SearchIntput from "@/components/common/searchInput";
import SongsList from "@/components/common/songsList";
import { useRouter } from "next/router";

const Playlist = () => {
  const router = useRouter();
  const playlist = (router.query.playlist as string) || "";

  return (
    <main className="flex items-start gap-16 w-full">
      <div className="flex flex-col gap-7 w-1/3">
        <h1 className="text-3xl font-semibold tracking-wide capitalize">
          {playlist.replaceAll("-", " ")}
        </h1>
        <SearchIntput />
        <SongsList />
      </div>
      <div className="w-2/3">Currently playing</div>
    </main>
  );
};

export default Playlist;
