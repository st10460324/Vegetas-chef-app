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
