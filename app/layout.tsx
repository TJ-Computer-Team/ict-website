"use client";
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center py-8 md:py-4">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <img src="/temp_logo.png" alt="ICT Logo" className="h-8 w-8 mr-2" />
                TJ ICT
              </Link>
              <div className="relative md:hidden">
                <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex flex-col space-y-1">
                    <div className="h-1 w-8 bg-white"></div>
                    <div className="h-1 w-8 bg-white"></div>
                    <div className="h-1 w-8 bg-white"></div>
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 bg-opacity-75 rounded-md shadow-lg z-50">
                    <ul className="flex flex-col">
                      <li><Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link></li>
                      <li><Link href="/resources" className="block px-4 py-2 text-white hover:bg-gray-700">Resources</Link></li>
                      <li><Link href="/calendar" className="block px-4 py-2 text-white hover:bg-gray-700">Calendar</Link></li>
                      <li><a href="https://www.tjctgrader.org" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:bg-gray-700">Grader</a></li>
                      <li><a href="https://www.facebook.com/groups/tjhsstict" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:bg-gray-700">Facebook</a></li>
                      <li><a href="https://discord.gg/TFrM4YEsb4" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:bg-gray-700">Discord</a></li>
                      <li><a href="https://drive.google.com/drive/folders/11DWMeYSvpP131RMc1kdytq2ofvkGiXhw" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:bg-gray-700">24-25 Drive</a></li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                <Link href="/resources" className="hover:text-gray-300 transition-colors">Resources</Link>
                <Link href="/calendar" className="hover:text-gray-300 transition-colors">Calendar</Link>
                <a href="https://www.tjctgrader.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Grader</a>
                <a href="https://www.facebook.com/groups/tjhsstict" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Facebook</a>
                <a href="https://discord.gg/TFrM4YEsb4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Discord</a>
                <a href="https://drive.google.com/drive/folders/11DWMeYSvpP131RMc1kdytq2ofvkGiXhw" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">24-25 Drive</a>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-black text-white text-center py-8">
            <div className="container mx-auto px-4">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-4">Email tjhsstictcaptains@gmail.com or talk to an officer (in person or through Facebook)</p>
              <p className="text-sm">
                The GitHub repository for this project can be found <a href="https://github.com/TJ-Computer-Team/ict-website" target="_blank" rel="noopener noreferrer" className="underline">here</a>, feel free to create pull requests.
              </p>
              <p className="text-sm mt-2">
                Website made by <a href="https://github.com/ssbdragonfly" target="_blank" rel="noopener noreferrer" className="underline">Shaurya Bisht (&apos;27)</a> and <a href="https://github.com/Gabriel-Xu" target="_blank" rel="noopener noreferrer" className="underline">Gabriel Xu (&apos;25)</a>.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
