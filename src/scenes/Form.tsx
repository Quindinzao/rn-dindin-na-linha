import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Icon from '../assets/svg/Icon';
import strings from '../utils/strings';

interface FormProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  firstLabel: string;
  firstPlaceholder: string;
  secondLabel: string
  secondPlaceholder: string
}

const Form: React.FC<FormProps> = ({modalVisible, setModalVisible}) => {
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
            <Icon />
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TextInput label={strings.expense_name} placeholder={strings.expense_name_placeholder} containerStyle={styles.button} />
              <TextInput label={strings.amount_disbursed} placeholder={strings.amount_disbursed_placeholder} />
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
  line: {
    width: '100%', // Faz a linha ocupar toda a largura da tela
    height: 2, // Espessura da linha
    backgroundColor: '#000', // Cor da linha
    marginVertical: 28, // Espaçamento superior
  },
  button: {
    marginBottom: 20,
  },
  buttonClose: {
    position: 'absolute',
    bottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Faz o modal aparecer na parte inferior
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    height: '80%', // O modal ocupa 80% da altura da tela
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center', // Centraliza o conteúdo
    padding: 20, // Espaçamento interno do modal
  },
  header: {
    width: '100%', // O header ocupa toda a largura
    height: 84, // Altura do componente
    paddingVertical: 16, // Padding vertical em cima e embaixo
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    borderRadius: 8, // Borda arredondada (opcional)
    borderTopLeftRadius: 8, // Correponde a 8px no canto superior esquerdo
    borderTopRightRadius: 8, // Correponde a 8px no canto superior direito
    borderBottomLeftRadius: 0, // 0px no canto inferior esquerdo
    borderBottomRightRadius: 0, // 0px no canto inferior direito
    backgroundColor: '#000', // Cor de fundo preta
  },
});

export default Form;
