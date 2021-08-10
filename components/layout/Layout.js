import React from "react"
import Head from "next/head"

import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { Container } from "@material-ui/core"

// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

const Layout = ({ children, title = "OFU" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container>
        <Header />
        {/* <ToastContainer position="bottom-right" /> */}
        {children}
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
