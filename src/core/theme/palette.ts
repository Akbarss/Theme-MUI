import { PaletteOptions } from "@mui/material";
import { IColorsOption } from ".";

export default function themePalette(theme: IColorsOption): PaletteOptions {
  return {
    common: {
      black: theme.colors?.darkPaper,
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      50: theme.colors?.primary50,
      100: theme.colors?.primary100,
      200: theme.colors?.primary200,
      300: theme.colors?.primary300,
      400: theme.colors?.primary400,
      500: theme.colors?.primary500,
      600: theme.colors?.primary600,
      700: theme.colors?.primary700,
      800: theme.colors?.primary800,
      900: theme.colors?.primary900,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      50: theme.colors?.secondary50,
      100: theme.colors?.secondary100,
      200: theme.colors?.secondary200,
      300: theme.colors?.secondary300,
      400: theme.colors?.secondary400,
      500: theme.colors?.secondary500,
      600: theme.colors?.secondary600,
      700: theme.colors?.secondary700,
      800: theme.colors?.secondary800,
      900: theme.colors?.secondary900,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
      50: theme.colors?.error50,
      100: theme.colors?.error100,
      200: theme.colors?.error200,
      300: theme.colors?.error300,
      400: theme.colors?.error400,
      500: theme.colors?.error500,
      600: theme.colors?.error600,
      700: theme.colors?.error700,
      800: theme.colors?.error800,
      900: theme.colors?.error900,
    },
    info: {
      light: theme.colors?.infoLight,
      main: theme.colors?.infoMain,
      dark: theme.colors?.infoDark,
      50: theme.colors?.info50,
      100: theme.colors?.info100,
      200: theme.colors?.info200,
      300: theme.colors?.info300,
      400: theme.colors?.info400,
      500: theme.colors?.info500,
      600: theme.colors?.info600,
      700: theme.colors?.info700,
      800: theme.colors?.info800,
      900: theme.colors?.info900,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
      50: theme.colors?.warning50,
      100: theme.colors?.warning100,
      200: theme.colors?.warning200,
      300: theme.colors?.warning300,
      400: theme.colors?.warning400,
      500: theme.colors?.warning500,
      600: theme.colors?.warning600,
      700: theme.colors?.warning700,
      800: theme.colors?.warning800,
      900: theme.colors?.warning900,
    },
    success: {
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
      50: theme.colors?.success50,
      100: theme.colors?.success100,
      200: theme.colors?.success200,
      300: theme.colors?.success300,
      400: theme.colors?.success400,
      500: theme.colors?.success500,
      600: theme.colors?.success600,
      700: theme.colors?.success700,
      800: theme.colors?.success800,
      900: theme.colors?.success900,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      400: theme.colors?.grey400,
      500: theme.colors?.grey500,
      600: theme.colors?.grey600,
      700: theme.colors?.grey700,
      900: theme.colors?.grey900,
    },
    text: {
      primary: theme.textColor,
      secondary: theme.textGrayColor,
      disabled: theme.colors?.grey500,
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundColor,
    },

    mode: theme.paletteMode,
  };
}
