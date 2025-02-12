import React, { useState } from 'react';
import {
  FlatList,
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

  const items = [
    { title: 'Item 1', amount: 100, hexColor: '#FF5733' },
    { title: 'Item 2', amount: 200, hexColor: '#33FF57' },
    { title: 'Item 3', amount: 300, hexColor: '#FFB700' },
    { title: 'Item 4', amount: 400, hexColor: '#FF33A1' },
    { title: 'Item 5', amount: 500, hexColor: '#A133FF' },
    { title: 'Item 6', amount: 600 },
    { title: 'Item 7', amount: 700, hexColor: '#FF5733' },
    { title: 'Item 8', amount: 800, hexColor: '#33FF57' },
    { title: 'Item 9', amount: 900, hexColor: '#3357FF' },
    { title: 'Item 10', amount: 1000, hexColor: '#FF33A1' },
  ];

  const renderItem = ({item}: {
    item: {
      title: string,
      amount: number,
      hexColor?: string
    }
  }) => (
    <CostItem
      title={item.title}
      number={item.amount}
      backgroundColor={item.hexColor ? item.hexColor : '#909090'}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{strings.main_title}</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />

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
      <Button title={strings.add_category} onPress={() => setModalCategoryVisible(true)} style={styles.buttonClose} />
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
  flatList: {
    flexGrow: 1,
    paddingBottom: 0,
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
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default App;
