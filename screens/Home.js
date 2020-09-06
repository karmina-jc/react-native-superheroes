import React, {useState} from 'react'
import { View, Picker, Text, Switch } from 'react-native'

const Home = () => {
    const [id, setId] = useState('')
    const [canFly, setcanFly] = useState(true);
    const toggleSwitch = () => setcanFly(previousState => !previousState);

    return (
        <View>
            <Text>
                Select Superhero id: 
            </Text>
            <Picker
                selectedValue={id}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => setId(itemValue)}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
            </Picker>
            <Text>
                Hero can fly:
            </Text>
            <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={canFly}
            />
        </View>
    )
}

export default Home
