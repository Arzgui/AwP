// src/components/ListItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ text }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.blockText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    block: {
      borderWidth: 1,
      borderColor: '#2980b9', // Couleur de la bordure harmonisée avec le header et le footer
      padding: 20,
      marginBottom: 15,
      backgroundColor: '#3498db', // Utilisation d'une couleur de fond similaire
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3, // Ajout d'une ombre douce
      shadowRadius: 5,
      elevation: 3, // Effet d'élévation pour Android
      transition: 'all 0.3s ease', // Effet de transition pour une animation fluide
    },
    blockText: {
      fontSize: 20, // Augmentation de la taille de la police pour améliorer la lisibilité
      fontWeight: 'bold', // Utilisation d'une police de caractères en gras
      color: '#fff', // Couleur du texte blanche pour un bon contraste
      textAlign: 'center', // Centrage du texte
      fontFamily: 'Arial', // Utilisation d'une police de caractères élégante
    },
  });


export default ListItem;
