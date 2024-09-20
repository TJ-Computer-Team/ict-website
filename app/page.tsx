import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, LightbulbIcon } from 'lucide-react'
import './globals.css'

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://cdn.discordapp.com/attachments/1055908367576608801/1286316837260496937/image.png?ex=66ed7768&is=66ec25e8&hm=dc082e034b87f401cb40218b1da3acd6a01c04a525074413a17049c6d8963831&"
          alt="Group of people"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 text-white text-center px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">TJ Intermediate Computer Team</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">When</h3>
                <p>Friday B block (8th period)</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-8 h-8 mr-3" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">Where</h3>
                <p>Check Ion for location</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LightbulbIcon className="w-8 h-8 mr-3" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">Why</h3>
                <p>Learn, compete, and enjoy</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.tjctgrader.org" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
              In-house contests
            </a>
            <a href="https://www.facebook.com/groups/tjhsstict" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors">
              Stay Updated
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">About ICT</h2>
            <p className="text-gray-700 mb-6">
              ICT is a cool club geared towards competitive programming. During eighth periods we have lectures, activities, and contests, such as ACSL. 
              Attend to hone your skills (for both beginner and experienced programmers) and meet a community of like-minded people. 
              Do contests such as <a href="https://codeforces.com/group/M4wsRWBHyZ/contests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codeforces</a> and <a href="https://usaco.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USACO</a>, and get better by looking at the <Link href="/resources" className="text-blue-600 hover:underline">resources</Link> section, which includes eighth period materials.
            </p>
            <a href="https://docs.google.com/spreadsheets/d/1H4DdJTlFXAZqA6W1yegPFmOJGctda-t4ZL-_mmLoxgY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Eighth period schedule (2024-2025)
            </a>
          </div>
          <div className="relative h-80 md:h-96">
            <Image 
              src="https://cdn.discordapp.com/attachments/1055908367576608801/1286320503400697999/pic01.jpg?ex=66ed7ad2&is=66ec2952&hm=9b4f746992c6165e040caf1ddc8d6991273cb39af349cad3a80cd1338325bdd9&" 
              alt="ICT in action" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Travel Competitions</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image 
                src="https://cdn.discordapp.com/attachments/1055908367576608801/1286321181921771520/image003.jpg?ex=66ed7b74&is=66ec29f4&hm=1cc7f260a969debd788f1b710ef98f3a66f617ebf7af03d1037b0ff12176275b&" 
                alt="Travel competitions" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We have in-house competitions hosted on the grader during eighth periods, which combined with other heuristics, decides who goes to travel competitions. 
                In-houses will hopefully provide good practice and possible rewards (cookies). 
                Travel competitions are a great experience and we try to send as many people as possible. Make sure to check Facebook and your email to receive 
                important information regarding contests.
              </p>
              <a href="https://docs.google.com/document/d/14CBtom9g0AKZkmncUQQJwV-dIwG54Arr26FnWfUcdvI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                More about in-houses!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">American Computer Science League FAQ&apos;s</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">What?</h3>
            <p className="text-gray-700">
              The American Computer Science League is a four part competition. 
              Competitions are held at TJHSST Computer Team over a period of months. 
              There are a total of 40 possible points. 5 points are awarded for a paper test section. 
              5 points are awarded for a computer program section. 
              These contests serve as qualifiers for the Finals contest with prizes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">When?</h3>
            <p className="text-gray-700">
              ICT holds ACSL contests on Friday B Blocks during 8th periods. For more information, visit the ACSL website at 
              <a href="https://www.acsl.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">acsl.org</a>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Where?</h3>
            <p className="text-gray-700">
              During normal meetings we meet in Curie Commons. Competitions will usually be held in Ms.Kim&apos;s and Mr.Rose&apos;s rooms.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Preparation?</h3>
            <p className="text-gray-700">
              We strongly recommend that you attend our weekly computer team 8th periods for informative lectures and activities. The 
              officers put a lot of time into lecture problems and materials, and seeing you there makes their job all the more worth it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}