/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  PaletteMode,
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import colors from "../../scss/_theme-modules.scss";
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";

export interface IColorsOption {
  colors: { readonly [key: string]: string };
  paletteMode: PaletteMode;
  borderRadius: number;

  textColor: string;
  textGrayColor: string;
  textDisabledColor: string;
  backgroundColor: string;

  paper: string;
  divider: string;
  fontFamily: string;
  shadows: TShadows;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeToggleContext = createContext(() => {});
export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(() => {
    const savedTheme = localStorage.getItem("appTheme");
    return savedTheme ? (savedTheme as PaletteMode) : "light";
  });

  useEffect(() => {
    localStorage.setItem("appTheme", paletteMode);
  }, [paletteMode]);

  const togglePaletteMode = () => {
    setPaletteMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const colorsOption: IColorsOption = {
    colors: colors,
    paletteMode,
    borderRadius: 17,
    textColor: paletteMode === "light" ? colors.grey900 : colors.grey100,
    textGrayColor: paletteMode === "light" ? colors.grey500 : colors.grey300,
    textDisabledColor: paletteMode === "light" ? colors.grey500 : colors.grey500,
    paper: paletteMode === "light" ? colors.paper : colors.darkBackground,
    divider: colors.grey500,
    fontFamily: "Roboto",
    backgroundColor: paletteMode === "light" ? colors.background : colors?.darkBackground,
    shadows: paletteMode === "light" ? lightShadows : darkShadows,
  };

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: themePalette(colorsOption),
      mixins: {
        toolbar: {
          minHeight: "48px",
          padding: "16px",
          "@media (min-width: 600px)": {
            minHeight: "40px",
            padding: "8px",
          },
        },
      },
      typography: themeTypography(colorsOption),
      components: componentStyleOverrides(colorsOption),
      shadows: colorsOption.shadows,
    }),
    [paletteMode]
  );

  const themes = createTheme(themeOptions);

  return (
    <ThemeToggleContext.Provider value={togglePaletteMode}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={themes}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ThemeToggleContext.Provider>
  );
}

type TShadows = [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

const lightShadows: TShadows = [
  "none",
  "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.20)",
  "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)",
  "0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.20)",
  "0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.20)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.20)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.20)",
  "0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 2px 16px rgba(0, 0, 0, 0.20)",
  "0px 5px 5px -3px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.20)",
  "0px 5px 6px -3px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.20)",
  "0px 6px 6px -3px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.20)",
  "0px 6px 7px -4px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 4px 20px rgba(0, 0, 0, 0.20)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.20)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.12), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 5px 24px rgba(0, 0, 0, 0.20)",
  "0px 7px 9px -4px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 5px 26px rgba(0, 0, 0, 0.20)",
  "0px 8px 9px -5px rgba(0, 0, 0, 0.12), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 6px 28px rgba(0, 0, 0, 0.20)",
  "0px 8px 10px -5px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.20)",
  "0px 8px 11px -5px rgba(0, 0, 0, 0.12), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 6px 32px rgba(0, 0, 0, 0.20)",
  "0px 9px 11px -5px rgba(0, 0, 0, 0.12), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 7px 34px rgba(0, 0, 0, 0.20)",
  "0px 9px 12px -6px rgba(0, 0, 0, 0.12), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 7px 36px rgba(0, 0, 0, 0.20)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.12), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.20)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 8px 40px rgba(0, 0, 0, 0.20)",
  "0px 10px 14px -6px rgba(0, 0, 0, 0.12), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 8px 42px rgba(0, 0, 0, 0.20)",
  "0px 11px 14px -7px rgba(0, 0, 0, 0.12), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 9px 44px rgba(0, 0, 0, 0.20)",
  "0px 11px 15px -7px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.20)",
];

const darkShadows: TShadows = [
  "none",
  "0px 1px 3px rgba(205, 205, 205, 0.12), 0px 1px 1px rgba(205, 205, 205, 0.14), 0px 2px 1px -1px rgba(205, 205, 205, 0.20)",
  "0px 1px 5px rgba(205, 205, 205, 0.12), 0px 2px 2px rgba(205, 205, 205, 0.14), 0px 3px 1px -2px rgba(205, 205, 205, 0.20)",
  "0px 1px 8px rgba(205, 205, 205, 0.12), 0px 3px 4px rgba(205, 205, 205, 0.14), 0px 3px 3px -2px rgba(205, 205, 205, 0.20)",
  "0px 2px 4px -1px rgba(205, 205, 205, 0.12), 0px 4px 5px rgba(205, 205, 205, 0.14), 0px 1px 10px rgba(205, 205, 205, 0.20)",
  "0px 3px 5px -1px rgba(205, 205, 205, 0.12), 0px 5px 8px rgba(205, 205, 205, 0.14), 0px 1px 14px rgba(205, 205, 205, 0.20)",
  "0px 3px 5px -1px rgba(205, 205, 205, 0.12), 0px 6px 10px rgba(205, 205, 205, 0.14), 0px 1px 18px rgba(205, 205, 205, 0.20)",
  "0px 4px 5px -2px rgba(205, 205, 205, 0.12), 0px 7px 10px rgba(205, 205, 205, 0.14), 0px 2px 16px rgba(205, 205, 205, 0.20)",
  "0px 5px 5px -3px rgba(205, 205, 205, 0.12), 0px 8px 10px rgba(205, 205, 205, 0.14), 0px 3px 14px rgba(205, 205, 205, 0.20)",
  "0px 5px 6px -3px rgba(205, 205, 205, 0.12), 0px 9px 12px rgba(205, 205, 205, 0.14), 0px 3px 16px rgba(205, 205, 205, 0.20)",
  "0px 6px 6px -3px rgba(205, 205, 205, 0.12), 0px 10px 14px rgba(205, 205, 205, 0.14), 0px 4px 18px rgba(205, 205, 205, 0.20)",
  "0px 6px 7px -4px rgba(205, 205, 205, 0.12), 0px 11px 15px rgba(205, 205, 205, 0.14), 0px 4px 20px rgba(205, 205, 205, 0.20)",
  "0px 7px 8px -4px rgba(205, 205, 205, 0.12), 0px 12px 17px rgba(205, 205, 205, 0.14), 0px 5px 22px rgba(205, 205, 205, 0.20)",
  "0px 7px 8px -4px rgba(205, 205, 205, 0.12), 0px 13px 19px rgba(205, 205, 205, 0.14), 0px 5px 24px rgba(205, 205, 205, 0.20)",
  "0px 7px 9px -4px rgba(205, 205, 205, 0.12), 0px 14px 21px rgba(205, 205, 205, 0.14), 0px 5px 26px rgba(205, 205, 205, 0.20)",
  "0px 8px 9px -5px rgba(205, 205, 205, 0.12), 0px 15px 22px rgba(205, 205, 205, 0.14), 0px 6px 28px rgba(205, 205, 205, 0.20)",
  "0px 8px 10px -5px rgba(205, 205, 205, 0.12), 0px 16px 24px rgba(205, 205, 205, 0.14), 0px 6px 30px rgba(205, 205, 205, 0.20)",
  "0px 8px 11px -5px rgba(205, 205, 205, 0.12), 0px 17px 26px rgba(205, 205, 205, 0.14), 0px 6px 32px rgba(205, 205, 205, 0.20)",
  "0px 9px 11px -5px rgba(205, 205, 205, 0.12), 0px 18px 28px rgba(205, 205, 205, 0.14), 0px 7px 34px rgba(205, 205, 205, 0.20)",
  "0px 9px 12px -6px rgba(205, 205, 205, 0.12), 0px 19px 29px rgba(205, 205, 205, 0.14), 0px 7px 36px rgba(205, 205, 205, 0.20)",
  "0px 10px 13px -6px rgba(205, 205, 205, 0.12), 0px 20px 31px rgba(205, 205, 205, 0.14), 0px 8px 38px rgba(205, 205, 205, 0.20)",
  "0px 10px 13px -6px rgba(205, 205, 205, 0.12), 0px 21px 33px rgba(205, 205, 205, 0.14), 0px 8px 40px rgba(205, 205, 205, 0.20)",
  "0px 10px 14px -6px rgba(205, 205, 205, 0.12), 0px 22px 35px rgba(205, 205, 205, 0.14), 0px 8px 42px rgba(205, 205, 205, 0.20)",
  "0px 11px 14px -7px rgba(205, 205, 205, 0.12), 0px 23px 36px rgba(205, 205, 205, 0.14), 0px 9px 44px rgba(205, 205, 205, 0.20)",
  "0px 11px 15px -7px rgba(205, 205, 205, 0.12), 0px 24px 38px rgba(205, 205, 205, 0.14), 0px 9px 46px rgba(205, 205, 205, 0.20)",
];
