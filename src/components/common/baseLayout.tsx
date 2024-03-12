import { cn } from "@/utils/cn";
import Sidebar from "@/components/common/sidebar";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={cn(
          "absolute h-4/5 w-[90%] rounded-full z-1 rotate-[20deg] top-[10rem] left-[2rem]",
          "bg-[blue]/10",
        )}
      />
      <div className="relative h-screen py-6 px-8 flex gap-5 backdrop-blur-[5rem] z-2 overflow-y-auto">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
