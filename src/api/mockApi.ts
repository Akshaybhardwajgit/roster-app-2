import type { Provider } from '../types/roster';

// Simulated network latency
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mockData: Provider[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `p${i}`,
  name: `Provider ${i + 1}`,
  avatar: 'https://i.pravatar.cc/96?img=' + ((i % 70) + 1),
  services: ['Physio', 'Counselling'][i % 2 ? 0 : 1],
  type: ['Full‑time', 'Part‑time'][i % 2],
  centre: ['Delhi', 'Mumbai', 'Remote'][i % 3],
  slots: [
    { time: '08:00', status: 'online' },
    { time: '09:00', status: 'available' },
    { time: '10:00', status: 'online' },
    { time: '11:00', status: 'mix' },
    { time: '12:00', status: 'available' },
    { time: '13:00', status: 'offline' },
    { time: '14:00', status: 'offline' },
    { time: '15:00', status: 'offline' },
  ]
}));

export async function fetchProviders(): Promise<Provider[]> {
  await delay(400);
  return mockData;
}
