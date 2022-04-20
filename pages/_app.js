import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        // brand colors
        primary: '#7928ca',

        link: '#F74C77',
        
      },
      space: {},
      fonts: {
        sans: "Lato"
      }
    }
  })


  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
