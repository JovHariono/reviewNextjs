import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4">
      <Header title={"My Collection"} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
              <Image src={collect.anime_image} width={250} height={250} className="w-full" />
              <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-color-accent">
                <h5 className="text-xl text-center ">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
