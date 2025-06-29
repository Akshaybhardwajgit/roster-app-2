import React, { memo } from 'react';
import { Slot } from '../types/roster';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  avatar: string;
  slots: Slot[];
  onViewCalendar: () => void;
}

const colorMap: Record<Slot['status'], string> = {
  online: 'bg-slot-online text-white',
  offline: 'bg-slot-offline text-white',
  mix: 'bg-slot-mix text-white',
  blocked: 'bg-slot-blocked text-white',
  available: 'bg-slot-available text-gray-800'
};

const ProviderCard: React.FC<Props> = ({ name, avatar, slots, onViewCalendar }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 w-full overflow-x-auto">
      <img src={avatar} className="w-12 h-12 rounded-full shrink-0" alt={name} />
      <div className="flex flex-col gap-1">
        <button
          onClick={onViewCalendar}
          className="text-primary-600 font-semibold text-left hover:underline"
        >
          {name}
        </button>
        <div className="flex gap-2">
          {slots.map(s => (
            <span
              key={s.time}
              className={clsx(
                'text-xs px-2 py-1 rounded-md whitespace-nowrap',
                colorMap[s.status]
              )}
            >
              {s.time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProviderCard);
