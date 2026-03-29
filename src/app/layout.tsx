import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charlotte New Construction Guide | Home Grown Property Group',
  description: 'Your complete guide to buying new construction homes in Charlotte, South Charlotte, Fort Mill, Indian Land, and Waxhaw. Interactive builder comparisons, neighborhood guides, buyer quiz, and savings calculator.',
  keywords: 'new construction homes Charlotte, South Charlotte new builds, Fort Mill builders, Indian Land new construction, Waxhaw neighborhoods, Home Grown Property Group',
  openGraph: {
    title: 'Charlotte New Construction Guide | Home Grown Property Group',
    description: 'Your complete guide to buying new construction homes in the Charlotte metro area.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
