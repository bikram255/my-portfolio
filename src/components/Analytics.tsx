'use client';

import Script from 'next/script';

export default function Analytics() {
    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-RZJZMEEX7R`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RZJZMEEX7R');
        `}
            </Script>
        </>
    );
}
