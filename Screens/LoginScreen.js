import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

class LoginScreen extends Component{
    render(){
        return(
            <View>
            <Text>This is the LoginScreen</Text>
            <Button onPress={()=>
            this.props.navigation.navigate('HomeScreen')}
            title="Go to the Home Screen"></Button>
            </View>

        );
    }

}

const LoginScreenStackNavigator = StackNavigator({
  LoginScreen : { screen: LoginScreen},
  HomeScreen : { screen : HomeScreen}

})

export default LoginScreenStackNavigator;