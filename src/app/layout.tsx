import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='dark:bg-slate-800 flex flex-col max-h-screen'>
          <Navbar />
          <div className="flex-grow overflow-y-auto text-white/70">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
