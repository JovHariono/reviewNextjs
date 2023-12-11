import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedResult = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedResult}`);

  return (
    <>
      {/* {Paling Populer} */}
      <section>
        <Header
          title={`Pencarian untuk ${decodedResult}...`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
