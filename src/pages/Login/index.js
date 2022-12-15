import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Login() {
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

            <View style={styles.mensagem}>
                <Text style={styles.nome}>Login</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.tituloForm}>Email</Text>
                <TextInput
                placeholder='Digite seu email'
                style={styles.input}
                />

                <Text style={styles.tituloForm}>Senha</Text>
                <TextInput
                placeholder='Digite sua senha'
                style={styles.input}
                />

                <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('OpcoesConta')}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoRegistro}>
                    <Text style={styles.registroTexto}>Ainda não possui uma conta? Cadastre-se por aqui!</Text>
                </TouchableOpacity>

            </View>


            
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
    mensagem:{
        flex:1,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        paddingStart: '8%',
        paddingEnd: '5%'
    },
    nome:{
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: '5%'
    },
    containerForm: {
        flex: 2,
        width: '100%',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    tituloForm: {
        fontSize: 24,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 30,
        marginBottom: 15,
        fontSize: 19
    },
    botao:{
        backgroundColor: '#2D90A6',
        width: '100%',
        borderRadius: 50,
        paddingVertical: 10,
        marginTop: 12,
        justifyContent: 'center'
    },
    textoBotao: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center',
        color: '#FFF'
    },
    botaoRegistro: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registroTexto: {
        color: '#000'
    }
})