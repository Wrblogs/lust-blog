import type React from "react"
import Header from "./Header"
import Footer from "./Footer"
import GoogleAd from "./GoogleAd"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <GoogleAd adSlot="1234567890" />
          {children}
          <GoogleAd adSlot="0987654321" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout

