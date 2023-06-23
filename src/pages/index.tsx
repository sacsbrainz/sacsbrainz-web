import { AboutMeWords } from "@/data/AboutMeWords";
import Layout from "@/layouts/Layout";
import { type NextPage } from "next";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
const Home: NextPage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <>
      <Layout>
        <div className="App">
          <div className="flex flex-col gap-3 p-4">
            {step === 0 && (
              <span className="decoration-slice text-xl font-bold underline">
                About me
              </span>
            )}
            {step === 1 && (
              <span className="text-xl font-bold underline decoration-red-400 decoration-wavy">
                About me in details? 😂😂
              </span>
            )}
            {step === 2 && (
              <span className="text-xl font-bold underline decoration-red-400 decoration-wavy">
                About me in details professionally? 🏢
              </span>
            )}
            {step === 3 && (
              <span className="text-xl font-bold underline decoration-red-400 decoration-wavy">
                About me in details generally? 😂😂
              </span>
            )}
            <span className="whitespace-pre-line">
              <Typewriter
                words={[...AboutMeWords]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={step === 0 ? 80 : 10}
                deleteSpeed={step === 0 ? 60 : 20}
                delaySpeed={1000}
                onDelay={() => {
                  if (step === 3) {
                    setStep(0);
                  }
                  setStep(step + 1);
                }}
              />
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
