import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../screens/TodoScreen.tsx'
import SignupScreen from '../screens/SignupScreen.tsx'
import LoginScreen from '../screens/LoginScreen.tsx'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth'


const Stack = createNativeStackNavigator()





function AppNavigator() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)


    useEffect(() => {
        const auth = getAuth()

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User logged in:', user.email)
                setIsLoggedIn(true)
            } else {
                console.log('No user logged in')
                setIsLoggedIn(false)
            }
        })

        return unsubscribe
    }, [])



    if (isLoggedIn === null) {
        return null
    }


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                {isLoggedIn ? (
                    <Stack.Screen
                        name="Todo"
                        component={TodoScreen}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={SignupScreen}
                        />
                    </>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator