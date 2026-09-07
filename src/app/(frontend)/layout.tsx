import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A simple blog powered by Next.js and Payload CMS.',
  title: 'Field Notes',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
