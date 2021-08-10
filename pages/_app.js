import { Provider } from "next-auth/client"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../theme"
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
export default MyApp
