import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockOrders = [
  { id: '1', item: 'Hambúrguer', quantity: 2, price: 20.00, status: 'Em preparação' },
  { id: '2', item: 'Coca-Cola', quantity: 1, price: 3.00, status: 'Entregue' },
  { id: '3', item: 'Sorvete', quantity: 3, price: 21.00, status: 'Em preparação' },
  // Adicione mais pedidos conforme necessário
];

function OrdersScreen() {
  const [orders, setOrders] = useState(mockOrders);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos Atuais</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.item}</Text>
            <Text style={styles.details}>Quantidade: {item.quantity}</Text>
            <Text style={styles.details}>Preço: R$ {item.price.toFixed(2)}</Text>
            <Text style={styles.details}>Status: {item.status}</Text>
          </View>
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
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
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
  details: {
    fontSize: 16,
  },
});

export default OrdersScreen;