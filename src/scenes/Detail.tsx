import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../components/Button';
import strings from '../utils/strings';
import Form from './Form';
import { ItemProps } from '../interfaces/ItemProps';
import CostItem from '../components/CostItem';

interface DetailProps {
  itemObj: ItemProps;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detail: React.FC<DetailProps> = ({
  modalVisible,
  setModalVisible,
  itemObj,
}) => {

  const backgroundColorStyle = {backgroundColor: itemObj.hexColor};
  const [modalDisbursementVisible, setModalDisbursementVisible] = useState<boolean>(false);
  const colorObj = itemObj.hexColor || '#c5c5c5';

  const renderItem = ({ item }: {
    item: { title: string, amount: number }
  }) => (
    <CostItem
      title={item.title}
      amount={item.amount}
      hexColor={colorObj}
    />
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={[styles.header, backgroundColorStyle]}>
            <Text style={styles.title}>{itemObj.title}</Text>
            <View style={styles.headerAmountContainer}>
              <Text style={styles.textCurrency}>R$ </Text>
              <Text style={styles.textAmount}>{itemObj.amount}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <>
              <View style={styles.modalContent}>
                <FlatList
                  data={itemObj.expenses}
                  renderItem={renderItem}
                  keyExtractor={(listItem) => listItem.title}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.flatListContent}
                  style={styles.flatList}
                />
              </View>
              <Button
                style={styles.buttonAdd}
                title={strings.button_add}
                onPress={() => setModalDisbursementVisible(true)}
              />
            </>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>

      {itemObj &&
        <Form
          modalVisible={modalDisbursementVisible}
          setModalVisible={setModalDisbursementVisible}
          title={strings.add_disbursement}
          firstLabel={strings.expense_name}
          firstPlaceholder={strings.expense_name_placeholder}
          secondLabel={strings.amount_disbursed}
          secondPlaceholder={strings.amount_disbursed}
        />
      }
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  headerAmountContainer: {
    height: 54,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  textAmount: {
    height: 28,
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
  },
  textCurrency: {
    height: 20,
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonAdd: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'absolute',
    bottom: 0,
  },
  flatList: {
    width: '100%',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 0,
  },
});

export default Detail;
