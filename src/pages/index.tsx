import Layout from "@/layouts/Layout";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      
      <Layout>
        <div className="px-4">Hey! welcome...</div>
        <div className="my-2 px-4">lets count:</div>
        {Array(100)
          .fill(null)
          .map((_, index) => (
            <div className="px-4" key={index}>
              no: {index}
            </div>
          ))}
      </Layout>
    </>
  );
};

export default Home;
