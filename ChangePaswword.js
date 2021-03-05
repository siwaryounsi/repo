import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity,View } from 'react-native'

export default function ChangePaswword() {
    return (
       <View>
           <View style={style.input}>
<TextInput placeholder="Enter current password">

</TextInput>

           </View>
           <View style={style.input}>
<TextInput placeholder="Enter new password">

</TextInput>

           </View>
           <View style={style.input}>
<TextInput placeholder="Confirm new password">

</TextInput>

           </View>
         
<TouchableOpacity style={style.btn}>
    <Text
    style={style.text}
    >Change</Text>
    </TouchableOpacity>
 </View>
    )
}
const  style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:20,
        alignContent:"center",
        paddingLeft:60,
        paddingRight:60
    },
    input:{
        borderWidth:1,
        borderRadius:20,
        height:50,
        justifyContent:"center",
        marginBottom:10


    },
    btn:{
        width:100,
        height:50,
        backgroundColor:"red",
        alignSelf:"center",
        borderRadius:15,
        textAlign:"center",
        justifyContent:"center"
    },
    text:{
        color:'#fff',
        fontSize:15
    }
})