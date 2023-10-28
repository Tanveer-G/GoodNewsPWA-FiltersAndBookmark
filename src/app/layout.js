import { Analytics } from '@vercel/analytics/react'
import { NewsAppProvider } from '@/context/NewsAppContext'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Good News PWA: Filters And Bookmark -Tanveer',
  description:
    'A feature-rich news web app designed & developed by me to showcase my skills. It provides various filtering options, bookmarking and infinite scrolling feature.',
  themeColor: '#020024',
  openGraph: {
    title: 'Good News PWA: Filters And Bookmark -Tanveer',
    description:
      'A feature-rich news web app designed & developed by me to showcase my skills. It provides various filtering options, bookmarking and infinite scrolling feature.  ',
    url: 'https://tanveer-goodnews.vercel.app',
    siteName: 'Tanveer Good News',
    images: [
      {
        url: '../../public/opengraph-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  keywords: ['Good News', 'Tanveer', 'Frontend Developer', 'Remote Engineer', 'PWA', 'Bookmark', 'Filter', 'News Web App'],
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} container mx-auto`}>
        <NewsAppProvider key={'News_APP_Provider'}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </NewsAppProvider>
      </body>
    </html>
  )
}
