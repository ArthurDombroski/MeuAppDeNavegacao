import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ saveCad }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const emailCorreto = 'admin';
  const senhaCorreta = '123456';

  const handleLogin = () => {
    if (email.toLowerCase() === emailCorreto && senha === senhaCorreta) {
      const userData = {
        email: email,
        loginTimestamp: new Date().getTime(),
      };
      
      saveCad(userData);

    } else {
      Alert.alert('Erro', 'Email ou senha incorretos!');
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
      
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
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