import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Insira seu Email'
                keyboardType='text'
            />
            <TextInput
                style={styles.input}
                placeholder='Insira seu Email'
                keyboardType='password'
            />
            <TouchableOpacity style={styles.cuidados} onPress={() => navigation.navigate('Home')}></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
      backgroundColor: '#f0f0f0',
      padding: 16,
      borderRadius: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
  });