import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

const Index = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn('sending: ', message);

    setMessage('');
  };

  const onPlusClicked = () => {
    console.warn('Enter message to send');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesome
          name='smile-o'
          size={24}
          color='black'
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder='Write Your Paigam....'
        />
        {message ? (
          <AntDesign
            name='plus'
            size={24}
            color='#000'
            style={{ marginHorizontal: 5 }}
          />
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <Feather name='camera' size={24} color='black' />
            <MaterialCommunityIcons
              name='microphone-outline'
              size={24}
              color='black'
              style={{ marginHorizontal: 5 }}
            />
          </View>
        )}
      </View>
      <Pressable style={styles.buttonContainer} onPress={onPress}>
        {message ? (
          <Ionicons name='send' size={24} color='#fff' />
        ) : (
          <AntDesign name='plus' size={24} color='#fff' />
        )}
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    color: '#d3d3d3',
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#0000ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 35,
  },
});
