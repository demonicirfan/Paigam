import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/74172466?v=4',
        }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Irfan</Text>
          <Text style={styles.text}>11:11</Text>
        </View>
        <Text style={styles.text}>Last Message</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,

  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 20,
    color: '#444',
  },
});
