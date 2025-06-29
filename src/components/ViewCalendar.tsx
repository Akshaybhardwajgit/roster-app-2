import React from 'react';
import { useParams } from 'react-router-dom';

export default function ViewCalendar() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Detailed calendar for Provider ID: {id}</h1>
      <p className="text-gray-500">Coming soon…</p>
    </div>
  );
}
