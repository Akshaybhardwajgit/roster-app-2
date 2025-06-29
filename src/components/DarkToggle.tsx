import React, { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="p-2 border rounded text-sm"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
