import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ItemProps } from '../interfaces/ItemProps';

interface CategoryCostItemProps {
  item: ItemProps;
  setItem: React.Dispatch<React.SetStateAction<ItemProps | undefined>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryCostItem: React.FC<CategoryCostItemProps> = ({
  item,
  setItem,
  setModalVisible,
}) => {

  const handleSelectItem = () => {
    setItem(item);
    setModalVisible(true);
  };

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: item.hexColor || '#c5c5c5' }]} activeOpacity={0.7} onPress={handleSelectItem}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.symbol}>R$</Text>
        <Text style={styles.amount}>{JSON.stringify(item.amount).split('.')[0]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    height: 84,
    padding: 16,
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountContainer: {
    width: 67,
    height: 63.5,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  symbol: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: -6,
  },
  amount: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: -6,
  },
});

export default CategoryCostItem;
