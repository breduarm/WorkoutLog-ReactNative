import React from 'react';
import { Pressable, Text } from 'react-native';
import globalStyles from '../styles/global';

const WLButton = ({ styles, title }) => {
  return (
    <>
      <Pressable style={[globalStyles.buttonContainer, styles]}>
        <Text style={globalStyles.buttonText}>{title}</Text>
      </Pressable>
    </>
  );
};

export default WLButton;
