import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles';

const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('ChatRoom', { id: chatRoom.id });
  };
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
      <Pressable onPress={onPressHandler} style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={chatRoom.lastMessage.createdAt > 0 ? styles.dark : styles.text}
        >
          {chatRoom.lastMessage.content}
        </Text>
      </Pressable>
    </View>
  );
};

export default ChatRoomItem;
