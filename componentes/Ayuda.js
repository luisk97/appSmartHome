import { StyleSheet, View , Image } from 'react-native';
import React, {Component} from 'react';
import imagen from '../assets/info.png';

export default class Foto extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Image
                    source={imagen}
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