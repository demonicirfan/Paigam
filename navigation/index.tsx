import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import chatRoomScreen from '../screens/chatRoomScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View, Text, Image } from 'react-native';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerTitle: (props) => <HomeHeader {...props} /> }}
      />
      <Stack.Screen
        name='ChatRoom'
        component={chatRoomScreen}
        options={{
          headerTitle: (props) => <ChatHeader {...props} />,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/74172466?v=4' }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />

      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Home</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 58,
        }}
      >
        <AntDesign name='camerao' size={24} color='black' />
        <Feather name='edit-2' size={24} color='black' />
      </View>
    </View>
  );
};
const ChatHeader = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '50%',
        }}
      >
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/74172466?v=4',
          }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 10 }}>
          {props.children}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 90,
        }}
      >
        <Ionicons name='videocam' size={23} color='black' />
        <Ionicons name='call' size={23} color='black' />
        <MaterialCommunityIcons name='dots-vertical' size={23} color='black' />
      </View>
    </View>
  );
};
