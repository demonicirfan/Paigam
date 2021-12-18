import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 10,
  },

  badgeContainer: {
    backgroundColor: '#0000FF',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 6,
    borderColor: 'white',
    borderWidth: 1,
  },
  badgeCount: {
    color: 'white',
  },
  rightContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#444',
  },
  dark: {
    color: '#0000FF',
  },
});
