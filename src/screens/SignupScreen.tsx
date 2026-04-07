import React, { useState } from 'react'
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native'


function SignupScreen({ navigation }: any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignup = () => {
        // basic validation
        if (!name || !email || !password) {
            Alert.alert('Please fill all fields')
            return
        }

        if (!email.includes('@')) {
            Alert.alert('Invalid email')
            return
        }

        if (password.length < 6) {
            Alert.alert('Password must be at least 6 characters')
            return
        }

        // 🔥 Firebase call yaha aayega (future)
        console.log('Signup Data:', name, email, password)

        // temporary navigation
        navigation.navigate('Login')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />

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

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.footerText}>
                    Already have an account? <Text style={styles.forgotText}>Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignupScreen

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

        // shadow (iOS)
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,

        // elevation (Android)
        elevation: 2,
    },

    button: {
        width: '100%',
        backgroundColor: '#4f46e5',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
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


    forgotText: {
        color: '#4f46e5',
        fontSize: 13,
    },
})