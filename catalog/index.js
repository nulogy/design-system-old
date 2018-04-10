import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Read Me",
    content: pageLoader(() => import("./README.md"))
  },
  {
    path: "/principles",
    title: "Design Principles",
    content: pageLoader(() => import("./principles.md"))
  },
];

const config = {
  title: "Nulogy Design System",
  logoSrc: "nulogy_mark.svg",
  useBrowserHistory: true,
  theme: {
    fontFamily: "'Rubik', serif",
    fontHeading: "'Rubik', serif",
    background: "#F3F1F2",
    textColor: "#58595b",
    codeColor: "#1C68A5",
    linkColor: "#0E77D2",
    lightColor: "#F0B41C",
    pageHeadingBackground: "#0E77D2",
    pageHeadingTextColor: "#fff",
    sidebarColor: "white",
    sidebarColorText: "#1C68A5",
    sidebarColorTextActive: "#F0B41C",
  }
}

ReactDOM.render(
  <Catalog {...config} pages={pages} />,
  document.getElementById("catalog")
);
