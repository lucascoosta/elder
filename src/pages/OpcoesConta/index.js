import React from 'react';
import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function OpcoesConta() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>


            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.containerFrase}>
                <Text style={styles.titulo}>Quem é você ?</Text>
            </View>
        

            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Cuidador</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Paciente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Próximo</Text>
            </TouchableOpacity>
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
        flex:2,
        alignSelf: 'center',
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
        backgroundColor: '#2D90A6',
        borderRadius: 50,
        paddingVertical: 8,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        bottom: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25

    },
    botaoTexto:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    }
})
