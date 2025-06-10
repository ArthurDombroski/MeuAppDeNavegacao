import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {

  // Função para salvar o login
  const saveCad = async (userData) => {
    try {
      await AsyncStorage.setItem('storedCad', JSON.stringify(userData));
      console.log("Login salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o login");
    }
  };

  // Função para carregar o login
  const loadCad = async () => {
    try {
      const storedCad = await AsyncStorage.getItem('storedCad');
      if (storedCad !== null) {
        return JSON.parse(storedCad);
      }
    } catch (error) {
      console.log("Erro ao carregar o login");
    }
    return null;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          children={props => <LoginScreen {...props} saveCad={saveCad} loadCad={loadCad} />} 
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

