import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Casa from './componentes/Casa';
import Foto from './componentes/Foto';
import Ayuda from './componentes/Ayuda';
import { TextInput } from 'react-native-gesture-handler';
import * as glob from './componentes/global/global';
import icocasa from './assets/casaico.png';
import md5 from 'md5';

 class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      password: ""
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

  _onPressButton() {
    fetch(glob.Url+"login", {  
      method: "POST", 
      headers: {    "Content-type": "application/json"  },  
      body: JSON.stringify({ user: this.state.usuario, password: md5(this.state.password)  })
    }) 
    .then(response => {    console.log(response.status);     return response.json();  })  
    .then(data => {
      console.log(data)
      if(data.resp == 1){
        this.props.navigation.navigate('SmartHome')
        this.setState({
          password: "",
          usuario: ""
        })
      }else if(data.resp == 0){
        this.setState({
          password: ""
        })
        Alert.alert("Contraseña incorrecta")
      }else {
        Alert.alert("Usuario invalido")
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={icocasa}
          style={styles.image}
        />
        <Text>
          Smart Home
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
        <TouchableOpacity
          onPress={() => this._onPressButton()}
          style={styles.button}
        >
          <Text style={styles.text1}>Iniciar Sesion</Text>
        </TouchableOpacity>
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
    backgroundColor: 'gray',
    justifyContent: "flex-start",
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
  },
  button: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    backgroundColor: 'orange',
    alignItems: "center"
  },
  text1:{
    color: 'white'
  },
  image: {
    height: 100, 
    width: 100, 
    borderRadius: 13,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50
}
});

export default createAppContainer(AppNavigator);