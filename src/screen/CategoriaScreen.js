import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', title: 'Lanches' },
  { id: '2', title: 'Bebidas' },
  { id: '3', title: 'Sobremesas' },
];

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Produtos', { categoryId: item.id, categoryTitle: item.title })}
          >
            <Text style={styles.title}>{item.title}</Text>
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
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default CategoriesScreen;

