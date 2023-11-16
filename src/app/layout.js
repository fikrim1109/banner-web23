import Navbar from "@app/components/navbar/navbar";
import "@/styles/global.css"
import "@app/components/navbar/navbar.css"
import "@app/diary/diary.css"


export const metadata = {
  title: 'Name Card',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar>

      </Navbar>
      {children}
      </body>
    </html>
  )
}