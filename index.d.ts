import { Context } from 'react';

interface IThemes {
  default: 'default';
  dark: 'dark';
}

interface ISizes {
  xsmall: 'xsmall';
  small: 'small';
  medium: 'medium';
  large: 'large';
}

interface IThemeContext {
  size?: string,
  theme?: string,
}

declare const themes: IThemes;
declare const sizes: ISizes;
declare const ThemeContext: Context<IThemeContext>;

export { themes, sizes, ThemeContext };
