import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../context/AuthContext';



function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (login(email, password)) {
      setError('');
    } else {
      setError('E-mail ou senha inválidos.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={require('../../assets/infnet.png')}
            style={styles.logoImage}
            resizeMode="contain" />

          {/* Conteúdo Principal */}
          <View style={styles.content}>
            <Text style={styles.welcomeText}>Bem Vindo ao, InfnetFood</Text>
            <Text style={styles.subtitle}>Entre em sua conta</Text>

            {/* Input E-mail */}
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Input Senha */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholderTextColor="#000"
                placeholder="Senha"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <Icon
                  name={secureTextEntry ? 'visibility-off' : 'visibility'}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* Mensagem de erro */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            {/* Botão Entrar */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Link de cadastro */}
            <Text style={styles.registerLink}>Ainda não tenho uma conta</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#007FE0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logoImage: {
    width: 300,
    height: 100,
    marginBottom: 0,
    margin: 40,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  content: {
    marginTop: '50%',
    width: '85%',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerLink: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },
});

export default LoginScreen;
