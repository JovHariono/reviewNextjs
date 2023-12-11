"use client"
import { Backspace } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

  return (
    <div className="flex justify-between px-4 mb-4">
      <button onClick={handleBack} className="text-color-primary">
        <Backspace size={32} />
      </button>
      <h3 className="text-2xl text-color-primary ">{title}</h3>
    </div>
  );
};

export default Header;
