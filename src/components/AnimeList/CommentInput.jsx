"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, user_name, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [lessComment, setLessComment] = useState(false);
  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    if (comment.length <= 3) {
      setLessComment(!lessComment);
      return;
    }
    const data = { anime_mal_id, user_email, comment, user_name, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(postComment.isCreated);
      setComment("");
      router.refresh();
    }

    return;
  };

  return (
    <div className="flex flex-col">
      {isCreated && <p className="text-color-primary">Postingan terkirim...</p>}
      {lessComment && <p className="text-color-primary">Komentar harus lebih dari 3 huruf</p>}
      <textarea
        className="h-32 w-full text-xl p-4"
        placeholder="Komentar..."
        onChange={handleInput}
        value={comment}
      />
      <button
        className="w-52 py-2 px-4 bg-color-accent"
        onClick={handlePosting}
      >
        Post
      </button>
    </div>
  );
};

export default CommentInput;
