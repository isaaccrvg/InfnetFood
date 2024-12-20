import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import Icon from 'react-native-vector-icons/Ionicons';

const AcompanhamentoScreen = () => {
  const handleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Entrega em Progresso 🚚",
        body: "Seu pedido está a caminho!",
        data: { status: "Em Progresso" },
      },
      trigger: { seconds: 3 },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status do Pedido</Text>
      <TouchableOpacity style={styles.notificationButton} onPress={handleNotification}>
        <Icon name="notifications-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  notificationButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});

export default AcompanhamentoScreen;