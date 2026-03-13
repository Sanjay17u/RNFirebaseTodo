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


    const completedCount =
  (goal1Completed ? 1 : 0) +
  (goal2Completed ? 1 : 0) +
  (goal3Completed ? 1 : 0) +
  (goal4Completed ? 1 : 0) +
  (goal5Completed ? 1 : 0)

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
                    <View style={Styles.Goal_2}>

                      <TextInput
                        value={goal2}
                        onChangeText={setGoal2}
                        placeholder="Goal 2"
                    />   
                    
                    <Pressable onPress={() => setGoal2Completed(!goal2Completed)}>
                        <Text>{goal2Completed ? "✓" : "[ ]"}</Text>
                    </Pressable>
                    </View>     
                    <View style={Styles.Goal_3}>

                      <TextInput
                        value={goal3}
                        onChangeText={setGoal3}
                        placeholder="Goal 3"
                    />   
                    
                    <Pressable onPress={() => setGoal3Completed(!goal3Completed)}>
                        <Text>{goal3Completed ? "✓" : "[ ]"}</Text>
                    </Pressable>
                    </View>     
                    <View style={Styles.Goal_4}>

                      <TextInput
                        value={goal4}
                        onChangeText={setGoal4}
                        placeholder="Goal 4"
                    />   
                    
                    <Pressable onPress={() => setGoal4Completed(!goal4Completed)}>
                        <Text>{goal4Completed ? "✓" : "[ ]"}</Text>
                    </Pressable>
                    </View>     
                    <View style={Styles.Goal_5}>

                      <TextInput
                        value={goal5}
                        onChangeText={setGoal5}
                        placeholder="Goal 5"
                    />   
                    
                    <Pressable onPress={() => setGoal5Completed(!goal5Completed)}>
                        <Text>{goal5Completed ? "✓" : "[ ]"}</Text>
                    </Pressable>
                    </View>     

                    
  
                <Text>{completedCount} / 5 Completed</Text>
            </View>
        </>
    )
}

export default TodoScreen


const Styles = StyleSheet.create({
    Goal_1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Goal_2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Goal_3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Goal_4: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Goal_5: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})