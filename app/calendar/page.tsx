export default function CalendarPage() {
    const calendarUrl = "https://calendar.google.com/calendar/embed?src=49ba045dfedf495b29eb0829da786020559763d5bdea2508edb369a08e79d178%40group.calendar.google.com&ctz=America%2FNew_York"
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mt-12">ICT Calendar</h1>
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <iframe
            src={calendarUrl}
            style={{ border: 0, width: '100%', height: '600px' }}
            frameBorder="0"
            scrolling="no"
            title="ICT Google Calendar"
          ></iframe>
        </div>
      </div>
    )
  }
