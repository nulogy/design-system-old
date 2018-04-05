import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/other",
    title: "Other",
    content: pageLoader(() => import("./WELCOME.md"))
  }
];

const config = {
  title: "Nulogy Design System",
  logoSrc: "nulogy_mark.svg",
  useBrowserHistory: true,
  theme: {
    fontFamily: "'Rubik', sans-serif",
    msRatio: 1.25,
    background: "#F3F1F",
    textColor: "#58595b",
    codeColor: "#1C68A5",
    linkColor: "#0E77D2",
    lightColor: "#F0B41C",
    pageHeadingBackground: "#0E77D2",
    pageHeadingTextColor: "#fff",
    pageHeadingHeight: "12rem",
    sidebarColorText: "#1C68A5",
    sidebarColorTextActive: "#F0B41C",
  }
}

ReactDOM.render(
  <Catalog {...config} pages={pages} />,
  document.getElementById("catalog")
);
