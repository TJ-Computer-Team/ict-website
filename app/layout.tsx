import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TJ Intermediate Computer Team',
  description: 'The (un)official website of Thomas Jefferson High School for Science and Technology&apos;s Intermediate Computer Team',
  icons: {
    icon: 'https://cdn.discordapp.com/attachments/1055908367576608801/1286525027591782431/file.png?ex=66ee394d&is=66ece7cd&hm=3dc144f3949bb8321fa363db7eb1907519e52d1f7fdea047b123944f926ee100&',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <nav className="flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold flex items-center">
                  <img src="https://cdn.discordapp.com/attachments/1055908367576608801/1286525027591782431/file.png?ex=66ee394d&is=66ece7cd&hm=3dc144f3949bb8321fa363db7eb1907519e52d1f7fdea047b123944f926ee100&" alt="ICT Logo" className="h-8 w-8 mr-2" />
                  TJ ICT
                </Link>
                <ul className="flex space-x-6">
                  <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                  <li><Link href="/resources" className="hover:text-gray-300 transition-colors">Resources</Link></li>
                  <li><a href="https://www.tjctgrader.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Grader</a></li>
                  <li><a href="https://www.facebook.com/groups/tjhsstict" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Facebook</a></li>
                  <li><a href="https://discord.gg/TFrM4YEsb4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Discord</a></li>
                  <li><a href="https://drive.google.com/drive/folders/11DWMeYSvpP131RMc1kdytq2ofvkGiXhw" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">24-25 Drive</a></li>
                </ul>
              </nav>
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
                The GitHub repository for this project can be found <a href="https://github.com/ssbdragonfly/ict" target="_blank" rel="noopener noreferrer" className="underline">here</a>, feel free to create pull requests
              </p>
              <p className="text-sm mt-2">
                Website made by: <a href="https://github.com/ssbdragonfly" target="_blank" rel="noopener noreferrer" className="underline">Shaurya Bisht (&apos;27)</a>, forked and altered based on <a href="https://github.com/Gabriel-Xu" target="_blank" rel="noopener noreferrer" className="underline">Gabriel Xu (&apos;25)</a>&apos;s website.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}