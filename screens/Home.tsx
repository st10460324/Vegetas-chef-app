import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBase } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require("../assets/logo2.jpg")} style={styles.logo2} />
      <Text style={styles.title}>Welcome to Vegetas Chef Menu App</Text>
        <Button title="Chef Login" onPress={() => navigation.navigate('ChefLogin')} />
        <Button title="Menu" onPress={() => navigation.navigate('MenuPage')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#F0F4F8',
    marginBottom: 70
  },
  navbar: {
    height: 400,
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
   
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 60,
  },
 
  navTitle: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo2: {
    width: 170,
    height: 200,
    marginBottom: 90,
    marginTop: 0,
    marginLeft: 100,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 30,
    color: '#333',

  },
 
  chefButton: {
    backgroundColor: '#1976D2',
    padding: 10,
    borderRadius: 5,
    flex: 1, // Ensures buttons take equal space
    marginRight: 10,
  },
  menuButton: {
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 5,
    flex: 2, // Ensures buttons take equal space
    marginLeft: 10,
  },
  
});
