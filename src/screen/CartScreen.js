import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function CartScreen({ route, navigation }) {
  const { cartItems } = route.params || {};

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyMessage}>Seu carrinho está vazio!</Text>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revisar Pedido</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
            <Text style={styles.price}>Preço: R$ {parseFloat(item.price).toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout', { cartItems, total })}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  emptyMessage: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#666',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  quantity: {
    fontSize: 16,
    marginTop: 4,
    color: '#555',
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'green',
  },
  totalContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'green',
    textAlign: 'right',
  },
  continueButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButton: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 12,
    backgroundColor: '#E50000',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default CartScreen;