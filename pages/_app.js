
import '../styles/globals.scss'
import AuthState from "../context/authState";
import React from "react";


function MyApp({ Component, pageProps }) {

  return (
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
  )
}

export default MyApp
