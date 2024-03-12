import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import { Provider } from "@/utils/lib/provider";
import BaseLayout from "@/components/common/baseLayout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <NextSeo title="Spotify" />
      <Provider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </div>
  );
}
