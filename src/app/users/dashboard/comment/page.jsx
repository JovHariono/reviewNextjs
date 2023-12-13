import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4">
      <Header title={"My Comment"} />
      { comments.length > 1 ? <div className="grid grid-cols-1 px-4 py-4 gap-4">        
        {comments.map((comment) => {          
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div> : <div className="text-color-primary text-xl px-4 h-[67vh]">Anda belum memberi komentar</div>}
    </section>
  );
};

export default Page;
