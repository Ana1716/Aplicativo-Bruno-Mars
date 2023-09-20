import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExamplui() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>▶ Talking to the moon</Text>
      <Image style={styles.logo} source={require('../assets/musica2.jpg')} />
      <Text style={styles.paragraph}>✨ Youtube ✨</Text>
      <Text style={styles.paragraph}>✨ Spotify ✨</Text>
      <Text style={styles.paragraph}>✨ Apple Music ✨</Text>
      <Text style={styles.paragraph}>✨ Youtube Music ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centralizar horizontalmente
    padding: 12,
    width: '80%',
    backgroundColor: '#111111',
    margin: 15,
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    height: 200,
    width: '90%',
  },
});
