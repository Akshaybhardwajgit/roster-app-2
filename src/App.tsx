import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter, Routes, Route } from 'react-router-dom';

const ProvidersCalendar = lazy(() => import('./components/ProvidersCalendar'));
const ViewCalendar = lazy(() => import('./components/ViewCalendar'));

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <Routes>
            <Route path="/" element={<ProvidersCalendar />} />
            <Route path="/calendar/:id" element={<ViewCalendar />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
}
