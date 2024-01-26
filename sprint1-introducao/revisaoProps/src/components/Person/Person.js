import { Text, View, StyleSheet } from "react-native";


const Person = ({name, age}) => {
    return(     
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>
            <Text style={styles.age}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#cccc',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        color: 'purple'
    },
    age: {
        fontSize: 18,
        color: 'darkgreen'
    }
})

export default Person;