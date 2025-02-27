import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {
  label: string;
  containerStyle?: object;
}

const TextInput: React.FC<TextInputProps> = ({ label, containerStyle, ...props }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        placeholderTextColor="#8E8E8E"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: '#000',
    // fontFamily: 'Inter',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 72,
    paddingVertical: 20,
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#efefef',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

export default TextInput;
