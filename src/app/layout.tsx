import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EV Fast',
  description:
    `Nepal's leading EV fast charging solutions provider. We deliver complete charging ecosystems — from residential setups to large-scale commercial networks powered by cutting-edge technology and sustainable energy.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}