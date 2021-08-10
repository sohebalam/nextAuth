import { Provider } from "next-auth/client"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../theme"
import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}
export default MyApp
