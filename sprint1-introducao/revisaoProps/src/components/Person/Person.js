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
        opacity: 0.7,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 22,
        color: 'purple',
        fontFamily: 'Poppins_300Light'
    },
    age: {
        fontSize: 18,
        fontFamily: 'PoorStory_400Regular',
        color: 'black'
    }
})

export default Person;