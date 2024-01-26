
import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>

      <Person name='Eduardo' age={18}/>
      <Person name='Guti' age={17}/>
      <Person name='Vinicius' age={18}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
