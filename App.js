import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  const saveCad = async (userData) => {
    try {
      await AsyncStorage.setItem('storedCad', JSON.stringify(userData));
      setIsLoggedIn(true); 
      console.log("Login salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o login");
    }
  };


  const logout = async () => {
    try {
      await AsyncStorage.removeItem('storedCad');
      setIsLoggedIn(false); 
      console.log("Logout realizado com sucesso!");
    } catch (error) {
      console.log("Erro ao realizar logout");
    }
  };


 
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedCad = await AsyncStorage.getItem('storedCad');
        if (storedCad !== null) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("Erro ao carregar o login");
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {props => <HomeScreen {...props} logout={logout} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} saveCad={saveCad} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}