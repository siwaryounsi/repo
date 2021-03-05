import React, {useState}from 'react'
import { View ,Text,TextInput,StyleSheet,TouchableOpacity,SafeAreaView ,ScrollView} from 'react-native'
import { Avatar } from 'react-native-paper'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function EditProfile() {
    const [data, setData] = useState(
        {
          name:'XXXX',
          lastname:'XXXX',
          email:'xxxx@xxi.com',
          picture:'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png',
          dateOfbirth:'27/03/1999',
          permis:false,
          CIN:'000000',
          phone:'22222222',
          address:'Tunis,Tunisia'
       }
    )
    return (
        <SafeAreaView style={style.container}>
        <ScrollView>
       <View>
           <Avatar.Image 
           onPress={
               ()=>{
                launchImageLibrary({
                    mediaType:"photo"
                }, (res)=>{
                        console.log(res.fileName);
                })
               }
           }
            source={{
              uri:'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png',
            }}
            size={100}
            style={{
                marginBottom:20,
                alignSelf:"center"
            }}
        
          />
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
    </SafeAreaView>
    )
}
const  style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       
        alignItems:"center",
       
    },
    input:{
        borderWidth:1,
        borderRadius:10,
        height:50,
        justifyContent:"center",
        
        width:200


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
        fontSize:15,
        textAlign:"center"
    },
    title:{
        marginBottom:20
    }
})