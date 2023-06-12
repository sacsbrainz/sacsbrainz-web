import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "@/components/header/ThemeProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={session}>
        <RecoilRoot>
          <NextNProgress options={{ showSpinner: false }} />
          <Component {...pageProps} />
          <Analytics />
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
