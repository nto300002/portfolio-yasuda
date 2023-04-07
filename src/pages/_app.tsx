import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}/login`;
  return (
      <Component {...pageProps} />
  )
}
