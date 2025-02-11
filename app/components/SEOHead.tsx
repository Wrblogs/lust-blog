import Head from "next/head"
import type React from "react" // Added import for React

interface SEOHeadProps {
  title: string
  description: string
  canonicalUrl: string
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

export default SEOHead

