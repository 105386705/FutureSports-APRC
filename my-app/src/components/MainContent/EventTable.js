import React from 'react';

const eventsData = [
  { eventName: "Fundraiser", dayTime: "Mon – All Day", date: "24/02/2024" },
  { eventName: "Marathon", dayTime: "Sun – 8am", date: "03/03/2024" },
  { eventName: "Yoga", dayTime: "Mon – 7am", date: "Every Sun" },
  { eventName: "Park Run", dayTime: "Sat – 8am", date: "Every Sat" },
];

const EventTable = () => (
  <div className="events">
    <h2>Upcoming Events</h2>
    <div className="events-table">
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Day/Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map((event, index) => (
            <tr key={index}>
              <td>{event.eventName} <span className="event-icon">⚫</span></td>
              <td>{event.dayTime}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EventTable;
