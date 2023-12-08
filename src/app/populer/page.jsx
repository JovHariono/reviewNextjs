"use client";

import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";

const { default: HeaderMenu } = require("@/components/Utilities/HeaderMenu");
const { default: Pagination } = require("@/components/Utilities/Pagination");

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );

    const data = await response.json();

    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination.last_visible_page}/>
    </>
  );
};

export default Page;
