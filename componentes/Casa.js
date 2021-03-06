import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import camara from '../assets/camara.png';
import bombilloOn from '../assets/bombilloOn.png';
import bombilloOff from '../assets/bombilloOff.png';
import interrogacion from '../assets/pregunta.png';
import * as glob from './global/global';

/*
* Componente que permite mostrar la foto
* tomada por la webcam que devue el servidor
*/
export default class Casa extends Component{

    constructor(props){
        super(props);

        this.state = {
            luzBanio: 0,
            luzCuarto2: 0,
            luzSala: 0,
            luzCuarto1: 0,
            luzCocina: 0,
            puertaPatio: 0,
            puertaCuarto1: 0,
            puertaCuarto2: 0,
            puertaBanio: 0,
            puertaFrente: 0
        }
    }
    
    /*
    * Esta funcion se comunica con el servidor mediante un metodo GET
    * que retorna como respuesta el estado actual de las luces y puertas
    */
    componentDidMount() {
        fetch(glob.Url+'luces', {
          method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            luzBanio: res[0].state || ["hola1"],
            luzCuarto2: res[1].state || ["hola1"],
            luzSala: res[2].state || ["hola1"],
            luzCuarto1: res[3].state || ["hola1"],
            luzCocina: res[4].state || ["hola1"]
          });
        })
        fetch(glob.Url+'puertas', {
          method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            puertaPatio: res[0].state || ["hola1"],
            puertaBanio: 0,
            puertaCuarto2: res[1].state || ["hola1"],
            puertaCuarto1: res[2].state || ["hola1"],
            puertaFrente: res[3].state || ["hola1"]
          });
        })
        .catch((error) => {
          console.error(error);
        })
    }

    /*
    * Esta funcion permite modificar el estado entre encendido y apagado
    * para una habitacion con id = num
    * @param num 
    */
    onPressCuarto(num){
        if (num === 1){
            if(this.state.luzBanio === 1){
                this.setState({
                    luzBanio: 0
                })
                this.fetchOff(1)
            }else{
                this.setState({
                    luzBanio: 1
                })
                this.fetchOn(1)
            }
        }else if(num === 2){
            if(this.state.luzCuarto2 === 1){
                this.setState({
                    luzCuarto2: 0
                })
                this.fetchOff(2)
            } else {
                this.setState({
                    luzCuarto2: 1
                })
                this.fetchOn(2)
            }
        }else if(num === 3){
            if(this.state.luzSala === 1){
                this.setState({
                    luzSala: 0
                })
                this.fetchOff(3)
            } else {
                this.setState({
                    luzSala: 1
                })
                this.fetchOn(3)
            }
        }else if(num === 4){
            if(this.state.luzCuarto1 === 1){
                this.setState({
                    luzCuarto1: 0
                })
                this.fetchOff(4)
            } else {
                this.setState({
                    luzCuarto1: 1
                })
                this.fetchOn(4)
            }
        }else{
            if(this.state.luzCocina === 1){
                this.setState({
                    luzCocina: 0
                })
                this.fetchOff(5)
            } else {
                this.setState({
                    luzCocina: 1
                })
                this.fetchOn(5)
            }
        }
        
    }

    /*
    * Esta funcion se comunica con el servidor mediante un metodo PATCH
    * para modificar el estado de las luces a encendido
    */
    fetchOn(num){
        fetch(glob.Url+"luces/"+num, {  
            method: "PATCH", 
            headers: {    "Content-type": "application/json"  },  
            body: JSON.stringify({ state: 1  })
        }) 
        .then(response => {    console.log(response.status);     return response.json();  })  
        .then(data => console.log(data));
    }

    /*
    * Esta funcion se comunica con el servidor mediante un metodo PATCH
    * para modificar el estado de las luces a apagado
    */
    fetchOff(num){
        fetch(glob.Url+"luces/"+num, {  
            method: "PATCH", 
            headers: {    "Content-type": "application/json"  },  
            body: JSON.stringify({ state: 0  })
        }) 
        .then(response => {    console.log(response.status);     return response.json();  })  
        .then(data => console.log(data));
    }
    onPressPuertas(){
        fetch(glob.Url+'puertas', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
        this.setState({
            puertaPatio: res[0].state || ["hola1"],
            puertaBanio: 0,
            puertaCuarto2: res[1].state || ["hola1"],
            puertaCuarto1: res[2].state || ["hola1"],
            puertaFrente: res[3].state || ["hola1"]
        });
        })
        .catch((error) => {
        console.error(error);
        })
    }

    /*
    * Esta funcion permite encender todas las luces
    */
    onPressCasaOn(){
        this.setState({
            luzCuarto1: 1,
            luzCuarto2: 1,
            luzSala: 1,
            luzBanio: 1,
            luzCocina: 1
        })
        this.fetchOn(1)
        this.fetchOn(2)
        this.fetchOn(3)
        this.fetchOn(4)
        this.fetchOn(5)
    }

    /*
    * Esta funcion permite apagar todas las luces
    */
    onPressCasaOff(){
        this.setState({
            luzCuarto1: 0,
            luzCuarto2: 0,
            luzSala: 0,
            luzBanio: 0,
            luzCocina: 0
        })
        this.fetchOff(1)
        this.fetchOff(2)
        this.fetchOff(3)
        this.fetchOff(4)
        this.fetchOff(5)
    }

    /*
    * Esta funcion cambia la pantalla a la vista para visualizar la foto
    */
    onPressCamara(){
        this.props.navigation.navigate('Photo')
    }

    /*
    * Esta funcion cambia la pantalla a la vista de ayuda
    */
    onPressHelp(){
        this.props.navigation.navigate('Help')
    }

    //Render devuelve la interfaz con la vista de la casa
    render(){
        return (
            <View style={styles.container}>

                {/* Casa */}
                <View style={styles.casa}>

                    {/* Patio */}
                    <View style={styles.sectionh}>
                        <TouchableOpacity
                            onPress={() => this.onPressPuertas()}
                            style={[styles.patio, styles.texto]}
                            activeOpacity={1}
                        >
                            <Text>Patio</Text>
                        </TouchableOpacity>
                        {/* </View> */}
                    </View>

                    {/* Pared 1 */}
                    <View style={styles.paredh}>
                        <View style={[styles.rellenopared, styles.two]}></View>
                        <View style={[this.state.puertaPatio == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                        <View style={[styles.rellenopared, styles.two]}></View>
                    </View>
                    
                    {/* Cuarto 2 y Ba??o */}
                    <View style={styles.sectionh}>
                        <View style={[this.state.luzBanio == 1 ? styles.sectionvon : styles.sectionvoff, styles.two, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(1)}
                            >
                                <Text>Ba??o</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[this.state.puertaBanio == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
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

                    {/* Sala y Cuarto 1 */}
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
                            <View style={[this.state.puertaCuarto1 == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
                            <View style={[styles.rellenopared, styles.one]}></View>
                        </View>
                        <View style={[this.state.luzCuarto1 == 1 ? styles.sectionvon : styles.sectionvoff, styles.one, styles.texto]}>
                            <TouchableOpacity
                                onPress={() => this.onPressCuarto(4)}
                            >
                                <Text>Cuarto 1</Text>
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
                        <View style={[styles.patio, styles.one]}>
                            <TouchableOpacity
                                onPress={() => this.onPressPuertas()}
                                style={[styles.patio, styles.texto]}
                                activeOpacity={1}
                            >
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paredv]}>
                            <View style={[styles.rellenopared, styles.one]}></View>
                            <View style={[this.state.puertaFrente == 1 ? styles.puertabierta : styles.puertacerrada]}></View>
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

                {/* Botones de Control */}
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

//Estilos de la interfaz
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
        borderRadius: 13,
        marginLeft: 20,
        marginRight: 20
    }
  });