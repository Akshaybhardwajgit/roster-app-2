import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProviders, setFilters } from '../store/providersSlice';
import type { RootState, AppDispatch } from '../store';
import ProviderCard from './ProviderCard';
import { Provider } from '../types/roster';

const Services = ['', 'Physio', 'Counselling'];
const Types = ['', 'Full‑time', 'Part‑time'];
const Centres = ['', 'Delhi', 'Mumbai', 'Remote'];

const ProvidersCalendar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, filters, loading } = useSelector((s: RootState) => s.providers);

  useEffect(() => {
    dispatch(loadProviders());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  const filterList = (prov: Provider) => {
    const { service, type, centre, search } = filters;
    return (
      (!service || prov.services.includes(service)) &&
      (!type || prov.type === type) &&
      (!centre || prov.centre === centre) &&
      (!search || prov.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const visible = list.filter(filterList).slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Provider Calendar</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4">
        <select name="service" value={filters.service} onChange={handleChange} className="p-2 border rounded">
          {Services.map(v => (
            <option key={v} value={v}>{v || 'All services'}</option>
          ))}
        </select>
        <select name="type" value={filters.type} onChange={handleChange} className="p-2 border rounded">
          {Types.map(v => (
            <option key={v} value={v}>{v || 'All types'}</option>
          ))}
        </select>
        <select name="centre" value={filters.centre} onChange={handleChange} className="p-2 border rounded">
          {Centres.map(v => (
            <option key={v} value={v}>{v || 'All centres'}</option>
          ))}
        </select>
        <input
          name="search"
          placeholder="Search provider"
          value={filters.search}
          onChange={e => dispatch(setFilters({ search: e.target.value }))}
          className="p-2 border rounded"
        />
      </div>

      {/* Providers list */}
      {loading ? (
        <p className="animate-pulse text-gray-500">Loading…</p>
      ) : (
        <div className="flex flex-col gap-4">
          {visible.map(p => (
            <ProviderCard
              key={p.id}
              name={p.name}
              avatar={p.avatar}
              slots={p.slots}
              onViewCalendar={() => alert('Open detailed calendar for ' + p.name)}
            />
          ))}
          {visible.length === 0 && <p>No providers match the filters.</p>}
        </div>
      )}
    </div>
  );
};

export default ProvidersCalendar;
