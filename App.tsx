import React, { useState } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button';
import Form from './src/scenes/Form';
import strings from './src/utils/strings';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#FFF',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Button title={strings.button_add} onPress={() => setModalVisible(true)} style={styles.buttonClose} />
      <View style={styles.content} />
      <Form modalVisible={modalVisible} setModalVisible={setModalVisible} firstLabel={strings.expense_name} firstPlaceholder={strings.expense_name_placeholder} secondLabel={strings.amount_disbursed} secondPlaceholder={strings.amount_disbursed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  buttonClose: {
    position: 'absolute',
    bottom: 0,
  },
});

export default App;
