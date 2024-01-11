
import BootstrapClient from './com/boot'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body >
        {children}
        <BootstrapClient/>
        </body>
    </html>
  )
}
