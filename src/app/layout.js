import './globals.css';

export const metadata = {
  title: 'Almukai MVP',
  description: 'AI + Human Mentorship Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
