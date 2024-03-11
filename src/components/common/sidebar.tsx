import Avatar from "@/components/common/avatar";
import Logo from "@/components/common/logo";
import { cn } from "@/utils/cn";
import Link from "next/link";

const PLAYLISTS = [
  { text: "For You" },
  { text: "Top Tracks" },
  { text: "Favourites" },
  { text: "Recently Played", isActive: true },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-10 w-[16rem]">
      <div>
        <Logo />
      </div>

      <div className="flex-1 flex flex-col gap-4 text-sm">
        {PLAYLISTS.map(({ text, isActive }) => (
          <Link
            key={text}
            href="/"
            className={cn(
              "text-gray-500 font-medium tracking-wide transition-colors duration-500",
              isActive ? "text-gray-300" : "hover:text-gray-400",
            )}
          >
            {text}
          </Link>
        ))}
      </div>

      <div>
        <Avatar />
      </div>
    </aside>
  );
};

export default Sidebar;
