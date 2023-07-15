import Header from '@/components/common/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import StoreProvider from '@/config/StoreProvider'
import { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TruongDX Portfolio',
  description: 'This is TruongDx Portfolio',
}

export default function RootLayout({
  children, pageProps
}: {
  children: React.ReactNode,
  pageProps : AppProps["pageProps"]
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider {...pageProps?.initialZustandState}>
          <div>
            <Header />
          </div>
          <div className="px-[120px]">{children}</div>
        </StoreProvider>
      </body>
    </html>
  )
}
