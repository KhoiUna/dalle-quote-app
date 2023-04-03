import './globals.css'
import Script from "next/script";

export const metadata = {
  title: 'NFC Gift',
  description: 'NFC Gift',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>

      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </html>
  )
}
