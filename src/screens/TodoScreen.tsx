import React, { useState } from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'


function TodoScreen() {

    const [goal1, setGoal1] = useState('')
    const [goal2, setGoal2] = useState('')
    const [goal3, setGoal3] = useState('')
    const [goal4, setGoal4] = useState('')
    const [goal5, setGoal5] = useState('')


    const [goal1Completed, setGoal1Completed] = useState(false)
    const [goal2Completed, setGoal2Completed] = useState(false)
    const [goal3Completed, setGoal3Completed] = useState(false)
    const [goal4Completed, setGoal4Completed] = useState(false)
    const [goal5Completed, setGoal5Completed] = useState(false)

    return (
        <>
            <View>
                <Text>Today's Focus</Text>
                    <View style={Styles.Goal_1}>

                      <TextInput
                        value={goal1}
                        onChangeText={setGoal1}
                        placeholder="Goal 1"
                    />   
                    
                    <Pressable onPress={() => setGoal1Completed(!goal1Completed)}>
                        <Text>{goal1Completed ? "✓" : "[ ]"}</Text>
                    </Pressable>
                    </View>     

                    <TextInput value={goal2} onChangeText={setGoal2} placeholder="Goal 2" />
                    <TextInput value={goal3} onChangeText={setGoal3} placeholder="Goal 3" />
                    <TextInput value={goal4} onChangeText={setGoal4} placeholder="Goal 4" />
                    <TextInput value={goal5} onChangeText={setGoal5} placeholder="Goal 5" />
  
                <Text>0 / 5 Completed</Text>
            </View>
        </>
    )
}

export default TodoScreen


const Styles = StyleSheet.create({
    Goal_1: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})