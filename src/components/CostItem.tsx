import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CostItem: React.FC<{title: string, amount: number, hexColor: string}> = ({
  title,
  amount,
  hexColor,
}) => {

  const amountFormatted = amount.toString().split('.')[0];
  const centsFormatted = amount.toString().split('.')[1].length === 1 ? amount.toString().split('.')[1] + '0' : amount.toString().split('.')[1];

  return (
    <View style={[styles.container, { borderColor: hexColor || '#c5c5c5' }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.amountContainer, { backgroundColor: hexColor || '#c5c5c5' }]}>
        <Text style={styles.symbol}>R$</Text>
        <View style={styles.row}>
          <Text style={styles.amount}>{amountFormatted}</Text>
          {centsFormatted && <Text style={styles.cents}>,{centsFormatted}</Text>}
        </View>
      </View>
    </View>
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
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  amountContainer: {
    width: 78,
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 6,
  },
  symbol: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  amount: {
    color: '#000',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  cents: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

export default CostItem;
