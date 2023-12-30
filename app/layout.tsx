import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className={'flex items-center justify-center py-5'}>
          Hecho con 💖 por la gente de vercel
        </footer>
      </body>
    </html>
  );
}
