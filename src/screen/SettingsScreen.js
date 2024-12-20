import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

function SettingsScreen({ route }) {
  const { theme, setTheme } = route.params;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#fff' : '#333' },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: theme === 'light' ? '#000' : '#fff' },
        ]}
      >
        Configurações
      </Text>
      <View style={styles.setting}>
        <Text
          style={[
            styles.label,
            { color: theme === 'light' ? '#000' : '#fff' },
          ]}
        >
          Tema Escuro
        </Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#0007', true: 'blue' }}
        />
      </View>
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
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 18,
  },
});

export default SettingsScreen;
