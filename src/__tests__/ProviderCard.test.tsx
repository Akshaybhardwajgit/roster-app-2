import { render, screen } from '@testing-library/react';
import ProviderCard from '../components/ProviderCard';

test('renders provider name', () => {
  render(<ProviderCard name="Dr. Test" avatar="" slots={[]} onViewCalendar={() => {}} />);
  expect(screen.getByText(/Dr. Test/i)).toBeInTheDocument();
});
