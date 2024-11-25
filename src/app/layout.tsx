'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider, useApp } from '@/contexts/AppContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { darkMode } = useApp()

  return (
    <html lang="ko" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </AppProvider>
  )
}