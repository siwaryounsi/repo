import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import axios from 'axios';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchLoading, loadingAction, reloadingAction } from './Redux/ActionsCreator';
const ProfileScreen = (props) => {

  const [data, setData] = useState()
  useEffect(() => {
    props.loading()

  }, []
  )

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
              source={{

              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>{props.Data['data']['firstname']} {props.Data['data']['lastname']}</Title>
              <Caption style={styles.caption}>{props.Data['data']['permis'] ? 'permis' : 'non permis'}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{props.Data['data']['address']}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{props.Data['data']['phone']}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{props.Data['data']['email']}</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>140</Title>
            <Caption>Requests</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>100</Title>
            <Caption>Delivery</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="history" type="FontAwesome" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>History</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { props.navigation.navigate('Change Password') }}>
            <View style={styles.menuItem}>
              <Icon name="lock" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Change password</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { props.navigation.navigate('Edit Profile') }}>
            <View style={styles.menuItem}>
              <Icon name="account-edit-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Edit profile</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    Data: state.DATA,

  }
}
function mapDispatchToProps(dispatch) {
  return {
    loading: () => dispatch(fetchLoading()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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