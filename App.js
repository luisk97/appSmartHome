import { View, Text, StyleSheet, Button } from 'react-native';
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Casa from './componentes/Casa';
import Foto from './componentes/Foto';
import Ayuda from './componentes/Ayuda';
import { TextInput } from 'react-native-gesture-handler';
import * as glob from './componentes/global/global';

 class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      password: "",
      data1: [],
      data2: []
    }
  }

  componentDidMount(){
    this.setState({
        password: "",
        usuario: ""
    });
  }

  onChangeTexto(text){
    this.setState({
      usuario: text
    })
  }

  onChangePas(text){
    this.setState({
      password: text
    })
  }

  // loadInfo = () 

  _onPressButton() {
    /* fetch(glob.Url+'luces', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        data1: res || ["hola1"]
      });
    })
    fetch(glob.Url+'puertas', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        data2: res || ["hola2"]
      });
    })
    .catch((error) => {
      console.error(error);
    }) */
    this.props.navigation.navigate('SmartHome')
    this.setState({
      password: "",
      usuario: ""
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.state.usuario}
        </Text>
        <Text style={styles.title}>
          {this.state.password}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChangeTexto(text)}
          value={this.state.usuario}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChangePas(text)}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          onPress= {() => this._onPressButton()}
          title= "LOGIN"
          color= "blue"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: HomeScreen
  },
  SmartHome: {
    screen: Casa
  },
  Photo: {
    screen: Foto
  },
  Help: {
    screen: Ayuda
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default createAppContainer(AppNavigator);