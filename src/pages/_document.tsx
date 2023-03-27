import Footer from '@/pages/components/Footer'
import Header from '@/pages/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
          <br />
          <Main />
          <NextScript />
        <Footer />
      </body>
      
    </Html>
  )
}
