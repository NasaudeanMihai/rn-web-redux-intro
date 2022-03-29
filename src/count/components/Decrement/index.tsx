import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Decrement = ({handleDecrement}: any) => (
  <TouchableOpacity onPress={handleDecrement}>
    <Text>decrement</Text>
  </TouchableOpacity>
);

export default Decrement;
