import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function ChefLogin({ navigation }) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === '1234') {
      navigation.navigate('ChefMenu');
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <View style={styles.container}>
       <Image source={require("../assets/logo2.jpg")} style={styles.logo2} />
      <Text style={styles.title}> Vegets Chef Login</Text>
      <TextInput
        secureTextEntry
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F3F3F3',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  logo2: {
    width: 150,
    height: 170,
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 120,
  },
  backgroundcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  }  
});
