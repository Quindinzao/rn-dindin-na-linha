import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import IconLogo from '../assets/svg/IconLogo';
import strings from '../utils/strings';

interface FormProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  firstLabel: string;
  firstPlaceholder: string;
  secondLabel: string
  secondPlaceholder: string
}

const Form: React.FC<FormProps> = ({
  modalVisible,
  setModalVisible,
  title,
  firstLabel,
  firstPlaceholder,
  secondLabel,
  secondPlaceholder,
}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <IconLogo />
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.title}>{title}</Text>
              <TextInput label={firstLabel} placeholder={firstPlaceholder} containerStyle={styles.button} />
              <TextInput label={secondLabel} placeholder={secondPlaceholder} />
              <View style={styles.line} />
              <Button title={strings.button_add} onPress={() => Alert.alert('R')} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    height: 84,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#000',
  },
  title: {
    color: '#000',
    // fontFamily: 'Inter',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    marginTop: 2,
    marginBottom: 28,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 28,
  },
  button: {
    marginBottom: 20,
  },
  buttonClose: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Form;
