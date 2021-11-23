import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import chatRoomsData from '../assets/dummy-data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItems/ChatRoomItem';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
});
