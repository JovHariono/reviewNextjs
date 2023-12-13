"use client";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async () => {
    alert("OK");
  };

  return (
    <button className="px-2 py-2 bg-color-accent" onClick={handleCollection}>
      Add to Collection
    </button>
  );
};

export default CollectionButton;
