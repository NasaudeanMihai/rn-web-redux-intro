import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperButton: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'gray',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 70,
    height: 90,
    marginBottom: 30,
  },
});

export default styles;
