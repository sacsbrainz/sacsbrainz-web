import Layout from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <Layout>
      <div className="p-4">
        <p className="pb-5 ">
          This is an implementation using my public api check out the{" "}
          <Link
            className="underline  decoration-blue-700 underline-offset-2"
            href={"/docs/api"}
          >
            Api docs
          </Link>
        </p>
        <small>
          Note: All images are automatically deleted after 24 hours meaning the
          links will be invalid.
        </small>
        <div className="mt-4 flex flex-col gap-4">
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
    </Layout>
  );
}

export default Index;
