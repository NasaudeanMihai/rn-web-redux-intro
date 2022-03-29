import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../action';
import S from './style';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);

  const handleImage = () => {
    switch (counter) {
      case '1':
        return (
          <Image
            source={require('../../../assets/icons/0.png')}
            style={S.image}
          />
        );
      case '2':
        return (
          <Image
            source={require('../../../assets/icons/2.png')}
            style={S.image}
          />
        );
      case '3':
        return (
          <Image
            source={require('../../../assets/icons/5.png')}
            style={S.image}
          />
        );
      case '4':
        return (
          <Image
            source={require('../../../assets/icons/8.png')}
            style={S.image}
          />
        );
      case '5':
        return (
          <Image
            source={require('../../../assets/icons/10.png')}
            style={S.image}
          />
        );
      default:
        return (
          <Image
            source={require('../../../assets/icons/0.png')}
            style={S.image}
          />
        );
    }
  };

  return (
    <View style={S.container}>
      {handleImage()}
      <View style={S.wrapperButton}>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={S.button}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={S.button}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
