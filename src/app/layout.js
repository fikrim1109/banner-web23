
export const metadata = {
  title: 'Fikri Natadiwirya Maulana',
  description: 'Made for PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}