import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import nulogyLogoMark from './static/nulogy_mark.svg';

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('../README.md'))
  },
  {
    title: 'Foundation',
    pages: [
      {
        path: '/foundation/principles',
        title: 'Design Principles',
        content: pageLoader(() => import('./foundation/principles.md'))
      },
      {
        path: '/foundation/personas',
        title: 'Our Users',
        content: pageLoader(() => import('./foundation/personas.md'))
      }
    ]
  }, {
    title: 'Getting Started',
    pages: [
      {
        path: '/getting_started/designer',
        title: 'Designer',
        content: pageLoader(() => import('./getting_started/designer.md'))
      }, {
        path: '/getting_started/developer',
        title: 'Devdloper',
        content: pageLoader(() => import('./getting_started/developer.md'))
      }
    ]
  }
];

const config = {
  title: 'Nulogy Design System',
  logoSrc: nulogyLogoMark,
  useBrowserHistory: true,
  theme: {
    fontFamily: "'Rubik', serif",
    fontHeading: "'Rubik', serif",
    background: '#F3F1F2',
    textColor: '#58595b',
    codeColor: '#1C68A5',
    linkColor: '#1C68A5',
    linkHoverColor: '#0E77D2',
    lightColor: '#F0B41C',
    pageHeadingBackground: '#0E77D2',
    pageHeadingTextColor: '#fff',
    sidebarColor: 'white',
    sidebarColorText: '#1C68A5',
    sidebarColorTextActive: '#F0B41C'
  }
};

ReactDOM.render(
  <Catalog {...config} pages={pages} />,
  document.getElementById('catalog')
);
