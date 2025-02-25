import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // TouchableOpacity
} from 'react-native';
// import IconEdit from '../assets/svg/IconEdit';

const CostItem: React.FC<{
  title: string,
  amount: number,
  hexColor: string,
  // setItemEdit: React.Dispatch<React.SetStateAction<{title: string, amount: number}>>
}> = ({
  title,
  amount,
  hexColor,
  // setItemEdit,
}) => {

  const amountSplitted = amount.toString().split('.');
  const amountFormatted = amountSplitted[0];
  const centsFormatted = amountSplitted[1].length === 1 ? amountSplitted[1] + '0' : amountSplitted[1];

  return (
    <View style={[styles.container, { borderColor: hexColor || '#c5c5c5' }]}>
      <Text style={styles.title}>{title}</Text>
      {/* <TouchableOpacity activeOpacity={0.7} style={styles.editButton} onPress={() => setItemEdit({title, amount})}><IconEdit width={32} height={32} /></TouchableOpacity> */}
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
  editButton: {
    width: 32,
    height: 32,
    marginRight: 72,
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
    lineHeight: 13,
  },
});

export default CostItem;
