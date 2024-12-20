import * as React from 'react';
import { View, Button, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importações de contexto
import { AuthProvider, useAuth } from './src/context/AuthContext';

// Importações de telas
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import ProductsScreen from './src/screen/ProductsScreen';
import CartScreen from './src/screen/CartScreen';
import CheckoutScreen from './src/screen/CheckoutScreen';
import AcompanhamentoScreen from './src/screen/AcompanhamentoScreen';
import SettingsScreen from './src/screen/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Configuração de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Navegação para não autenticados
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: false }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Produtos"
        component={ProductsScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// Navegação autenticada com abas
function AppTabs({ theme, setTheme }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Produtos':
              iconName = 'receipt';
              break;
            case 'Carrinho':
              iconName = 'shopping-cart';
              break;
            case 'Entrega':
              iconName = 'flight-takeoff';
              break;
            case 'Configurações':
              iconName = 'settings';
              break;
            default:
              iconName = 'home';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { paddingBottom: 5, height: 70 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Produtos" component={ProductsScreen} />
      <Tab.Screen name="Carrinho" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="Entrega" component={AcompanhamentoScreen} />
      <Tab.Screen
        name="Configurações"
        component={SettingsScreen}
        initialParams={{ theme, setTheme }}
      />
    </Tab.Navigator>
  );
}


// Navegação principal
function Navigation() {
  const { user } = useAuth();
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      try {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
          const { status: newStatus } = await Notifications.requestPermissionsAsync();
          if (newStatus !== 'granted') {
            alert('Permissões para notificações não concedidas!');
            return;
          }
        }
      } catch (error) {
        console.error('Erro ao registrar para notificações', error);
      }
    };

    registerForPushNotificationsAsync();
  }, []);

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pedido Atualizado!",
        body: 'Seu pedido está a caminho.',
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      {user ? <AppTabs /> : <AuthStack />}
      <View style={{ padding: 5 }}>
        {/* <Button title="Simular Notificação" onPress={scheduleNotification} /> */}
      </View>
    </NavigationContainer>
  );
}

// Componente principal
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}