import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

function CheckoutScreen({ route, navigation }) {
  const { cartItems } = route.params || {};
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirm = () => {
    if (!address.trim() || !paymentMethod.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Pedido confirmado!');
    navigation.navigate('Acompanhamento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finalizar Compra</Text>
      <Text style={styles.label}>Endereço de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.label}>Método de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o método de pagamento"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#E50000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default CheckoutScreen;