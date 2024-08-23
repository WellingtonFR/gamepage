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
      <section className="w-full bg-slate-800 rounded-lg p-4 mb-1 hover:bg-orange-700 transition-all duration-300">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-ellipsis truncate whitespace-nowrap overflow-hidden text-white">
            {data.title}
          </p>
          <BiRightArrowCircle size={24} className="text-white" />
        </div>
      </section>
    </Link>
  );
}
