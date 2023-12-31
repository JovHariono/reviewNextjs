import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
      <div className="h-[76vh] flex justify-center items-center flex-col">
        <h5 className="text-2xl font-bold text-color-primary">Welcome, {user.name}</h5>
        <Image className="pt-2" src={user.image} alt="..." width={250} height={250} />
        <div className="py-4 flex flex-wrap gap-4">
            <Link href="/users/dashboard/collection" className="bg-color-accent font-bold px-4 py-2 text-xl">My Collection
            </Link>
            <Link href="/users/dashboard/comment" className="bg-color-accent font-bold px-4 py-2 text-xl">My Comment
            </Link>
        </div>
      </div>
  );
};

export default Page;
