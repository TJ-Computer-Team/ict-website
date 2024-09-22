export default function Resources() {
  const resources = [
    {
      title: "Places to do Competitive Programming",
      items: [
        { name: "USACO", link: "http://www.usaco.org/" },
        { name: "Codeforces", link: "https://codeforces.com/" },
        { name: "AtCoder", link: "https://atcoder.jp/" },
        { name: "HackerRank", link: "https://www.hackerrank.com/" },
        { name: "LeetCode", link: "https://leetcode.com/" },
      ]
    },
    {
      title: "Resources to Learn",
      items: [
        { name: "CP-Algorithms", link: "https://cp-algorithms.com/" },
        { name: "USACO Guide", link: "https://usaco.guide/" },
        { name: "Competitive Programmer's Handbook", link: "https://cses.fi/book/book.pdf" },
        { name: "Algorithms for Competitive Programming", link: "https://cp-algorithms.com/" },
      ]
    },
    {
      title: "Practice Problems",
      items: [
        { name: "CSES Problem Set", link: "https://cses.fi/problemset/" },
        { name: "Project Euler", link: "https://projecteuler.net/" },
        { name: "Kattis", link: "https://open.kattis.com/" },
        { name: "UVa Online Judge", link: "https://onlinejudge.org/" },
      ]
    },
    {
      title: "Other ICT Materials",
      items: [
        { name: "ICT Grader", link: "https://www.tjctgrader.org/" },
        { name: "2024 - 2025", link: "https://drive.google.com/drive/folders/11DWMeYSvpP131RMc1kdytq2ofvkGiXhw" }, 
        { name: "2023 - 2024", link: "https://drive.google.com/drive/folders/1aNbcjefGf8lncTSTRWeu356v25fkbgg_" }, 
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mt-12">Resources</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {resources.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recommended Books</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Introduction to Algorithms by Thomas H. Cormen
              </a>
            </li>
            <li>
              <a 
                href="https://www.amazon.com/Competitive-Programming-3rd-Steven-Halim/dp/B00FG8MNN8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Competitive Programming 3 by Steven Halim
              </a>
            </li>
            <li>
              <a 
                href="https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Programming Challenges by Steven S. Skiena
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
          <p className="mb-4">
            For more resources and information, come to the club on Friday B blocks!
          </p>
          <p className="mb-4">
            Feel free to email us, join our discord server, join our facebook, or ask any members or officers about the club!
          </p>
          <p>
            If you have any questions or need help, don&apos;t hesitate to reach out to the ICT officers or join our
            <a 
              href="https://discord.gg/TFrM4YEsb4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Discord server
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}