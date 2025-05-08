
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;




export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                keyboardType='password'
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
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