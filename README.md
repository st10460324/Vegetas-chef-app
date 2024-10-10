MAST5112 PART 2 

 

ST10460324 

 

XOLILE NGONO 

 

DATE 08/10/2024 

 

 

 

 

 

 

 

 

 

 

1.)GITHUB LINK  

https://github.com/st10460324/Vegetas-chef-app.git   ( It is on the Master branch not on the main ) 

 

2.) YOUTUBE LINK 

https://youtu.be/fZVREV7kuxs 



 

 

 

Screenshots and explaintions 

 So this basically my start page where by the chef will click on the login button to login and add items on the menu. 

 

 

Then this is the chef login page where by he or she will enter her login details and press the login button and if they enter the wrong password it will send a message saying they have entered the wrong password 

 

This where they will click on the (add item) button to add their foods they want to add to the menu  

 

 Which will take them to the page where they choose whether its a start, main meal, or a dessert and the enter the name the description of the food and the price and they can add to the menu  

 

 After they add the food, it shall be added to the menu page whereby they can see all the foods they have added on to their menu  

 

Then this is how it will look if you press the menu button on the home page and it will show you the full menu and that's my app 

 

APP.TSX CODE  

 

import React from 'react'; 

import { NavigationContainer } from '@react-navigation/native'; 

import { createStackNavigator } from '@react-navigation/stack'; 

import Home from './screens/Home'; 

import ChefLogin from './screens/ChefLogin'; 

import ChefMenu from './screens/ChefMenu'; 

import MenuPage from './screens/MenuPage'; 

 

const Stack = createStackNavigator(); 

 

export default function App() { 

  return ( 

    <NavigationContainer> 

      <Stack.Navigator initialRouteName="Home"> 

        <Stack.Screen name="Home" component={Home} /> 

        <Stack.Screen name="ChefLogin" component={ChefLogin} /> 

        <Stack.Screen name="ChefMenu" component={ChefMenu} /> 

        <Stack.Screen name="MenuPage" component={MenuPage} /> 

      </Stack.Navigator> 

    </NavigationContainer> 

  ); 

} 

 

 

HOME PAGE CODE  

 

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

 

 

 

CHEF LOGIN PAGE CODE 

 

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

 

CHEF MENU PAGE CODE  

 

import React, { useState } from 'react'; 

import { View, Text, Button, Modal, TextInput, FlatList, StyleSheet } from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage'; 

import RNPickerSelect from 'react-native-picker-select'; 

 

export default function ChefMenu() { 

  const [modalVisible, setModalVisible] = useState(false); 

  const [courseType, setCourseType] = useState(''); 

  const [dishName, setDishName] = useState(''); 

  const [description, setDescription] = useState(''); 

  const [price, setPrice] = useState(''); 

  const [meals, setMeals] = useState([]); 

 

  const addMeal = async () => { 

    const newMeal = { courseType, dishName, description, price }; 

    const updatedMeals = [...meals, newMeal]; 

    setMeals(updatedMeals); 

    await AsyncStorage.setItem('meals', JSON.stringify(updatedMeals)); 

    setModalVisible(false); 

  }; 

 

  const removeMeal = async (index) => { 

    const updatedMeals = meals.filter((_, i) => i !== index); 

    setMeals(updatedMeals); 

    await AsyncStorage.setItem('meals', JSON.stringify(updatedMeals)); 

  }; 

 

  return ( 

    <View style={styles.container}> 

      <Button title="Add Item" onPress={() => setModalVisible(true)} /> 

      <FlatList 

        data={meals} 

        keyExtractor={(_, index) => index.toString()} 

        renderItem={({ item, index }) => ( 

          <View style={styles.card}> 

            <Text style={styles.mealText}>{item.dishName} - {item.courseType}</Text> 

            <Text style={styles.mealText}>{item.description}</Text> 

            <Text style={styles.mealText}>Price: {item.price}</Text> 

            <Button title="Remove" onPress={() => removeMeal(index)} /> 

          </View> 

        )} 

      /> 

 

      <Modal visible={modalVisible} animationType="slide"> 

        <View style={styles.modalContainer}> 

          <RNPickerSelect 

            onValueChange={setCourseType} 

            items={[ 

              { label: 'Starter', value: 'Starter' }, 

              { label: 'Main Meal', value: 'Main Meal' }, 

              { label: 'Dessert', value: 'Dessert' }, 

            ]} 

            placeholder={{ label: 'Select Course Type', value: null }} 

            style={pickerSelectStyles} 

          /> 

          <TextInput 

            placeholder="Dish Name" 

            value={dishName} 

            onChangeText={setDishName} 

            style={styles.input} 

          /> 

          <TextInput 

            placeholder="Description" 

            value={description} 

            onChangeText={setDescription} 

            style={styles.input} 

          /> 

          <TextInput 

            placeholder="Price" 

            keyboardType="number-pad" 

            value={price} 

            onChangeText={setPrice} 

            style={styles.input} 

          /> 

          <Button title="Add Meal" onPress={addMeal} /> 

          <Button title="Close" onPress={() => setModalVisible(false)} /> 

        </View> 

      </Modal> 

    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    padding: 16, 

    backgroundColor: '#F3F3F3', 

  }, 

  card: { 

    padding: 16, 

    backgroundColor: '#FFF', 

    borderWidth: 1, 

    borderColor: '#DDD', 

    borderRadius: 8, 

    marginVertical: 8, 

  }, 

  mealText: { 

    fontSize: 16, 

    marginBottom: 5, 

    color: '#333', 

  }, 

  modalContainer: { 

    flex: 1, 

    justifyContent: 'center', 

    padding: 20, 

    backgroundColor: '#FFF', 

  }, 

  input: { 

    borderWidth: 1, 

    borderColor: '#999', 

    borderRadius: 8, 

    padding: 10, 

    marginBottom: 20, 

    backgroundColor: '#FFF', 

  }, 

}); 

 

const pickerSelectStyles = { 

  inputIOS: { 

    fontSize: 16, 

    paddingVertical: 12, 

    paddingHorizontal: 10, 

    borderWidth: 1, 

    borderColor: 'gray', 

    borderRadius: 4, 

    color: 'black', 

    paddingRight: 30, 

    marginBottom: 20, 

  }, 

  inputAndroid: { 

    fontSize: 16, 

    paddingHorizontal: 10, 

    paddingVertical: 8, 

    borderWidth: 0.5, 

    borderColor: 'gray', 

    borderRadius: 8, 

    color: 'black', 

    paddingRight: 30, 

    marginBottom: 20, 

  }, 

  backgroundcontainer: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    backgroundColor: '#F5F5F5', 

  }   

}; 

 

 

 

MENU PAGE CODE 

 

 

import React, { useState, useEffect } from 'react'; 

import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage'; 

 

export default function MenuPage() { 

  const [meals, setMeals] = useState([]); 

  const [filteredMeals, setFilteredMeals] = useState([]); 

 

  useEffect(() => { 

    const loadMeals = async () => { 

      const storedMeals = await AsyncStorage.getItem('meals'); 

      if (storedMeals) { 

        const parsedMeals = JSON.parse(storedMeals); 

        setMeals(parsedMeals); 

        setFilteredMeals(parsedMeals); 

      } 

    }; 

    loadMeals(); 

  }, []); 

 

  const filterMeals = (type) => { 

    if (type === 'All') { 

      setFilteredMeals(meals); 

    } else { 

      setFilteredMeals(meals.filter(meal => meal.courseType === type)); 

    } 

  }; 

 

  return ( 

    <View style={styles.container}> 

      <View style={styles.filterContainer}> 

        <Button title="All" onPress={() => filterMeals('All')} /> 

        <Button title="Starter" onPress={() => filterMeals('Starter')} /> 

        <Button title="Main Meal" onPress={() => filterMeals('Main Meal')} /> 

        <Button title="Dessert" onPress={() => filterMeals('Dessert')} /> 

      </View> 

      <FlatList 

        data={filteredMeals} 

        keyExtractor={(_, index) => index.toString()} 

        renderItem={({ item }) => ( 

          <View style={styles.card}> 

            <Text style={styles.mealText}>{item.dishName} - {item.courseType}</Text> 

            <Text style={styles.mealText}>{item.description}</Text> 

            <Text style={styles.mealText}>Price: {item.price}</Text> 

            <TouchableOpacity style={styles.reserveButton}> 

              <Text style={styles.reserveButtonText}>Reserve</Text> 

            </TouchableOpacity> 

          </View> 

        )} 

      /> 

    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    padding: 16, 

    backgroundColor: '#F3F3F3', 

  }, 

  filterContainer: { 

    flexDirection: 'row', 

    justifyContent: 'space-around', 

    marginBottom: 16, 

  }, 

  card: { 

    padding: 16, 

    backgroundColor: '#FFF', 

    borderWidth: 1, 

    borderColor: '#DDD', 

    borderRadius: 8, 

    marginVertical: 8, 

  }, 

  mealText: { 

    fontSize: 16, 

    marginBottom: 5, 

    color: '#333', 

  }, 

  reserveButton: { 

    marginTop: 10, 

    backgroundColor: '#3A86FF', 

    padding: 10, 

    borderRadius: 8, 

  }, 

  reserveButtonText: { 

    color: '#FFF', 

    textAlign: 'center', 

  }, 

  backgroundcontainer: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    backgroundColor: '#F5F5F5', 

  }   

}); 

 

 

 

3.)Referencing 

 

ChatGPT, 2024. Code for React Native Chef Menu App, personal communication, 10 October 

Varsity College, 2024. MAST5112: Module Manual. [online] : Varsity College. Available at: <URL> [Accessed 10 October 2024]. 

Ngono.X.N.(2024)Chef App 
