import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CostItemProps {
  title: string;
  number: number;
  backgroundColor?: string;
}

const CostItem: React.FC<CostItemProps> = ({ title, number, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor || '#c5c5c5' }]} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.number}>{number}</Text>
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
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CostItem;
