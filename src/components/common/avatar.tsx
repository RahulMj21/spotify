import { cn } from "@/utils/cn";
import Image from "next/legacy/image";

const SAMPLE_IMG =
  "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

const Avatar = ({ src, className, ...props }: AvatarProps) => {
  return (
    <div
      className={cn("relative h-9 w-9 rounded-full overflow-hidden", className)}
      {...props}
    >
      <Image src={src || SAMPLE_IMG} alt="user avatar" layout="fill" />
    </div>
  );
};

export default Avatar;
