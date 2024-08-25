import { GameProps } from "@/app/utils/types/game";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/app/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/app/components/GameCard";

async function getData(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({ params: { id } }: { params: { id: string } }) {
  const data: GameProps = await getData(id);

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black flex items-center justify-center flex-col m-auto mb-8">
      <div className="bg-black h-80 sm:h-96 w-full relative rounded-lg mt-8">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-85 bg-black"
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento:</strong> {data.release}
        </p>
      </Container>
    </main>
  );
}
