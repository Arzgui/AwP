/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import CheckHeader from './src/components/websitecheckHeader';
import CheckFooter from './src/components/websitecheckFooter';
import ListItem from './src/components/listItem';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  
  const items = [
    "Scène I: Divorce",
    "Scène II: Ménage",
    "Scène III:Attente",
    "Scène IV:Clefs",
    "Scène V:La Part de moi",
    "Scène VI: Filtre",
    "Scène VII: Mémoire",
    "Scène VIII: Mariage",
    "Scène VIII: RAM",
    "Scène IX: RAM",
  ];

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <CheckHeader />
        <ScrollView style={styles.container} >
        {items.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}

          <CheckFooter />
        </ScrollView>
       
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 5,
    padding: 10,
  },
  block: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#12acff', // Utilisation correcte de backgroundColor
  },
  blockText: {
    fontSize: 18,
    color: '#6D071A',
  },
 
});

export default App;
