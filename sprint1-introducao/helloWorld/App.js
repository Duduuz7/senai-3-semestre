import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={[styles.heading]}>
          Hello World !!!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  heading: {
    color: 'purple',
    fontSize: 30,
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
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 50
  },
});
