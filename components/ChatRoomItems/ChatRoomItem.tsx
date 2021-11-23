import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './styles';

const ChatRoomItem = ({ chatRoom }: { chatRoom: any }) => {
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {chatRoom.lastMessage.unreadMessages > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeCount}>
            {chatRoom.lastMessage.unreadMessages}
          </Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode='head'
          style={chatRoom.lastMessage.createdAt > 0 ? styles.dark : styles.text}
        >
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
