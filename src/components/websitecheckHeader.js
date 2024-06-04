// src/components/websitecheckHeader.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import  DateTimeDisplay from './datetime';
const CheckHeader = () => {
const [currentDateTime, setCurrentDateTime] = useState(new Date());



  const updateDateTime = () => {
    setCurrentDateTime(new Date());
  };

  
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>WEBSITE CHECKER</Text>
        < DateTimeDisplay currentDateTime ={currentDateTime} />

        
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2980b9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Arial',
  },
});


export default CheckHeader;
