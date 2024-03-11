import SearchIntput from "@/components/common/searchInput";
import Sidebar from "@/components/common/sidebar";
import SongsList from "@/components/common/songsList";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={cn(
          "absolute h-4/5 w-[90%] rounded-full z-1 rotate-[20deg] top-[10rem] left-[2rem]",
          "bg-[blue]/10",
        )}
      />
      <div className="relative min-h-screen py-6 px-8 flex gap-5 backdrop-blur-[5rem] z-2">
        <Sidebar />
        <main className="flex items-start gap-16 w-full">
          <div className="flex flex-col gap-7 w-1/3">
            <h1 className="text-3xl font-semibold tracking-wide">
              Recently Played
            </h1>
            <SearchIntput />
            <SongsList />
          </div>
          <div className="w-2/3">Currently playing</div>
        </main>
      </div>
    </div>
  );
}
