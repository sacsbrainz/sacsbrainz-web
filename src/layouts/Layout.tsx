import { ThemeToggle } from "@/components/header/ThemeToggle";
import PayModal from "@/components/modals/PayModal";
import { fontPoppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { payModalState } from "@/recoil/atom";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

function Layout({ children }: { children: React.ReactNode }) {
  const setPaymodal = useSetRecoilState(payModalState);
  return (
    <div
      className={cn(
        "font-poppins-400 min-h-screen bg-background antialiased",
        fontPoppins.variable
      )}
    >
      <PayModal />
      <div className="sticky top-0 z-50 flex w-full divide-x border-b bg-white/25 backdrop-blur-[3px] lg:justify-center">
        <Link
          className="w-full py-4 text-center hover:bg-gray-200 dark:hover:bg-black lg:w-auto lg:px-5"
          href="/"
        >
          Home
        </Link>
        <button
          disabled
          className="w-full py-4 text-center hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20 dark:hover:bg-black lg:w-auto lg:px-5"
          // href="/blog"
        >
          Blog
        </button>
        <button
          disabled
          className="w-full py-4 text-center hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20 dark:hover:bg-black lg:w-auto lg:px-5"
          // href="/tools"
        >
          Tools
        </button>
        <button
          className="w-full py-4 text-center hover:bg-gray-200 dark:hover:bg-black lg:w-auto lg:px-5"
          onClick={() => setPaymodal(true)}
        >
          Pay
        </button>
        <button
          disabled
          className="w-full py-4 text-center hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20 dark:hover:bg-black lg:w-auto lg:px-5"
          // href="/docs/api"
        >
          Api
        </button>
        <div className=" absolute right-0 top-16">
          <ThemeToggle />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;
