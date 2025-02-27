
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from './src/components/Button';
import Form from './src/scenes/Form';
import strings from './src/utils/strings';
import CategoryCostItem from './src/components/CategoryCostItem';
import Detail from './src/scenes/Detail';
import { ItemProps } from './src/interfaces/ItemProps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconDelete from './src/assets/svg/IconDelete';

const App: React.FC = () => {

  const [item, setItem] = useState<ItemProps>();
  const [items, setItems] = useState<ItemProps[]>([]);
  const [modalItemVisible, setModalItemVisible] = useState<boolean>(false);
  const [modalCategoryVisible, setModalCategoryVisible] = useState<boolean>(false);

  const handleAddCategory = async (title: string, hexColor: string) => {
    const value = { title, hexColor, amount: 0 };
    setItems([...items, value]);
    setModalCategoryVisible(false);
    try {
      await AsyncStorage.setItem('meus-gastos', JSON.stringify([...items, value]));
    } catch (e) {
      Alert.alert(strings.error, strings.error_add_category);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await AsyncStorage.removeItem('meus-gastos');
      setItems([]);
      Alert.alert(strings.success, strings.success_delete_all);
    } catch (e) {
      Alert.alert(strings.error, strings.error_delete_all);
    }
  };

  const isDeleteAll = () => {
    Alert.alert(
      strings.delete_all, strings.confirm_delete_all,
      [
        {
          text: strings.cancel,
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: strings.delete,
          onPress: () => handleDeleteAll(),
        },
      ],
    );
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('meus-gastos');
      if (value === null) {
        await AsyncStorage.setItem('meus-gastos', JSON.stringify([]));
        setItems([]);
      } else {
        const parsedData = JSON.parse(value);
        setItems(parsedData);
      }
    } catch (e) {
      Alert.alert(strings.error, strings.error_read_data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        <View style={styles.header}>
          <Text style={styles.title}>{strings.main_title}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={isDeleteAll}><IconDelete /></TouchableOpacity>
        </View>
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
        onPress={handleAddCategory}
      />
      {item &&
        <Detail
          itemObj={item}
          modalVisible={modalItemVisible}
          setModalVisible={setModalItemVisible}
        />
      }
      <Button
        title={strings.add_category}
        onPress={() => setModalCategoryVisible(true)}
        style={styles.buttonAddCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
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
