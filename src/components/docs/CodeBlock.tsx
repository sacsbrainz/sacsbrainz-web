import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css";
import { languagesDictionary } from "@/lib/services";

const CodeBlock = ({ language, code }: { language: string; code: string }) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  const converter = languagesDictionary.get(language.toLowerCase());

  return (
    <pre className="">
      <code
        className={`language-${converter ? converter.hljs : "javascript"}`}
        ref={codeRef}
      >
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
