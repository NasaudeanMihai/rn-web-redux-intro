import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Increment = ({handleIncrement}: any) => (
  <TouchableOpacity onPress={handleIncrement}>
    <Text>increment</Text>
  </TouchableOpacity>
);

export default Increment;
