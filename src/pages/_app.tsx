import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "@/components/header/ThemeProvider";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={session}>
        <RecoilRoot>
          <NextNProgress options={{ showSpinner: false }} />
          <Head>
            <title>Sacsbrainz</title>
            <meta name="description" content="Life isn't hard" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="preload"
              href="/tree-sitter.wasm"
              type="application/wasm"
              as="fetch"
            />
            <link
              rel="preload"
              href="/tree-sitter-bash.wasm"
              type="application/wasm"
              as="fetch"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <Analytics />
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
