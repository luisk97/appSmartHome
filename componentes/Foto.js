import { StyleSheet, View , Image } from 'react-native';
import React, {Component} from 'react';
import * as glob from './global/global';

export default class Foto extends Component{

    constructor(props){
        super(props);

        this.state = {
            photo: "lml"
        }
    }

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