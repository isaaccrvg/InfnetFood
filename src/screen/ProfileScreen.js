import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mockUserData = {
  name: 'Marcos Isaac',
  email: 'isaac98@hotmail.com',
};

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{mockUserData.name}</Text>
      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.value}>{mockUserData.email}</Text>
      
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

export default ProfileScreen;