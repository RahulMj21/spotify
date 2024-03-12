import Avatar from "@/components/common/avatar";
import { GET_SONGS } from "@/services/queries";
import { IGetSongs, ISong, SongType } from "@/types";
import { cn } from "@/utils/cn";
import { useQuery } from "@apollo/client";

interface SongProps {
  song: ISong;
  isCurrent?: boolean;
}

const Song = ({ song, isCurrent }: SongProps) => {
  return (
    <div
      tabIndex={0}
      className={cn(
        "flex items-center gap-2 w-full rounded-md font-medium p-2.5 transition-colors",
        isCurrent && "bg-gray-200/5",
      )}
    >
      <Avatar
        src={`${process.env.NEXT_PUBLIC_API_URL}${song.photoUrl}`}
        className="h-10 w-10"
      />
      <div className="flex-1 text-left">
        <h3 className="text-sm">{song.title}</h3>
        <p className="text-xs text-gray-400">{song.artist}</p>
      </div>
      <p className="text-xs text-gray-400">5:20</p>
    </div>
  );
};

const SongsList = () => {
  const { data, loading, error } = useQuery<IGetSongs>(GET_SONGS, {
    variables: {
      search: "",
      songType: SongType.TOP_TRACKS,
    },
  });

  return (
    <div className="flex flex-col gap-5 w-full overflow-y-auto h-[calc(100vh-12rem)] p-[2px] cursor-pointer">
      {data?.getSongs.map((song) => <Song key={song.id} song={song} />)}
    </div>
  );
};

export default SongsList;
