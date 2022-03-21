import { StyleSheet, Text, View , Image } from 'react-native';
import React, {Component} from 'react';
import Casa from './Casa';

export default class SmartHome extends Component{

    constructor(props){
        super(props);

        this.state = {
            luces: this.props.navigation.state.params.luces,
            puertas: this.props.navigation.state.params.puertas
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.casa}>
                    {/* <Text>Luces:</Text>
                    <Text>{this.state.luces}</Text>
                    <Text>Puertas:</Text>
                    <Text>{this.state.puertas}</Text> */}
                    <Casa luces={this.state.luces} puertas={this.state.puertas}/>
                </View>
                <View style={styles.botones}>
                    {/* <Botones/> */}
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
        flex: 5,
        backgroundColor: 'white'
    },
    botones:{
        flex: 1,
        backgroundColor: 'orange'
    }
});