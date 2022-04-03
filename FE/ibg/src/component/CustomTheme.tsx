//CustomTheme.tsx
import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#67B6FF",
      contrastText: "#FFF",
    },
    error: {
      main: "#FF2E00",
    },
    warning: {
      main: "#FCB500",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      ::-webkit-scrollbar {
        width: 0.6em;
        z-index: 99;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: LightBlue;
      }

      ::-webkit-scrollbar-track {
        margin: $size-regular;
        border-radius: 4px;
        background-color: WhiteSmoke;
      }
      `,
    },
  },
});

export { CustomTheme };
