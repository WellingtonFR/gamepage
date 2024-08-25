import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";
import { GameProps } from "@/app/utils/types/game";

interface GameCardProps {
  data: GameProps;
}

export function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-ful rounded-lg p-2 mb-1 transition-all duration-300 group">
        <div className="relative w-full h-56 group-hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-t-lg object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="group-hover:scale-105 transition-all duration-300 text-sm p-1 h-7 font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden text-white bg-black w-full rounded-b-lg text-center">
            {data.title}
          </p>
        </div>
      </section>
    </Link>
  );
}
