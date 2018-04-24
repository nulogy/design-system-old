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
        title: 'Developer',
        content: pageLoader(() => import('./getting_started/developer.md'))
      }
    ]
  }, {
    title: 'Guidelines',
    pages: [
      {
        path: '/guidlines/localization',
        title: 'Localization',
        content: pageLoader(() => import('./guidlines/localization.md'))
      }, {
        path: '/guidlines/colour',
        title: 'Colour',
        content: pageLoader(() => import('./guidlines/colour.md'))
      }
    ]
  }, {
    title: 'Components',
    pages: [
      {
        path: '/components/button',
        title: 'Button',
        content: pageLoader(() => import('./components/button.md'))
      }
    ]
  }
  /*, {
    title: 'Templates',
    pages: [
      {
        path: '/templates/default',
        title: 'Default',
        content: pageLoader(() => import('./templates/default.md'))
      }
    ]
  }, {
    title: 'F.A.Q.',
    pages: [
      {
        path: '/faq/default',
        title: 'Default',
        content: pageLoader(() => import('./faq/default.md'))
      }
    ]
  }*/
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
