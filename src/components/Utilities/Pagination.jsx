const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page === lastPage) {
      alert("Anda berada di page terakhir");
      scrollTop();
      return false;
    }

    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    if (page === 1) {
      alert("Anda berada di page 1");
      scrollTop();
      return false;
    }

    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      { page == 1 ? "" : (<button
        onClick={handlePrevPage}
        className="transition-all hover:text-color-accent underline"
      >
        Prev
      </button>)}
      <p>
        {page} of {lastPage}
      </p>
      { page == lastPage ? "" : (<button
        onClick={handleNextPage}
        className="transition-all hover:text-color-accent underline"
      >
        Next
      </button>)}
    </div>
  );
};

export default Pagination;
