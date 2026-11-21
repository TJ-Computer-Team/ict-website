export default function CalendarPage() {
  const sheetUrl = "https://docs.google.com/spreadsheets/d/1GL2fZ6qWSQG2sDjZ4e8Vx4DLgfteXfYDjHn5klCoVYQ/edit";

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center mt-12">Computer Team Calendar</h1>
      <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
        <iframe
          src={sheetUrl}
          style={{ border: 0, width: '100%', height: '600px' }}
          frameBorder="0"
          scrolling="yes"
          title="Team Google Sheets Calendar"
        ></iframe>
      </div>
    </div>
  );
}
