import React from 'react';
import {View, Text} from 'react-native';
import Decrement from '../components/Decrement';
import Increment from '../components/Increment';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counterReducer);

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());
  return (
    <View>
      <Increment handleIncrement={handleIncrement} />
      <Decrement handleDecrement={handleDecrement} />

      <Text>{counter}</Text>
    </View>
  );
};

export default HomeScreen;
