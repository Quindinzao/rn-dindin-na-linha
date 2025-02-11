import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 72,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#000',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
});

export default Button;
