export default function CalendarPage() {
    const calendarUrl = "https://calendar.google.com/calendar/embed?src=6c59d85691ee9f9cf8ab0bf6a866193ab5e0efe3d396edc0b3ac23e9f932d8f8%40group.calendar.google.com&ctz=America%2FNew_York"
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">ICT Calendar</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <iframe
            src={calendarUrl}
            style={{border: 0}}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="ICT Google Calendar"
          ></iframe>
        </div>
      </div>
    )
  }