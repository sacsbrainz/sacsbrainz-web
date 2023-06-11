import PayModal from "@/components/modals/PayModal";
import { payModalState } from "@/recoil/atom";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

function Layout({ children }: { children: React.ReactNode }) {
  const setPaymodal = useSetRecoilState(payModalState);
  return (
    <div>
      <PayModal />
      <div className="sticky top-0 flex w-full divide-x border-b backdrop-blur-[3px] lg:justify-center">
        <Link
          className="w-full py-2 text-center hover:bg-gray-200 lg:w-auto lg:px-5"
          href="/"
        >
          Home
        </Link>
        <Link
          className="w-full py-2 text-center hover:bg-gray-200 lg:w-auto lg:px-5"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="w-full py-2 text-center hover:bg-gray-200 lg:w-auto lg:px-5"
          href="/tools"
        >
          Tools
        </Link>
        <button
          className="w-full py-2 text-center hover:bg-gray-200 lg:w-auto lg:px-5"
          onClick={() => setPaymodal(true)}
        >
          Pay
        </button>
        <Link
          className="w-full py-2 text-center hover:bg-gray-200 lg:w-auto lg:px-5"
          href="/cv"
        >
          CV
        </Link>
      </div>
      {children}
    </div>
  );
}

export default Layout;
