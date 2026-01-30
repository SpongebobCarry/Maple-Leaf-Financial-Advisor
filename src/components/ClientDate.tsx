'use client';

import { useState, useEffect } from 'react';

export default function ClientDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return <>{date}</>;
}
