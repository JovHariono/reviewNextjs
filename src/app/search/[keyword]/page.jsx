import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedResult = decodeURI(keyword)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedResult}`
  );

  const searchAnime = await response.json();

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
