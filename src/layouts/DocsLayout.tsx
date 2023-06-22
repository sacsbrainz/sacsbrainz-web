import { fontPoppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { transform } from "@/lib/services";

import CodeBlock from "@/components/docs/CodeBlock";
import {
  ProgrammingLanguages,
  type ProgrammingLanguagesProps,
} from "@/data/ProgrammingLanguages";
import { ClipboardIcon, InfoIcon, MoreVerticalIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import curlString from "curl-string";
import { env } from "@/env.mjs";

function DocsLayout({
  children,
  defaultCode,
}: {
  children: React.ReactNode;
  defaultCode: string | null | undefined;
}) {
  const url = env.NEXT_PUBLIC_API_URL;
  const options = {
    method: "post",
    headers: { accept: "application/json" },
    body: { hello: "world" },
  };

  const curlStringOptions = { colorJson: false, jsonIndentWidth: 4 }; // (these are the defaults)
  const defCode = curlString(url, options, curlStringOptions);

  const [visibleLanguages, setVisibleLanguages] =
    useState<Array<ProgrammingLanguagesProps> | null>(null);
  const [hiddenLanguages, setHiddenLanguages] =
    useState<Array<ProgrammingLanguagesProps> | null>(null);
  const [selectedLanguage, setSelectedLanguage] =
    useState<ProgrammingLanguagesProps | null>(null);
  const [showHiddenLanguages, setShowHiddenLanguages] =
    useState<boolean>(false);

  const [code, setCode] = useState(defCode);

  const [currentLib, setCurrentLib] = useState<string | undefined>("curl");

  useEffect(() => {
    // pick first 5 languages from the array
    const visible = ProgrammingLanguages.slice(0, 5);
    setVisibleLanguages(visible);
    if (visible[0]) {
      setSelectedLanguage(visible[0]);
      if (visible[0].libs) {
        setCurrentLib(visible[0].libs[0]);
      }
    }

    // pick the rest of the languages from the array
    const hidden = ProgrammingLanguages.slice(5);
    setHiddenLanguages(hidden);
  }, []);

  return (
    <div
      className={cn(
        "font-poppins-400 bg-background p-4 antialiased",
        fontPoppins.variable
      )}
    >
      <div className="flex gap-2 lg:divide-x">
        <div className="hidden w-[280px] xl:block">
          <div className="flex max-h-[calc(100vh-60px)] flex-col gap-2 overflow-y-auto">
            <label htmlFor="">cust</label>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
            <Link className="bg-gray-200 px-4" href={""}>
              custooo
            </Link>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-2 text-sm md:flex-row md:divide-x">
          <div className=" w-full p-4">center</div>
          <div className="flex w-full flex-col gap-2 md:w-[500px]">
            {/* Lnaguage */}
            <div className="flex w-full flex-col gap-2 px-4 md:p-4">
              <span className="font-bold">LANGUAGE</span>
              <div className="flex justify-between overflow-hidden">
                {visibleLanguages?.map((language, index) => (
                  <button
                    onClick={() => {
                      setSelectedLanguage(language);
                      setShowHiddenLanguages(false);
                      if (language.libs) {
                        setCurrentLib(language.libs[0]);
                      }
                      if (language.name.toLowerCase() === "shell") {
                        setCode(defCode);
                        return;
                      }
                      const transformedCode = transform(defCode, language.name);
                      setCode(transformedCode);
                    }}
                    className={cn(
                      "flex flex-col items-center gap-1 px-4 py-2 text-[11px] sm:px-8 sm:text-xs md:px-6",
                      selectedLanguage?.name === language.name &&
                        "rounded-lg border-[1.5px] border-gray-300"
                    )}
                    key={index}
                  >
                    {language.logo}
                    <span>{language.name}</span>
                  </button>
                ))}
                {!showHiddenLanguages && (
                  <button
                    onClick={() => {
                      setShowHiddenLanguages(!showHiddenLanguages);
                    }}
                    className="ml-2"
                  >
                    <MoreVerticalIcon />
                  </button>
                )}
              </div>
              {showHiddenLanguages && hiddenLanguages && (
                <div>
                  <div className="grid grid-cols-5 overflow-hidden">
                    {hiddenLanguages?.map((language, index) => (
                      <button
                        onClick={() => {
                          setSelectedLanguage(language);
                          setShowHiddenLanguages(false);
                          if (language.libs) {
                            setCurrentLib(language.libs[0]);
                          }
                          if (language.name.toLowerCase() === "shell") {
                            setCode(defCode);
                            return;
                          }
                          const transformedCode = transform(
                            defCode,
                            language.name
                          );
                          setCode(transformedCode);
                        }}
                        className={cn(
                          "flex flex-col items-center gap-1 px-8 py-2 text-xs md:px-6",
                          selectedLanguage?.name === language.name &&
                            "rounded-lg border-[1.5px] border-gray-300"
                        )}
                        key={index}
                      >
                        {language.logo}
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setShowHiddenLanguages(!showHiddenLanguages);
                    }}
                    className="m-4 rounded-md border px-4 py-2"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* AUTHENTICATION */}
            {/* <div className="flex w-full flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold">AUTHENTICATION</span>
                <div className="flex items-center gap-1 text-[10px]">
                  <span>HEADER</span>
                  <button>
                    <InfoIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex h-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 bg-sacsbrainz-gray dark:border-white dark:bg-sacsbrainz-black">
                <span className="font-poppins-600 px-2 text-center ">
                  Header
                </span>
                <input
                  placeholder="{{API_KEY}}"
                  className=" h-10 w-full rounded-lg rounded-l-none bg-transparent px-2 focus:outline-0"
                />
              </div>
            </div> */}

            {/* Code */}
            <div className="w-[500px] p-4">
              <div className="flex max-h-[450px] flex-col divide-y divide-gray-600 rounded-lg bg-[rgb(28,27,27)]">
                {selectedLanguage?.libs && (
                  <Select
                    value={currentLib}
                    onValueChange={(e) => {
                      setCurrentLib(e);
                      if (selectedLanguage.name.toLowerCase() === "shell") {
                        if (e.toLowerCase() === "curl") {
                          setCode(defCode);
                          return;
                        }
                        const transformedCode = transform(defCode, e);
                        setCode(transformedCode);
                        return;
                      }

                      const transformedCode = transform(
                        defCode,
                        `${selectedLanguage.name}-${e}}`
                      );
                      setCode(transformedCode);
                    }}
                  >
                    <SelectTrigger className="w-full rounded-b-none border-0 bg-transparent p-3 text-white outline-0 ring-0 focus:outline-0 focus:ring-0">
                      <SelectValue placeholder={selectedLanguage?.libs[0]} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedLanguage?.libs.map((lib, index) => (
                        <SelectItem key={index} value={lib}>
                          {lib}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                <div className="w-full px-3 text-current">
                  <div className="flex justify-between py-3">
                    <span className="text-white">REQUEST</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto text-white">
                    <CodeBlock
                      language={
                        selectedLanguage
                          ? selectedLanguage.name.toLowerCase()
                          : "javascript"
                      }
                      code={code}
                    />
                  </div>
                </div>
                <div className="flex justify-between p-3">
                  <button>
                    <ClipboardIcon className="h-5 w-5 stroke-white" />
                  </button>
                  <button className="bg-black px-3 py-2 text-white">
                    Try it!
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[500px] p-4">
              <div className="w-full divide-y rounded-md border border-gray-200 bg-sacsbrainz-gray dark:border-white dark:bg-sacsbrainz-black">
                <div className="font-poppins-400 flex w-full justify-between p-4">
                  <span>RESPONSE</span>
                </div>
                <div className="flex flex-col items-center p-4">
                  <span className="pb-10 text-gray-600 dark:text-white">
                    Click <code>Try it!!</code> to start a request and see the
                    response here
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {children} */}
    </div>
  );
}

export default DocsLayout;
