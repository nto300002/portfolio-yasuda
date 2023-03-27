import Head from 'next/head'
import { ReactElement } from 'react'
import Footer from './Footer' 
import Header from './Header'

type LayoutProps = Required<{
  readonly children: ReactElement
  title?: string
}>

export const Layout = ({ children, title }: LayoutProps) => (
  <>
    <Head>
      <title>{title ? `${title} | My Portfolio` : 'My Portfolio'}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)
