import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme} from "@chakra-ui/react";
import { Button } from "./button";
// theme.js
export const theme = extendTheme({
    colors: {
      brand: {
        100: '#68228b',
      },
      fonts: {
        body: "Open Sans, sans-serif",
      },
      styles: {
        global: () => ({
            body: {
                bg: 'purple.200',
            },
        }),
      },
    },
    components: {
        Button,
    },
  });