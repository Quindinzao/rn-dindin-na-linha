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
import CategoryCostItem from './src/components/CategoryCostItem';
import Detail from './src/scenes/Detail';
import { ItemProps } from './src/interfaces/ItemProps';

const App: React.FC = () => {

  const [item, setItem] = useState<ItemProps>();
  const [modalItemVisible, setModalItemVisible] = useState<boolean>(false);
  const [modalCategoryVisible, setModalCategoryVisible] = useState<boolean>(false);

  const items = [
    { title: 'Gym', amount: 280.09, hexColor: '#FFB700', expenses: [
      { title: 'Mensalidade', amount: 100.20 },
      { title: 'Creatina', amount: 109.99 },
      { title: 'Whey', amount: 69.90 },
    ] },
    { title: 'Item 2', amount: 200, hexColor: '#F13B81' },
    { title: 'Item 3', amount: 300, hexColor: '#00A2CF' },
    { title: 'Item 4', amount: 400, hexColor: '#2BD434' },
  ];

  const renderItem = ({item: listItem}: {
    item: ItemProps
  }) => (
    <CategoryCostItem
      item={listItem}
      setItem={setItem}
      setModalVisible={setModalItemVisible}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{strings.main_title}</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(listItem) => listItem.title}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <Form
        modalVisible={modalCategoryVisible}
        setModalVisible={setModalCategoryVisible}
        title={strings.add_category}
        firstLabel={strings.category_name}
        firstPlaceholder={strings.category_name_placeholder}
        secondLabel={strings.hex_code}
        secondPlaceholder={strings.hex_code_placeholder}
      />
      {item &&
        <Detail
          itemObj={item}
          modalVisible={modalItemVisible}
          setModalVisible={setModalItemVisible}
        />
      }
      <Button title={strings.add_category} onPress={() => setModalCategoryVisible(true)} style={styles.buttonAddCategory} />
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
  buttonAddCategory: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default App;
