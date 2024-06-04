// src/components/websitecheckHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>BLACKOUT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#2980b9',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    footerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontFamily: 'Arial',
    },
  });
  
  

export default CheckFooter;
