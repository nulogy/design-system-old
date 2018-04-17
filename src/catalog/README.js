import React from 'react';
import { markdown, ImageSpecimen, ColorPaletteSpecimen } from 'catalog';
import nuLogo from '../images/nulogy_mark.svg';

export default () => markdown`
  Hi!

  Welcome to your freshly set up Catalog. To get started immediately, check out the \`catalog/\` directory (or wherever you've set it up).

  - \`README.md\`: This Markdown document
  - \`index.js\`: The entry file to start Catalog. Change configuration and add pages here.
  - \`index.html\`: The HTML document which gets served. Usually there's no need to edit this unless for example you want to load a custom font.
  - \`static/\`: A directory with files that are served statically. For example the Catalog logo above.

  For more details about how to use Catalog, check out the [documentation](https://docs.catalog.style/).

  ${<ImageSpecimen src={nuLogo} span="1" plain={true} />}

  ## Some colours

  ${(
    <ColorPaletteSpecimen
      colors={[
        { name: 'grey900 - text', value: '#58595b' },
        { name: 'grey100 - background', value: '#F3F1F2' },
        { name: 'blue500 - links', value: '#1C68A5' },
        { name: 'blue400 - accents', value: '#0E77D2' },
        { name: 'yellow500 - accents', value: '#F0B41C' }
      ]}
    />
  )}
`;
