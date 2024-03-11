import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative h-9 w-9 rounded-full overflow-hidden">
      <Image
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt="user avatar"
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
