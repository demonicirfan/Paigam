import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const myId = 'u1';

const Message = ({ message }: { message: any }) => {
  const isMe = message.user.id === myId;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.leftContainer : styles.rightContainer,
      ]}
    >
      <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  leftContainer: {
    backgroundColor: '#d1d1d1',
    marginLeft: 'auto',
    marginRight: 10,
  },
  rightContainer: {
    backgroundColor: '#0000ff',
    marginLeft: 10,
    marginRight: 'auto',
  },
  text: {
    color: '#fff',
  },
});
