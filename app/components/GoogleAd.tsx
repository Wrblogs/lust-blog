import type React from "react"
import Script from "next/script"

interface GoogleAdProps {
  adSlot: string
}

const GoogleAd: React.FC<GoogleAdProps> = ({ adSlot }) => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`google-ad-${adSlot}`}>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}

export default GoogleAd

