import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mockRestaurantData = {
  name: 'Restaurante Exemplo',
  address: 'Rua Exemplo, 123, Centro, Rio de Janeiro, RJ',
  menuItem: 'Feijoada Completa',
};

function RestaurantDetailsScreen({ route }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.value}>{restaurant.address}</Text>
      <Text style={styles.label}>Item do Cardápio:</Text>
      <Text style={styles.value}>{restaurant.menuItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default RestaurantDetailsScreen;