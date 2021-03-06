import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Avatar } from 'react-native-paper'
import ImgToBase64 from 'react-native-image-base64';
import * as ImagePicker from 'react-native-image-picker';
export default function EditProfile() {
    const [image, setimage] = useState(null)
    const [data, setData] = useState()
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View >
                    <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
                    <TouchableOpacity
                        onPress={
                            () => {
                                ImagePicker.launchImageLibrary({
                                    storageOptions: {
                                        skipBackup: true,
                                        path: 'images',
                                    }
                                }, (res) => {
                                    ImgToBase64.getBase64String(res.uri)
                                        .then(base64String => {
                                            setData({
                                                ...data,
                                                picture: `data:image/gif;base64,${base64String}`
                                            })
                                            setimage(base64String)
                                            console.log(data)
                                        }
                                        )
                                        .catch(err => console.log('errr'));

                                })
                            }
                        }
                    >

                        <Avatar.Image

                            source={
                                { uri: data.picture }
                            }
                            size={100}
                            style={{
                                marginBottom: 20,
                                alignSelf: "center"
                            }}

                        />

                    </TouchableOpacity>
                    <View style={style.input}>
                        <Text style={style.title}>Firstname</Text>
                        <TextInput value={data.name}>

                        </TextInput>

                    </View>
                    <View style={style.input}>
                        <Text style={style.title}>Lastname</Text>
                        <TextInput value={data.lastname}>

                        </TextInput>

                    </View>
                    <View style={style.input}>
                        <Text style={style.title}>Address</Text>
                        <TextInput value={data.address}>

                        </TextInput>

                    </View>
                    <View style={style.input}>
                        <Text style={style.title}>Phone</Text>
                        <TextInput value={data.phone}>

                        </TextInput>

                    </View>
                    <View style={style.input}>
                        <Text style={style.title}>Date of birth</Text>
                        <TextInput value={data.dateOfbirth}>

                        </TextInput>

                    </View>

                    <TouchableOpacity style={style.btn}>
                        <Text
                            style={style.text}
                        >Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
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
        marginBottom: 20


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
    },

})