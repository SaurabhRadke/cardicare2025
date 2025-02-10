import "./globals.css";

import { Jost } from 'next/font/google';
import SupabaseAuthProvider from "./store/SupabaseContext";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const jost = Jost({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: "CardiCare Heart Clinic",
  description: "Comprehensive cardiovascular care with advanced treatments and personalized care plans.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script id="google-tag-manager" strategy="afterInteractive">
          {
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWTQ48H3')`
          }
        </Script>
      </head>
      <SupabaseAuthProvider>
      <body className={jost.className}>
      <noscript dangerouslySetInnerHTML={{
          __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWTQ48H3"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
          <Analytics/>
        
        {children}
        
      </body>
      </SupabaseAuthProvider>
    </html>
  );
}
