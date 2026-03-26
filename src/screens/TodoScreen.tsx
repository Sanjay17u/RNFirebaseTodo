import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


function TodoScreen() {

    const [isLoaded, setIsLoaded] = useState(false)

    const [goals, setGoals] = useState({
        goal1: '',
        goal2: '',
        goal3: '',
        goal4: '',
        goal5: ''
    })

    const [completed, setCompleted] = useState({
        goal1: false,
        goal2: false,
        goal3: false,
        goal4: false,
        goal5: false
    })


    const completedCount =
        (completed.goal1 ? 1 : 0) +
        (completed.goal2 ? 1 : 0) +
        (completed.goal3 ? 1 : 0) +
        (completed.goal4 ? 1 : 0) +
        (completed.goal5 ? 1 : 0)

    const allGoalsFilled =
        goals.goal1.trim() !== '' &&
        goals.goal2.trim() !== '' &&
        goals.goal3.trim() !== '' &&
        goals.goal4.trim() !== '' &&
        goals.goal5.trim() !== ''


    useEffect(() => {
        if (!isLoaded) return

        const saveData = async () => {
            const data = {
                goals,
                completed
            }

            await AsyncStorage.setItem('todoData', JSON.stringify(data))
        }

        saveData()
    }, [goals, completed, isLoaded])



    useEffect(() => {
        const loadData = async () => {
            const data = await AsyncStorage.getItem('todoData')

            if (data !== null) {
                const parsed = JSON.parse(data)

                setGoals(parsed.goals)
                setCompleted(parsed.completed)
            }

            setIsLoaded(true)
        }

        loadData()
    }, [])

    return (

        <View>
            <Text>Today's Focus</Text>
            <View style={Styles.goalRow}>

                <TextInput
                    value={goals.goal1}
                    onChangeText={(text) =>
                        setGoals({ ...goals, goal1: text })
                    }
                    style={Styles.input}
                    editable={!completed.goal1}
                    placeholder="Goal 1"
                />

                <Pressable onPress={() => {
                    if (allGoalsFilled) {
                        setCompleted({
                            ...completed,
                            goal1: !completed.goal1
                        })
                    }
                }}>
                    <Text>{completed.goal1 ? "✓" : "[ ]"}</Text>
                </Pressable>
            </View>
            <View style={Styles.goalRow}>

                <TextInput
                    value={goals.goal2}
                    style={Styles.input}
                    onChangeText={(text) =>
                        setGoals({ ...goals, goal2: text })
                    }
                    editable={!completed.goal2}
                    placeholder="Goal 2"
                />

                <Pressable onPress={() => {
                    if (allGoalsFilled) {
                        setCompleted({
                            ...completed,
                            goal2: !completed.goal2
                        })
                    }
                }}>
                    <Text>{completed.goal2 ? "✓" : "[ ]"}</Text>
                </Pressable>
            </View>
            <View style={Styles.goalRow}>

                <TextInput
                    value={goals.goal3}
                    style={Styles.input}
                    onChangeText={(text) =>
                        setGoals({ ...goals, goal3: text })
                    }
                    editable={!completed.goal3}
                    placeholder="Goal 3"
                />

                <Pressable onPress={() => {
                    if (allGoalsFilled) {
                        setCompleted({
                            ...completed,
                            goal3: !completed.goal3
                        })
                    }
                }}>
                    <Text>{completed.goal3 ? "✓" : "[ ]"}</Text>
                </Pressable>
            </View>
            <View style={Styles.goalRow}>

                <TextInput
                    value={goals.goal4}
                    style={Styles.input}
                    onChangeText={(text) =>
                        setGoals({ ...goals, goal4: text })
                    }
                    editable={!completed.goal4}
                    placeholder="Goal 4"
                />

                <Pressable onPress={() => {
                    if (allGoalsFilled) {
                        setCompleted({
                            ...completed,
                            goal4: !completed.goal4
                        })
                    }
                }}>
                    <Text>{completed.goal4 ? "✓" : "[ ]"}</Text>
                </Pressable>
            </View>
            <View style={Styles.goalRow}>

                <TextInput
                    value={goals.goal5}
                    style={Styles.input}
                    onChangeText={(text) =>
                        setGoals({ ...goals, goal5: text })
                    }
                    editable={!completed.goal5}
                    placeholder="Goal 5"
                />

                <Pressable onPress={() => {
                    if (allGoalsFilled) {
                        setCompleted({
                            ...completed,
                            goal5: !completed.goal5
                        })
                    }
                }}>
                    <Text>{completed.goal5 ? "✓" : "[ ]"}</Text>
                </Pressable>
            </View>



            <Text style={Styles.TotalCount}>{completedCount} / 5 Completed</Text>
        </View>
    )
}

export default TodoScreen


const Styles = StyleSheet.create({
    goalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10
    },

    input: {
        flex: 1,
        fontSize: 16
    },

    TotalCount: {
        textAlign: 'center',
        fontWeight: '800'
    }

})