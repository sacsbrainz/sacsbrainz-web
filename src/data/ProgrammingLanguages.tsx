import { ProgrammingIcon } from "@/components/icons/programming";
import React from "react";

export interface ProgrammingLanguagesProps {
  name: string;
  logo: React.ReactNode;
  libs: Array<string> | null;
}

export const ProgrammingLanguages: Array<ProgrammingLanguagesProps> = [
  {
    name: "Shell",
    logo: <ProgrammingIcon.bash className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: ["CURL", "HTTPie", "Wget"],
  },
  {
    name: "Node",
    logo: <ProgrammingIcon.nodejs className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: [ "Fetch","Axios", "Got", "Request", "SuperAgent", "http"],
  },
  {
    name: "Ruby",
    logo: <ProgrammingIcon.ruby className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "PHP",
    logo: <ProgrammingIcon.php className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: ["Curl", "Guzzle"],
  },
  {
    name: "Python",
    logo: <ProgrammingIcon.python className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: ["Requests", "http.client"],
  },
  {
    name: "Ansible",
    logo: <ProgrammingIcon.ansible className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  // {
  //   name: "C",
  //   logo: <ProgrammingIcon.c className="sm:h-7 sm:w-7 h-6 w-6"/>,
  //   libs: null,
  // },
  {
    name: "C#",
    logo: <ProgrammingIcon.csharp className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "CFML",
    logo: <ProgrammingIcon.unknown className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Clojure",
    logo: <ProgrammingIcon.clojure className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Dart",
    logo: <ProgrammingIcon.dart className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Elixir",
    logo: <ProgrammingIcon.elixir className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Go",
    logo: <ProgrammingIcon.go className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "HAR",
    logo: <ProgrammingIcon.unknown className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "HTTP",
    logo: <ProgrammingIcon.unknown className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Java",
    logo: <ProgrammingIcon.java className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: ["HttpClient", "HttpURLConnection", "jsoup", "OkHttp"],
  },
  {
    name: "Json",
    logo: <ProgrammingIcon.unknown className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Kotlin",
    logo: <ProgrammingIcon.kotlin className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "MATLAB",
    logo: <ProgrammingIcon.matlap className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Objective-C",
    logo: <ProgrammingIcon.objectivec className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "OCaml",
    logo: <ProgrammingIcon.ocaml className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "PowerShell",
    logo: <ProgrammingIcon.powershell className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: ["RestMethod","WebRequest"],
  },
  {
    name: "R",
    logo: <ProgrammingIcon.r className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Rust",
    logo: <ProgrammingIcon.rust className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
  {
    name: "Swift",
    logo: <ProgrammingIcon.swift className="sm:h-7 sm:w-7 h-6 w-6"/>,
    libs: null,
  },
];
