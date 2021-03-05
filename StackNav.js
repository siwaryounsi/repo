import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ScreenProfile';
import ChangePaswword from './ChangePaswword';
import EditProfile from './EditProfile';
const Stack = createStackNavigator();
function StackNav() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="profile">
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="Change Password" component={ChangePaswword} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackNav;