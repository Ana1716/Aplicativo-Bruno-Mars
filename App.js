import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Musicaum from './components/musica1';
import Musicadois from './components/musica2';

import Button from './components/button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.titulo}>As melhores músicas de Bruno Mars</Text>
        <Musicaum />
        <Musicadois />
        <Button />
        <Text style={styles.paragraph}>Ana Letícia - 3º C</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000287',
    padding: 8,
  },
  scrollViewContent: {
    alignItems: 'center', // Centralizar horizontalmente
    justifyContent: 'center', // Centralizar verticalmente (opcional)
  },
  paragraph: {
    margin: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fffd78',
    backgroundColor: '#111111',
    width: '100%',
    padding: 22,
  },

  titulo: {
    padding: 18,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    color: '#fffd78',
  },
});
