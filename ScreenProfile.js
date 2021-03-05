import React,{useState,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen = ({navigation}) => {
function fetching(){
    axios.get(`http://192.168.1.8:3000/api/contacts/603c0e12068cd93f245383df`)
      .then(res => {
        const persons = res.data;
        console.log( persons );
      })
  }
  fetching()
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

    <SafeAreaView style={styles.container}>
<ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri:data.picture,
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{data.name} {data.lastname}</Title>
            <Caption style={styles.caption}>{data.permis?'Permis':'pas de permis'}</Caption>
          
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{data.address}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{data.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{data.email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>100</Title>
            <Caption>Livraison</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="history" type="FontAwesome" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate('Change Password')}}>
          <View style={styles.menuItem}>
            <Icon name="lock" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Change password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate('Edit Profile')}}>
          <View style={styles.menuItem}>
            <Icon name="edit" type="AntDesign" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Edit profile</Text>
          </View>
        </TouchableRipple>
      
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});