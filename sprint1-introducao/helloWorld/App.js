import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('./src/assets/VitalHub_Logo.png')}
      />

      <Text style={[styles.title]}>
        Entrar ou criar conta
      </Text>

      <TextInput
        style={styles.input}
        defaultValue='exemplo de imput'
      />
      <TextInput
        style={styles.input}
        defaultValue='exemplo de imput'
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 10,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: 'purple',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 50
  },
  input: {
    color: '#49B3BA',
    width: '95%',
    heith: 53,
    borderWidth: 2,
    borderColor: '#49B3BA',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    height: 43,
    backgroundColor: '#496BBA',
    padding: 10,
    borderWidth: 1,
    borderColor: '#496BBA',
    borderRadius: 5
  },
  containerButton: {
    width: '95%',
    height: 43,
    // borderWidth: 1,
    borderColor: '#496BBA',
    borderRadius: 5
  },
  textButton: {
    color: 'white',
  },
});
