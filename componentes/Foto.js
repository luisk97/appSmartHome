import { StyleSheet, View , Image } from 'react-native';
import React, {Component} from 'react';
import * as glob from './global/global';

/*
* Componente que permite mostrar la foto
* tomada por la webcam que devue el servidor
*/
export default class Foto extends Component{

    constructor(props){
        super(props);

        this.state = {
            photo: "_"
        }
    }

    /*
    * Esta funcion se comunica con el servidor mediante un metodo GET
    * que retorna como respuesta la fotografia tomada con la webcam
    */
    componentDidMount(){
        fetch(glob.Url+'camara', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                photo: res || ["hola1"]
            });
        })
        .catch((error) => {
            console.error(error);
          })
    }

    //Render devuelve la interfaz para visualizar la imagen
    render(){
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: this.state.photo.foto}}
                    style={styles.image}
                />
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
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
});