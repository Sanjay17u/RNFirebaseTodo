import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<any>()


    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Please enter email and password')
            return
        }

        if (!email.includes('@')) {
            Alert.alert('Invalid email')
            return
        }

        // 🔥 Firebase login yaha aayega (future)
        console.log('Login Data:', email, password)

        navigation.replace('Todo')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.footerText}>
                    Don’t have an account? <Text style={styles.forgotText}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fb',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 30,
        color: '#222',
    },

    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#eee',

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },

    forgotContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 10,
    },

    forgotText: {
        color: '#4f46e5',
        fontSize: 13,
    },

    button: {
        width: '100%',
        backgroundColor: '#4f46e5',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    footerText: {
        marginTop: 20,
        color: '#777',
    },
})