import React from 'react';
import { render } from '@testing-library/react-native';
import CategoriesScreen from '../src/screen/CategoriesScreen';

const mockCategories = [
  { id: '1', title: 'Lanches' },
  { id: '2', title: 'Bebidas' },
  { id: '3', title: 'Sobremesas' },
];

jest.mock('../src/screen/CategoriesScreen', () => (props) => (
  <CategoriesScreen {...props} categories={mockCategories} />
));

test('renders categories list correctly', () => {
  const { getByText } = render(<CategoriesScreen />);

  mockCategories.forEach((category) => {
    expect(getByText(category.title)).toBeTruthy();
  });
});