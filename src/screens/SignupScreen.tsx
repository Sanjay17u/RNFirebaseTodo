import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


function SignupScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <View>
                <Text>Sign Up</Text>

                <Text>Name</Text>
                <TextInput
                    style={styles.InputBars}
                    placeholder='Enter Your Name'
                    value={name}
                    onChangeText={setName}
                />

                <Text>Email</Text>
                <TextInput
                    style={styles.InputBars}
                    placeholder='Enter Your Email'
                    value={email}
                    onChangeText={setEmail}
                />

                <Text>Password</Text>
                <TextInput
                    style={styles.InputBars}
                    placeholder='Enter Your Password'
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
        </>
    )
}


export default SignupScreen

const styles = StyleSheet.create({
    InputBars: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
    },
})