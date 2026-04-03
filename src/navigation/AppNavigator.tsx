import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../screens/TodoScreen.tsx'
import SignupScreen from '../screens/SignupScreen.tsx'


const Stack = createNativeStackNavigator()


function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                        name='Todo'
                        component={SignupScreen}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator