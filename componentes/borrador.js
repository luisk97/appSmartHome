import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import camara from '../assets/camara.png';
import bombilloOn from '../assets/bombilloOn.png';
import bombilloOff from '../assets/bombilloOff.png';
import interrogacion from '../assets/pregunta.png';

export default class Casa extends Component{

    constructor(props){
        super(props);

        this.state = {
            luzCuarto1: this.props.navigation.state.params.luces[0].state,
            luzCuarto2: this.props.navigation.state.params.luces[1].state,
            luzSala: this.props.navigation.state.params.luces[2].state,
            luzBanio: this.props.navigation.state.params.luces[3].state,
            luzCocina: this.props.navigation.state.params.luces[4].state,
            puertaPatio: this.props.navigation.state.params.puertas[0].state,
            puertaCuarto1: this.props.navigation.state.params.puertas[1].state,
            puertaCuarto2: this.props.navigation.state.params.puertas[2].state,
            puertaBanio: this.props.navigation.state.params.puertas[3].state,
            puertaFrente: this.props.navigation.state.params.puertas[4].state,
        }
    }

    onPressCuarto(num){
        if (num === 1){
            if(this.state.luzCuarto1 === 1){
                this.setState({
                    luzCuarto1: 0
                })
            }else{
                this.setState({
                    luzCuarto1: 1
                })
            }
        }else if(num === 2){
            if(this.state.luzCuarto2 === 1){
                this.setState({
                    luzCuarto2: 0
                })
            } else {
                this.setState({
                    luzCuarto2: 1
                })
            }
        }else if(num === 3){
            if(this.state.luzSala === 1){
                this.setState({
                    luzSala: 0
                })
            } else {
                this.setState({
                    luzSala: 1
                })
            }
        }else if(num === 4){
            if(this.state.luzBanio === 1){
                this.setState({
                    luzBanio: 0
                })
            } else {
                this.setState({
                    luzBanio: 1
                })
            }
        }else{
            if(this.state.luzCocina === 1){
                this.setState({
                    luzCocina: 0
                })
            } else {
                this.setState({
                    luzCocina: 1
                })
            }
        }
        
    }

    onPressCasaOn(){
        this.setState({
            luzCuarto1: 1,
            luzCuarto2: 1,
            luzSala: 1,
            luzBanio: 1,
            luzCocina: 1
        })
    }

    onPressCasaOff(){
        this.setState({
            luzCuarto1: 0,
            luzCuarto2: 0,
            luzSala: 0,
            luzBanio: 0,
            luzCocina: 0
        })
    }

    onPressCamara(){
        this.props.navigation.navigate('Photo')
    }

    onPressHelp(){
        this.props.navigation.navigate('Help')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.casa}>

                    {/* <Text>Luces:</Text>
                    <Text>{JSON.stringify(this.props.navigation.state.params.luces)}</Text>
                    <Text>Puertas:</Text>
                    <Text>{JSON.stringify(this.props.navigation.state.params.puertas)}</Text> */}

                    {/* Patio */}
                    <View style={styles.sectionh}>
                        <View style={[styles.patio, styles.texto]}>
                            <Text>Patio</Text>
                        </View>
                    </View>

                    {/* Pared 1 */}
                    <View style={styles.paredh}>
                        <View style={[styles.rellenopared, styles.two]}></View>
                        <View style={[this.state.puertaPatio == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                        <View style={[styles.rellenopared, styles.two]}></View>
                    </View>
                    
                    {/* Cuartos */}
                    <View style={styles.sectionh}>
                        <View style={[this.state.luzCuarto1 == 1 ? styles.sectionvon : styles.sectionvoff, styles.two, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(1)}
                            >
                                <Text>Cuarto 1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[this.state.puertaCuarto1 == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                            <View style={[styles.rellenopared, styles.one]}></View>
                        </View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[this.state.puertaCuarto2 == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                            <View style={[styles.rellenopared, styles.one]}></View>
                        </View>
                        <View style={[this.state.luzCuarto2 == 1 ? styles.sectionvon : styles.sectionvoff, styles.two, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(2)}
                            >
                                <Text>Cuarto 2</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            
                    {/* Pared 2 */}
                    <View style={styles.paredh}>
                        <View style={[styles.rellenopared, styles.two]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.rellenopared, styles.two]}></View>
                    </View>

                    {/* Sala y baño */}
                    <View style={styles.sectionh}>
                        <View style={[this.state.luzSala == 1 ? styles.sectionvon : styles.sectionvoff, styles.two, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(3)}
                            >
                                <Text>Sala</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[this.state.puertaFrente == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                            <View style={[styles.rellenopared, styles.one]}></View>
                        </View>
                        <View style={[this.state.luzBanio == 1 ? styles.sectionvon : styles.sectionvoff, styles.one, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(4)}
                            >
                                <Text>Baño</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Pared 3 */}
                    <View style={styles.paredh}>
                        <View style={[styles.rellenopared, styles.two]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.rellenopared, styles.two]}></View>
                    </View>

                    {/* Cocina */}
                    <View style={styles.sectionh}>
                        <View style={[styles.patio, styles.one]}></View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[styles.puertabierta]}></View>
                            <View style={[styles.rellenopared, styles.one]}></View>
                        </View>
                        <View style={[this.state.luzCocina == 1 ? styles.sectionvon : styles.sectionvoff, styles.two, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(5)}
                            >
                                <Text>Cocina</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={[styles.botones,styles.texto]}>
                    <TouchableOpacity
                        onPress={() => this.onPressCamara()}
                    >
                        <Image
                            source={camara}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onPressCasaOn()}
                    >
                        <Image
                            source={bombilloOn}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onPressCasaOff()}
                    >
                        <Image
                            source={bombilloOff}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onPressHelp()}
                    >
                        <Image
                            source={interrogacion}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    casa: {
        flex: 6,
        backgroundColor: 'white'
    },
    botones:{
        flex: .5,
        flexDirection: 'row',
        backgroundColor: 'orange'
    },
    sectionh: {
        flex: 1,
        flexDirection: 'row'
    },
    sectionvon: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    sectionvoff: {
        flex: 1,
        backgroundColor: '#333'
    },
    paredh: {
        flex: .1,
        flexDirection: 'row'
    },
    rellenopared: {
        backgroundColor: 'black'
    },
    paredv: {
        flex: .1,
        backgroundColor: 'black'
    },
    puertacerrada: {
        backgroundColor: 'red',
        flex: .6
    },
    puertabierta: {
        backgroundColor: 'chartreuse',
        flex: .6
    },
    patio: {
        flex: 1,
        backgroundColor: 'green'
    },
    box: {
        flex: 1,
        backgroundColor: '#333'
    },
    two: {
        flex: 2
    },
    one: {
        flex: 1
    },
    texto: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 40, 
        width: 40, 
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20
    }
  });

  import { View, Text, StyleSheet, Button } from 'react-native';
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Casa from './componentes/Casa';
import Foto from './componentes/Foto';
import Ayuda from './componentes/Ayuda';
import { TextInput } from 'react-native-gesture-handler';

 class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      password: "",
      data1: [
        {
          "id": 1,
          "state": 0
        },
        {
          "id": 2,
          "state": 0
        },
        {
          "id": 3,
          "state": 0
        },
        {
          "id": 4,
          "state": 0
        },
        {
          "id": 5,
          "state": 0
        }
      ],
      data2: [
        { 
          "id": 1,
          "state": 0
        },
        {
          "id": 2,
          "state": 0
        },
        {
          "id": 3,
          "state": 0
        },
        {
          "id": 4,
          "state": 0
        },
        {
          "id": 5,
          "state": 0
        }
      ]
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
    fetch('http://192.168.1.4:4000/luces', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        data1: res || ["hola1"]
      });
    })
    fetch('http://192.168.1.4:4000/puertas', {
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
    })
    .then(this.props.navigation.navigate('SmartHome',{luces: this.state.data1, puertas: this.state.data2}))
    .then(this.setState({
      password: "",
      usuario: ""
    })
    );
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

fetch("https://jsonplaceholder.typicode.com/posts/1", {  
    method: "PATCH", 
    headers: {    "Content-type": "application/json"  },  
    body: JSON.stringify({    title: "Corrected post"  })
}) 
.then(response => {    console.log(response.status);     return response.json();  })  
.then(data => console.log(data));