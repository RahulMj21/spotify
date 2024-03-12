import Avatar from "@/components/common/avatar";
import Logo from "@/components/common/logo";
import { PLAYLISTS } from "@/constants/app.constants";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const playlist = router.query.playlist as string;

  return (
    <aside className="flex flex-col gap-12 w-[16rem]">
      <div>
        <Logo />
      </div>

      <div className="flex-1 flex flex-col gap-4 text-sm">
        {PLAYLISTS.map(({ id, title }) => (
          <Link
            key={id}
            href={`/playlist/${id.toLowerCase().replaceAll("_", "-")}`}
            className={cn(
              "text-gray-500 p-1 rounded-md font-medium tracking-wide transition-colors duration-500",
              playlist?.replaceAll("-", "_") === id.toLowerCase()
                ? "text-gray-300"
                : "hover:text-gray-400",
            )}
          >
            {title}
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
