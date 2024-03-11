import Avatar from "@/components/common/avatar";
import { cn } from "@/utils/cn";

interface SongProps {
  isCurrent?: boolean;
}

const Song = ({ isCurrent }: SongProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-full rounded-md font-medium p-2.5 transition-colors",
        isCurrent && "bg-gray-200/5",
      )}
    >
      <Avatar className="h-10 w-10" />
      <div className="flex-1">
        <h3 className="text-sm">The End Where I Begin</h3>
        <p className="text-xs text-gray-400">The Script</p>
      </div>
      <p className="text-xs text-gray-400">5:20</p>
    </div>
  );
};

const SongsList = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Song />
      <Song />
      <Song isCurrent />
      <Song />
    </div>
  );
};

export default SongsList;
