/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as cURLConverter from "curlconverter";
import HTTPSnippet from "httpsnippet";

type CurlConverterFnc = (data: string) => string;
type CurlConverterType = {
  transform: CurlConverterFnc;
  syntaxHighlither: string;
};
type langConverterType = {
  converter: CurlConverterFnc;
  hljs: string;
  title: string;
};

export const CONVERTERS: Map<string, CurlConverterType> = new Map([
  [
    "Ansible",
    { syntaxHighlither: "ansible", transform: cURLConverter.toAnsible },
  ],
  [
    "Browser",
    { syntaxHighlither: "browser", transform: cURLConverter.toBrowser },
  ],
  ["CFML", { syntaxHighlither: "cfml", transform: cURLConverter.toCFML }],
  ["CSharp", { syntaxHighlither: "csharp", transform: cURLConverter.toCSharp }],
  ["Dart", { syntaxHighlither: "dart", transform: cURLConverter.toDart }],
  ["Elixir", { syntaxHighlither: "elixir", transform: cURLConverter.toElixir }],
  ["Go", { syntaxHighlither: "go", transform: cURLConverter.toGo }],
  ["Java", { syntaxHighlither: "java", transform: cURLConverter.toJava }],
  [
    "Javascript",
    { syntaxHighlither: "javascript", transform: cURLConverter.toJavaScript },
  ],
  [
    "JSON String",
    { syntaxHighlither: "json", transform: cURLConverter.toJsonString },
  ],
  [
    "MATLAB",
    { syntaxHighlither: "mathlab", transform: cURLConverter.toMATLAB },
  ],
  ["Node", { syntaxHighlither: "javascript", transform: cURLConverter.toNode }],
  [
    "Node Axios",
    { syntaxHighlither: "javascript", transform: cURLConverter.toNodeAxios },
  ],
  [
    "Node Fetch",
    { syntaxHighlither: "javascript", transform: cURLConverter.toNodeFetch },
  ],
  [
    "Node Request",
    { syntaxHighlither: "javascript", transform: cURLConverter.toNodeRequest },
  ],
  ["PHP", { syntaxHighlither: "php", transform: cURLConverter.toPhp }],
  [
    "PHP Requests",
    { syntaxHighlither: "php", transform: cURLConverter.toPhpRequests },
  ],
  ["Python", { syntaxHighlither: "python", transform: cURLConverter.toPython }],
  ["R", { syntaxHighlither: "r", transform: cURLConverter.toR }],
  ["Ruby", { syntaxHighlither: "ruby", transform: cURLConverter.toRuby }],
  ["Rust", { syntaxHighlither: "rust", transform: cURLConverter.toRust }],
  // ['Strest', { syntaxHighlither: 'strest', transform: cURLConverter.toStrest }],
]);

export const CONVERTERS_LIST = [...CONVERTERS.keys()];

export function transform(
  value?: string,
  targetLanguage = "Javascript"
): string {
  if (!value) {
    return "";
  }

  const curlCommand = value.replaceAll(/(\r\n|\n|\r)/gm, " ");

  const converter = languagesDictionary.get(targetLanguage.toLowerCase());

  if (!converter) {
    return value;
  }

  // return converter.converter(curlCommand);
  return converter.converter(curlCommand);
}

function httpsnippet(title: any, lang: any, client: any, hljs: any) {
  lang = lang ? lang.toLowerCase() : title.toLowerCase();
  hljs = hljs ? hljs : lang;
  const to = (curl: any) => {
    const [har, warnings] = cURLConverter.toHarStringWarn(curl);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedHar = JSON.parse(har);
    warnings.push([
      "httpsnippet",
      title + " code is generated by the httpsnippet library.",
    ]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    if (
      parsedHar.log &&
      parsedHar.log.entries &&
      parsedHar.log.entries.some(
        (e: { request: { postData: { text: any } } }) =>
          e.request && e.request.postData && e.request.postData.text
      )
    ) {
      warnings.push([
        "httpsnippet-no-data",
        "httpsnippet might ignore request data",
      ]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    let code = new HTTPSnippet(parsedHar).convert(lang, client);
    if (Array.isArray(code)) {
      // TODO: this doesn't work for JavaScript for example, because of const
      code = code.join("\n\n");
      warnings.push([
        "httpsnippet-multiple-requests",
        "found multiple requests",
      ]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    // return [code, warnings];
    return code ? code : "";
  };
  return { converter: to, hljs, title };
}

export const languagesDictionary: Map<string, langConverterType> = new Map([
  [
    "ansible",
    {
      converter: cURLConverter.toAnsible,
      hljs: "yaml",
      title: "Ansible",
    },
  ],
  // TODO: CFML isn't supported by highlight.js
  [
    "cfml",
    {
      converter: cURLConverter.toCFML,
      hljs: "javascript",
      title: "ColdFusion Markup Language",
    },
  ],
  [
    "c#",
    {
      converter: cURLConverter.toCSharp,
      hljs: "csharp",
      title: "C# + HttpClient",
    },
  ],
  [
    "clojure",
    {
      converter: cURLConverter.toClojure,
      hljs: "clojure",
      title: "Clojure",
    },
  ],
  ["dart", { converter: cURLConverter.toDart, hljs: "dart", title: "Dart" }],
  [
    "elixir",
    {
      converter: cURLConverter.toElixir,
      hljs: "elixir",
      title: "Elixir",
    },
  ],
  ["go", { converter: cURLConverter.toGo, hljs: "go", title: "Go" }],
  ["har", { converter: cURLConverter.toHarString, hljs: "json", title: "HAR" }],
  ["http", { converter: cURLConverter.toHTTP, hljs: "http", title: "HTTP" }],
  [
    "httpie",
    {
      converter: cURLConverter.toHttpie,
      hljs: "bash",
      title: "HTTPie",
    },
  ],
  [
    "java",
    {
      converter: cURLConverter.toJava,
      hljs: "java",
      title: "Java + HttpClient",
    },
  ],
  [
    "java-httpclient",
    {
      converter: cURLConverter.toJava,
      hljs: "java",
      title: "Java + HttpClient",
    },
  ],
  [
    "java-httpurlconnection",
    {
      converter: cURLConverter.toJavaHttpUrlConnection,
      hljs: "java",
      title: "Java + HttpURLConnection",
    },
  ],
  [
    "java-jsoup",
    {
      converter: cURLConverter.toJavaJsoup,
      hljs: "java",
      title: "Java + jsoup",
    },
  ],
  [
    "java-okhttp",
    {
      converter: cURLConverter.toJavaOkHttp,
      hljs: "java",
      title: "Java + OkHttp",
    },
  ],
  [
    "javascript",
    {
      converter: cURLConverter.toJavaScript,
      hljs: "javascript",
      title: "JavaScript + fetch",
    },
  ],
  [
    "javascript-jquery",
    {
      converter: cURLConverter.toJavaScriptJquery,
      hljs: "javascript",
      title: "JavaScript + jQuery",
    },
  ],
  [
    "javascript-xhr",
    {
      converter: cURLConverter.toJavaScriptXHR,
      hljs: "javascript",
      title: "JavaScript + XHR",
    },
  ],
  // People googling for "curl json" are probably looking for something else
  [
    "json",
    {
      converter: cURLConverter.toJsonString,
      hljs: "json",
      title: "a JSON object",
    },
  ],
  [
    "kotlin",
    {
      converter: cURLConverter.toKotlin,
      hljs: "kotlin",
      title: "Kotlin",
    },
  ],
  [
    "matlab",
    {
      converter: cURLConverter.toMATLAB,
      hljs: "matlab",
      title: "MATLAB",
    },
  ],
  [
    "node",
    {
      converter: cURLConverter.toNode,
      hljs: "javascript",
      title: "node-fetch",
    },
  ],
  [
    "node-fetch",
    {
      converter: cURLConverter.toNodeFetch,
      hljs: "javascript",
      title: "node-fetch",
    },
  ],
  [
    "node-http",
    {
      converter: cURLConverter.toNodeHttp,
      hljs: "javascript",
      title: "Node + http",
    },
  ],
  [
    "node-axios",
    {
      converter: cURLConverter.toNodeAxios,
      hljs: "javascript",
      title: "Node + Axios",
    },
  ],
  [
    "node-got",
    {
      converter: cURLConverter.toNodeGot,
      hljs: "javascript",
      title: "Node + Got",
    },
  ],
  [
    "node-request",
    {
      converter: cURLConverter.toNodeRequest,
      hljs: "javascript",
      title: "Node + request",
    },
  ],
  [
    "node-superagent",
    {
      converter: cURLConverter.toNodeSuperAgent,
      hljs: "javascript",
      title: "Node + SuperAgent",
    },
  ],
  [
    "objective-c",
    httpsnippet("Objective-C", "objc", "nsurlsession", "objectivec"),
  ],
  ["ocaml", { ...httpsnippet("OCaml", "OCaml", "OCaml", "OCaml") }],
  ["php", { converter: cURLConverter.toPhp, hljs: "php", title: "PHP" }],
  ["php-curl", { converter: cURLConverter.toPhp, hljs: "php", title: "PHP" }],
  [
    "php-guzzle",
    {
      converter: cURLConverter.toPhpGuzzle,
      hljs: "php",
      title: "PHP + Guzzle",
    },
  ],
  [
    "powershell",
    {
      converter: cURLConverter.toPowershellRestMethod,
      hljs: "powershell",
      title: "PowerShell + Invoke-RestMethod",
    },
  ],
  [
    "powershell-restmethod",
    {
      converter: cURLConverter.toPowershellRestMethod,
      hljs: "powershell",
      title: "PowerShell + Invoke-RestMethod",
    },
  ],
  [
    "powershell-webrequest",
    {
      converter: cURLConverter.toPowershellWebRequest,
      hljs: "powershell",
      title: "PowerShell + Invoke-WebRequest",
    },
  ],
  [
    "python",
    {
      converter: cURLConverter.toPython,
      hljs: "python",
      title: "Python",
    },
  ],
  [
    "python-requests",
    {
      converter: cURLConverter.toPython,
      hljs: "python",
      title: "Python",
    },
  ],
  [
    "python-http.client",
    { ...httpsnippet("Python + http.client", "python", "python3", "python") },
  ],
  ["r", { converter: cURLConverter.toR, hljs: "r", title: "R" }],
  ["ruby", { converter: cURLConverter.toRuby, hljs: "ruby", title: "Ruby" }],
  ["rust", { converter: cURLConverter.toRust, hljs: "rust", title: "Rust" }],
  [
    "swift",
    {
      converter: cURLConverter.toSwift,
      hljs: "swift",
      title: "swift",
    },
  ],
  ["wget", { converter: cURLConverter.toWget, hljs: "bash", title: "Wget" }],
]);
