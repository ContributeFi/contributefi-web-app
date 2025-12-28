import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { IoIosArrowForward } from "react-icons/io";

function TechnicalQuest({ sheetIsOpen, setSheetIsOpen }) {
  const isDesktop = useIsDesktop();

  const side = isDesktop ? "right" : "bottom";

  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <div className="flex cursor-pointer items-center justify-between gap-4 rounded-md bg-[#F7F9FD] p-5 hover:bg-[#F7F9FF]/70">
          <div className="space-y-2">
            <p className="text-left text-[18px] font-semibold text-[#09032A]">
              Technical Quest
            </p>

            <p className="text-[#525866]">
              {" "}
              Building or creative tasks that are GitHub-based or design-based.
            </p>
          </div>

          <IoIosArrowForward className="text-[#2F0FD1]" />
        </div>
      </SheetTrigger>
      <SheetContent
        side={side}
        className={`bg-white ${side === "bottom" ? "h-[80%]" : "sm:max-w-lg"} px-4`}
      >
        <SheetHeader className="relative">
          <SheetTitle className="top-5 left-4 text-[28px] font-bold text-[#09032A]">
            Technical Quest
          </SheetTitle>
          <SheetDescription className="font-[300] text-[#525866]">
            Code and design-based tasks
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default TechnicalQuest;
