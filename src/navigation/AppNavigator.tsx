import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../screens/TodoScreen.tsx'
import SignupScreen from '../screens/SignupScreen.tsx'
import LoginScreen from '../screens/LoginScreen.tsx'


const Stack = createNativeStackNavigator()


function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                    />

                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />

                    <Stack.Screen
                        name="Todo"
                        component={TodoScreen}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator