import dynamic from 'next/dynamic';
import React from 'react';

const FullCalendar = dynamic(() => import('../components/FullCalendar'), {
  ssr: false
});

export default function Home() {
  return (
    <div style={{
      minWidth: '100%', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
    }}>
      <h1>Test Full Calendar</h1>
      <FullCalendar />
    </div>
  )
}
