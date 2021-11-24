import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Chats from '../assets/dummy-data/Chats';
import Message from '../components/Message/Message';
import CreateMessage from '../components/MessageInputComponent/Index';

const chatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={Chats.messages}
        renderItem={({ item }: { item: any }) => <Message message={item} />}
        inverted
      />
      <CreateMessage />
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
