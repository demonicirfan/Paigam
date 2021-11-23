import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Chats from '../assets/dummy-data/Chats';
import Message from '../components/Message/Message';

const chatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={Chats.messages}
        renderItem={({ item }: { item: any }) => <Message message={item} />}
      />
    </View>
  );
};

export default chatRoomScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
