import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ItemProps } from '../interfaces/ItemProps';



interface CostItemProps {
  item: ItemProps;
  setItem: React.Dispatch<React.SetStateAction<ItemProps | undefined>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CostItem: React.FC<CostItemProps> = ({
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
      <View>
        <Text style={styles.amount}>{item.amount}</Text>
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
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CostItem;
