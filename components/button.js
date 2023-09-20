import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Botao() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
           Alert.alert('Top música do meu cantor favorito!')
        }}
      >
        <Text style={styles.buttonText}>Top música do meu cantor favorito!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fffd78',
    padding: 15,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
