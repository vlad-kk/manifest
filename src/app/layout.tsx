import './globals.css';
import React from 'react';
import { Header } from '@/shared/Header/Header';
import { Footer } from '@/shared/Footer/Footer';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            backgroundImage: `url('/background.svg'), linear-gradient(to right, #E6EDFD, #E3FFFE)`,
            backgroundRepeat: 'repeat, no-repeat',
            backgroundPosition: 'center, center'
          }}
          className="relative w-full h-screen flex gap-16 justify-center overflow-hidden"
        >
          <div className="relative z-10 flex flex-col gap-6 items-center w-full max-w-[1200px] mt-[50px] md:mt-[118px]">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
