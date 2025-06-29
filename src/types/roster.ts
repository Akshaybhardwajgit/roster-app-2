export type SlotStatus = 'online' | 'offline' | 'mix' | 'blocked' | 'available';

export interface Slot {
  time: string;        // e.g. "08:00"
  status: SlotStatus;
}

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  services: string[];
  type: string;
  centre: string;
  slots: Slot[];
}
