import React, {useState} from 'react'
import {StyleSheet, View, Picker, Text, Switch } from 'react-native'

const Home = () => {
    const [id, setId] = useState('')
    const [canFly, setcanFly] = useState(true);
    const toggleSwitch = () => setcanFly(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.option}>
                <Text style={{padding: 10,}}>
                    Select Superhero id: 
                </Text>
                <Picker
                    selectedValue={id}
                    style={styles.piker}
                    onValueChange={(itemValue) => setId(itemValue)}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                </Picker>
            </View>
          
            <View style={styles.option}>
                <Text>
                    Hero can fly:
                </Text>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={canFly}    
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    option: {
        flexDirection: 'row',
    },
    piker: {
        height: 40, 
        width: 80,
    }

  });

export default Home
