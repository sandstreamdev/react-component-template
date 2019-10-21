import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ComponentTemplate from '../ComponentTemplate';

afterEach(cleanup);

test('list rendering with items', () => {
  const { getByText } = render(<ComponentTemplate />);

  expect(getByText('Component Template Content')).toBeInTheDocument();
});
