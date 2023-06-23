import Layout from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <Layout>
      <div className="p-4">
        <p className="pb-5 text-center text-xl font-bold lg:text-2xl">
          List of tools
        </p>
        <div className="flex flex-col gap-4">
          <div className="">
            <Link href="/tools/image" className="font-bold uppercase underline">
              #Image
            </Link>
            <div className=" mt-3 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <Link
                href="/tools/image/compress"
                className="broder-[1.5px] rounded-lg border p-2 text-center text-sm shadow-md "
              >
                Compress image
              </Link>
              <Link
                href="/tools/image/resize"
                className="broder-[1.5px] rounded-lg border p-2 text-center text-sm shadow-md "
              >
                Resize image
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
