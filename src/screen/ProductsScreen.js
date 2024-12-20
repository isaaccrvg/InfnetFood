import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const products = {
  '1': [
    { id: '1', name: 'Hambúrguer', price: 10.0, location: { latitude: -22.913721410101182, longitude: -43.166882877068204 } },
    { id: '2', name: 'Batata Frita', price: 5.0, location: { latitude: -22.913721410101182, longitude: -43.166882877068204 } },
  ],
  '2': [
    { id: '3', name: 'Coca-Cola', price: 3.0, location: { latitude: -22.962011, longitude: -43.207581 } },
    { id: '4', name: 'Suco de Laranja', price: 4.0, location: { latitude: -22.962011, longitude: -43.207581 } },
  ],
  '3': [
    { id: '5', name: 'Sorvete', price: 7.0, location: { latitude: -22.901005, longitude: -43.181992 } },
    { id: '6', name: 'Bolo de Chocolate', price: 8.0, location: { latitude: -22.901005, longitude: -43.181992 } },
  ],
  '4': [
    { id: '7', name: 'Sushi', price: 15.0, location: { latitude: -22.90307681700889, longitude: -43.17707960405509 } },
    { id: '8', name: 'Temaki', price: 12.0, location: { latitude: -22.90307681700889, longitude: -43.17707960405509 } },
  ],
  '5': [
    { id: '9', name: 'Feijoada', price: 20.0, location: { latitude: -22.915031, longitude: -43.179134 } },
    { id: '10', name: 'Churrasco', price: 25.0, location: { latitude: -22.915031, longitude: -43.179134 } },
  ],
};

function ProductsScreen({ route, navigation }) {
  const { categoryId, categoryTitle } = route.params || {};
  const categoryProducts = products[categoryId] || [];
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity + 1 };
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        if (updatedItems[itemIndex].quantity > 1) {
          updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity - 1 };
        } else {
          updatedItems.splice(itemIndex, 1);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <FlatList
        data={categoryProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => setSelectedItem(item)}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Preço: R$ {item.price.toFixed(2)}</Text>
              <View style={styles.buttonContainer}>
                <Button title="+" color="#4CAF50" onPress={() => addToCart(item)} />
                <Text style={styles.quantity}>{quantity > 0 ? `Adicionado: ${quantity}` : ''}</Text>
                <Button title="-" color="#F44336" onPress={() => removeFromCart(item)} />
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                  <Icon name="trash-outline" size={24} color="#F44336" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {selectedItem && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: selectedItem.location.latitude,
              longitude: selectedItem.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={selectedItem.location}
              title={selectedItem.name}
            />
          </MapView>
        </View>
      )}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Carrinho', { cartItems })}
      >
        <Icon name="cart" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  quantity: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  mapContainer: {
    height: 220,
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  map: {
    flex: 1,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
});

export default ProductsScreen;