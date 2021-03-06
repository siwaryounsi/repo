import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native'

export default function ChangePaswword() {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
            <View style={style.input}>
                <TextInput placeholder="Enter current password"
                    secureTextEntry
                    keyboardType="numbers-and-punctuation"
                >

                </TextInput>

            </View>
            <View style={style.input}>
                <TextInput placeholder="Enter new password"
                    secureTextEntry
                    keyboardType="numbers-and-punctuation"
                >

                </TextInput>

            </View>
            <View style={style.input}>
                <TextInput placeholder="Confirm new password"
                    secureTextEntry
                    keyboardType="numbers-and-punctuation"
                >

                </TextInput>

            </View>

            <TouchableOpacity style={style.btn}>
                <Text
                    style={style.text}
                >Change</Text>
            </TouchableOpacity>
        </View >
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignContent: "center",
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#fff"
    },
    input: {
        borderBottomWidth: 1,

        height: 50,
        justifyContent: "center",
        marginBottom: 10


    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: "#FF6347",
        alignSelf: "center",
        borderRadius: 15,
        textAlign: "center",
        justifyContent: "center"
    },
    text: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
    }
})