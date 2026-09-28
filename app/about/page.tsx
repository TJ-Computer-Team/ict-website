export default function ClubHistory() {
  const pastOfficers = [
    { year: "2025-2026", officers: [
        { role: "Captain", name: "Abhiraj Mallangi" },
        { role: "Co-captain", name: "Shaurya Bisht" },
        { role: "Co-captain", name: "Victor Cao" },
        { role: "Webmaster", name: "Samuel Chow" },
        { role: "Webmaster", name: "Samuel Zhang" },
        { role: "Finance", name: "Michelle Lin" },
        { role: "Finance", name: "Lulu Huang" },
        { role: "Sponsor", name: "Ms. Kim" },
        { role: "Sponsor", name: "Mr. Rose" },
    ]},
    { year: "2024–2025", officers: [
        { role: "Captain", name: "Olivia Wu" },
        { role: "Co-captain", name: "Clinton Morimoto" },
        { role: "Co-captain", name: "Daniel Feng" },
        { role: "Finance", name: "Lulu Huang" },
        { role: "Webmaster", name: "Peter Kisselev" },
        { role: "Webmaster", name: "Andrew Chen" },
        { role: "Sponsor", name: "Ms. Kim" },
        { role: "Sponsor", name: "Mr. Rose" },
    ]},
    { year: "2023–2024", officers: [
        { role: "Captain", name: "Samarth Bhargav" },
        { role: "Co-captain", name: "Avnith Vijayram" },
        { role: "Co-captain", name: "Marina Lin" },
        { role: "Webmaster", name: "Gabriel Xu" },
        { role: "Finance", name: "Avni Garg" },
        { role: "Secretary", name: "Lalit Boyapati" },
        { role: "Sponsor", name: "Ms. Kim" },
        { role: "Sponsor", name: "Mr. Rose" },
    ]}
  ];

  const currentOfficers = [
    { role: "Captain", name: "Zain Marshall" },
    { role: "Co-captain", name: "Samuel Zhang" },
    { role: "Co-captain", name: "Alexander Liu" },
    { role: "Webmaster", name: "Samuel Chow" },
    { role: "Secretary", name: "Jason Zhang" },
    { role: "Finance", name: "Charlie Wang" },
    { role: "Finance", name: "Anish Thota" },
    { role: "Sponsor", name: "Mr. O'Neill" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-10 text-center mt-12">Club History</h1>

      {/* Current Officers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Current Officers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
          {currentOfficers.map((officer, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gray-800 p-4 shadow-md"
            >
              <p className="text-sm text-gray-400">{officer.role}</p>
              <p className="text-lg font-medium">{officer.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Officers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Officers</h2>
        <div className="space-y-4 text-white">
          {pastOfficers.map((yearGroup, idx) => (
            <details
              key={idx}
              className="rounded-2xl bg-gray-800 p-4 shadow-md"
            >
              <summary className="cursor-pointer text-lg font-medium list-none flex justify-between items-center">
                <span>{yearGroup.year}</span>
                <span className="text-gray-400">▼</span>
              </summary>
              <ul className="mt-4 space-y-2">
                {yearGroup.officers.map((officer, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="text-gray-400">{officer.role}</span>
                    <span>{officer.name}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
