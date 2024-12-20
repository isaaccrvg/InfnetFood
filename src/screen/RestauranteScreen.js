import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockRestaurants = [
  { id: '1', name: 'Confeitaria Colombo', address: 'Rua Gonçalves Dias, 32', menuItem: 'Café Colonial' },
  { id: '2', name: 'Restaurante Aprazível', address: 'Rua Aprazível, 62', menuItem: 'Feijoada' },
  { id: '3', name: 'Café Lamas', address: 'Rua Marquês de Abrantes, 18', menuItem: 'Filé à Oswaldo Aranha' },
  { id: '4', name: 'Bar Urca', address: 'Rua Cândido Gaffrée, 205', menuItem: 'Pastel de Camarão' },
  { id: '5', name: 'Marius Degustare', address: 'Av. Atlântica, 290', menuItem: 'Rodízio de Frutos do Mar' },
  { id: '6', name: 'Oro', address: 'Rua General San Martin, 889', menuItem: 'Menu Degustação' },
  { id: '7', name: 'Aconchego Carioca', address: 'Rua Barão de Iguatemi, 379', menuItem: 'Bolinho de Feijoada' },
  { id: '8', name: 'Fogo de Chão', address: 'Av. Repórter Nestor Moreira, s/n', menuItem: 'Rodízio de Carnes' },
  { id: '9', name: 'Churrascaria Palace', address: 'Rua Rodolfo Dantas, 16', menuItem: 'Picanha' },
  { id: '10', name: 'Zazá Bistrô', address: 'Rua Joana Angélica, 40', menuItem: 'Moqueca de Peixe' },
];

function RestauranteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
  },
  address: {
    fontSize: 16,
  },
});

export default RestauranteScreen;