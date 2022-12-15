
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerFrase}>
                <Text style={styles.titulo}>Elder's Home, pode não ser o seu hoje, mas será o seu amanhã!</Text>

                <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.botaoTexto}>Vamos começar!</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFrase:{
        flex:1,
        backgroundColor: '#FFF',
        paddingStart: '8%',
        paddingEnd: '5%'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        bottom: '30%',
        marginTop: 28,
        marginBottom: 12
    },
    botao:{
        position: 'absolute',
        backgroundColor: '#2D90A6',
        borderRadius: 50,
        paddingVertical: 8,
        width: '90%',
        height: '22%',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoTexto:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    }
})