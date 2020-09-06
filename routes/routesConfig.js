import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'

const screens = {
    Home: {
        screen: Home
    }
}

const defaultStack = createStackNavigator(screens);

export default createAppContainer(defaultStack);


