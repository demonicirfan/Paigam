import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import ChatRoomData from '../assets/dummy-data/Chats';
import Message from '../components/Message/Message';
import MessageInput from '../components/MessageInputComponent/Index';

const chatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.warn('Displaying chat room: ', route.params?.id);
  navigation.setOptions({ title: 'Elon Musk' });
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }: { item: any }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
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
