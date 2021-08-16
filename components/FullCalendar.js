import Calendar from '@fullcalendar/react';
import dayGridPlugins from '@fullcalendar/daygrid';
import React from 'react';

export default function FullCalendar(props) {
  return (
    <>
      <Calendar {...props} plugins={[dayGridPlugins]} initialView="dayGridMonth" />
    </>
  );
}