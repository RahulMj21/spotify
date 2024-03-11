import Link from "next/link";
import Spotify from "@/components/icons/spotify";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1.5 font-semibold text-lg">
      <Spotify className="fill-gray-50 h-8 w-8" />
      <span>Spotify</span>
    </Link>
  );
};

export default Logo;
