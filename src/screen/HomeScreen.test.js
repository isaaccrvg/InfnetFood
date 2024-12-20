import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screen/HomeScreen';
import ProductsScreen from '../src/screen/ProductsScreen';

const Stack = createStackNavigator();

function MockedNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

test('navigates from HomeScreen to ProductsScreen', () => {
  const { getByText } = render(<MockedNavigator />);

  fireEvent.press(getByText('Go to Products'));

  expect(getByText('Products Screen')).toBeTruthy();
});