import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import AsynStorage from "@react-native-asyncs-storage/async-storage";
const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const emailCorreto = 'admin';
  const senhaCorreta = '123456';

  const saveCad = async (state) => {
    try {
      await AsynStorage.setItem("loggedIn","true");
    } catch (error) {
      console.log("Erro ao salvar o cadastro", error)
    }
  }

    const Login = () => {
      if (email === emailCorreto && senha === senhaCorreta) {
        navigation.navigate('Home'); 
        saveState(true);
      } 
      else {
        Alert.alert('Error', 'Incorrect email ou password!');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!!</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'

      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={Login && saveCad}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: windowWidth * 0.8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: windowWidth * 0.5,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
