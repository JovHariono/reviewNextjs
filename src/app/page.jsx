import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  let rekomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  rekomAnime = reproduce(rekomAnime, 4)

  return (
    <>
      {/* {Paling Populer} */}
      <section>
      <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"} />
      <AnimeList api={topAnime} />
      </section>

      {/* {Rekomendasi} */}
      <section className="pt-4">
      <Header title={"Rekomendasi"}/>
      <AnimeList api={rekomAnime} />
      </section>
    </>
  );
};

export default Page;
