import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'

class HomeScreen extends Component{
    render(){
        return(
            <View>
            <Text>This is the HomeScreen</Text>
            </View>

        );
    }
}

class Notification extends Component{
    render(){
        return(
            <View>
            <Text> This is the Notification Screen </Text>

            </View>
        );
    }
}


const HomeScreenTabNavigator = TabNavigator({
    HomeScreen: {
        screen : HomeScreen
    },
    Notifications : {
        screen: Notification 
    }
},{
    animationEnabled: true
});

export default HomeScreenTabNavigator;