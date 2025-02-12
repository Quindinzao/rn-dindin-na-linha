import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './src/components/Button';
import Form from './src/scenes/Form';
import strings from './src/utils/strings';
import CostItem from './src/components/CostItem';

const App: React.FC = () => {

  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalDisbursementVisible, setModalDisbursementVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title={strings.button_add} onPress={() => setModalCategoryVisible(true)} style={styles.buttonClose} />
      <View style={styles.content}>
        <Text style={styles.title}>{strings.main_title}</Text>
        <CostItem title={'Gym'} number={0} backgroundColor="#FFB700" />
      </View>
      <Form
        modalVisible={modalDisbursementVisible}
        setModalVisible={setModalDisbursementVisible}
        title={strings.add_disbursement}
        firstLabel={strings.expense_name}
        firstPlaceholder={strings.expense_name_placeholder}
        secondLabel={strings.amount_disbursed}
        secondPlaceholder={strings.amount_disbursed}
      />
      <Form
        modalVisible={modalCategoryVisible}
        setModalVisible={setModalCategoryVisible}
        title={strings.add_category}
        firstLabel={strings.category_name}
        firstPlaceholder={strings.category_name_placeholder}
        secondLabel={strings.hex_code}
        secondPlaceholder={strings.hex_code_placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#E5E5E5',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    // fontFamily: 'Inter',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
    width: '100%',
    marginVertical: 28,
  },
  buttonClose: {
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default App;
