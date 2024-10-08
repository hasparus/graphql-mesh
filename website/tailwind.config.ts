import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import guildConfig from '@theguild/tailwind-config';

const config: Config = {
  ...guildConfig,
  theme: {
    ...guildConfig.theme,
    extend: {
      ...guildConfig.theme.extend,
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        display: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  darkMode: ['variant', '&:not(.light *)'],
};

export default config;
