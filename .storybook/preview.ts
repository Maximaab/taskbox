import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark, // Устанавливаем темную тему по умолчанию
});

import type { Preview } from '@storybook/react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'light', 
      values: [
        {
          name: 'light',
          value: '#ffffff', 
        },
        {
          name: 'dark',
          value: '#1A1A1E', 
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
