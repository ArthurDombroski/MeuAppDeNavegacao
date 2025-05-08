import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

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

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />

            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6', 
      },
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
    buttonContainer: {
        backgroundColor: '#ffebcd', 
        margin: 10,
        width: windowWidth * 0.5, 
        borderRadius: 5,
      },
});