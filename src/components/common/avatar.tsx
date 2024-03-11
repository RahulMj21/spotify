import { cn } from "@/utils/cn";
import Image from "next/legacy/image";

const Avatar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("relative h-9 w-9 rounded-full overflow-hidden", className)}
      {...props}
    >
      <Image
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt="user avatar"
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
