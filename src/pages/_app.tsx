import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { RecoilRoot } from "recoil";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
