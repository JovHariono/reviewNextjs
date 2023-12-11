import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;

  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
      </div>
      <div className="pt-4, px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover"></Image>
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
    </>
  );
};

export default Page;
