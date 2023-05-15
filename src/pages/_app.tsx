import { AuthenticationContext } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <Component {...pageProps} />
      </div>
    // </AuthenticationContext.Provider>
  );
}
