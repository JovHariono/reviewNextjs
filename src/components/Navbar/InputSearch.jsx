"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if(!keyword || keyword.trim() == "") return

    if ((event.key == "Enter" || event.type === "click")) {
      router.push(`/search/${keyword}`);
      clearSearchInput();
    }
  };

  const clearSearchInput = () => {
    searchRef.current.value = "";
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder="Cari Anime..."
        className="w-full pl-2 p-2 rounded"
        onKeyDown={handleSearch}
      ></input>
      <button onClick={handleSearch} className="absolute top-1.5 end-1">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
