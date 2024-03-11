import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <NextSeo title="Spotify" />
      <Component {...pageProps} />
    </div>
  );
}
