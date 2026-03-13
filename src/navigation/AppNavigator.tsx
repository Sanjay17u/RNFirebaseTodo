import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  TodoScreen  from '../screens/TodoScreen.tsx'


const Stack = createNativeStackNavigator()


function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                        name='Todo'
                        component={TodoScreen}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator