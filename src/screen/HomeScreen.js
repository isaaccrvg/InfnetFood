import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = () => {

    const mockRestaurants = [
      { id: '1', name: 'Jappa da quitanda' },
      { id: '2', name: 'Gula gula' },
      { id: '3', name: 'Casa Paladino' },
      { id: '4', name: 'Os Ximenes' },
      { id: '5', name: 'Xian' },
      { id: '6', name: 'Dois de Fevereiro' },

    ];
    setRestaurants(mockRestaurants);
  };

  const carouselItems = [
    { id: '1', image: require('../../assets/jappaQuitanda.png') },
    { id: '2', image: require('../../assets/Gulagula.png') },
    { id: '3', image: require('../../assets/paladino.png') },
    { id: '4', image: require('../../assets/ximenes.png') },
    { id: '5', image: require('../../assets/xian.png') },
    { id: '6', image: require('../../assets/fevereiro.png') },
  ];


  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ícones superiores */}
      <View style={styles.topIcons}>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Perfil')}>
          <Icon name="person" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Grande retângulo superior, Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, styles.roundedBorder]}
          placeholder="Buscar restaurantes"
          placeholderTextColor="#000"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>

      {/* Carrossel de imagens */}
      <Text style={styles.carouselTitle}>Top 6 Restaurantes</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={360}
          itemWidth={360}
          loop={true}
        />
      </View>


      {/* Categoria */}
      <Text style={styles.title}>Categoria</Text>
      <View style={styles.categoryContainer}>
        {[
          { image: require('../../assets/bebidas.jpg'), label: 'Bebidas', id: '2' },
          { image: require('../../assets/Burguer.png'), label: 'Burguer', id: '1' },
          { image: require('../../assets/japonesa.png'), label: 'Japonesa', id: '4' },
          { image: require('../../assets/prato.jpg'), label: 'Pratos', id: '5' },
          { image: require('../../assets/pudim.jpg'), label: 'Sobremesas', id: '3' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Produtos', { categoryId: item.id, categoryTitle: item.label })}
          >
            <View style={styles.smallCircle}>
              <Image source={item.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Retângulo médio */}
      <Text style={styles.carouselTitle}>Promoções</Text>
      <View style={styles.promotionBanner}>
        <Image source={require('../../assets/promo.png')} style={styles.promotionImage} />
        <Text style={styles.promotionText}>Aproveite nossas ofertas especiais!</Text>
        <TouchableOpacity style={styles.promotionButton} onPress={() => navigation.navigate('Promotions')}>
          <Text style={styles.promotionButtonText}>Ver Promoções</Text>
        </TouchableOpacity>
      </View>

      {/* Recomendação */}
      <Text style={styles.title}>Recomendação do Chef Cidcley</Text>
      <View style={styles.recommendationContainer}>
        <View style={styles.recommendationBox}>
          <Image
            source={{ uri: 'http://www.asariorestaurante.com.br/images/crepe.jpg' }}
            style={styles.recommendationImage}
          />
          <Text style={styles.recommendationName}> Crepe de Camarão com Catupiry</Text>
          <Text style={styles.recommendationDescription}>Delicioso crepe recheado com camarões frescos e cremoso catupiry, servido com uma salada verde.</Text>
          <Text style={styles.recommendationPrice}>R$ 60,00</Text>
        </View>
        <View style={[styles.recommendationBox, styles.smallBox]}>
          <Image
            source={{ uri: 'http://www.asariorestaurante.com.br/images/salmao.jpg' }}
            style={styles.recommendationImage}
          />
          <Text style={styles.recommendationName}>Salada com Salmão</Text>
          <Text style={styles.recommendationDescription}>Uma salada fresca e saudável com folhas verdes, tomates cereja, pepino, cenoura ralada e pedaços de salmão grelhado, temperada com um molho especial de ervas.</Text>
          <Text style={styles.recommendationPrice}>R$ 75,00</Text>
        </View>
      </View>

      {/* Lista de restaurantes */}
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.restaurantItem}>
            <Text style={styles.restaurantName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    top: 30,
    backgroundColor: '#FFFFFF',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 10,
    color: '#666',
  },
  searchContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  searchInput: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 35,
    paddingRight: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  roundedBorder: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
  },
  carouselContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#000',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  promotionBanner: {
    height: 300,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  promotionImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  promotionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  promotionButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  promotionButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  // categoria

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  smallCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },

  // Recomendação

  recommendationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recommendationBox: {
    flex: 1,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginRight: 10,
  },
  smallBox: {
    flex: 0.8,
    marginRight: 0,
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  restaurantName: {
    fontSize: 16,
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 200,
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'flex-start',
  },
  recommendationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recommendationBox: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  smallBox: {
    width: '45%',
  },
  recommendationImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  recommendationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  recommendationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default HomeScreen;