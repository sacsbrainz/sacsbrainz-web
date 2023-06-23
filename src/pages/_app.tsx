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
import Link from "next/link";

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
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="fixed bottom-[10%] right-[6%] flex"
            href="https://api.whatsapp.com/send/?phone=2348028573902&text=from+your+websit+sacsbrainz.com&app_absent=0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-10 w-10 fill-green-500"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </Link>
          <Analytics />
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
