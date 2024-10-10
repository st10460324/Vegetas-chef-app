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
