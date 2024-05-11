import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import estilos from './styles';
import { useState } from 'react';

export default function Cadastro() {
const [nome, setNome] = useState('');
const [tel, setTel] = useState('');
const [nascimento, setNascimento] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('')

    return (
        <View style={estilos.container}>
        
        <Text style={estilos.texto}>
        </Text> 
        <Image
            style={estilos.logo} 
            source={require('../../../assets/logoCalculae.png')}>
        </Image>

        <TextInput
        placeholder='Nome:'
        onChangeText={(nome) => setNome(nome)}
        style={estilos.nome}/>

        
        <View style={estilos.linha}>
        <TextInput
        placeholder='Telefone:'
        onChangeText={(tel) => setTel(tel)}
        style={estilos.telefone}/>

        <TextInput
        placeholder='Nascimento:'
        onChangeText={(nascimento) => setNascimento(nascimento)}
        style={estilos.nascimento}/>

        </View>

        <View style={estilos.esquerda}>
        <TextInput
        placeholder='E-mail:'
        onChangeText={(email) => setEmail(email)}
        style={estilos.email}/>

        <TextInput
        placeholder='Cadastre sua Senha:'
        onChangeText={(senha) => setSenha(senha)}
        style={estilos.senha}/>
        </View>

        <TouchableOpacity 
            style={estilos.botao}>
            <Text>
                Confirmar
            </Text>
        </TouchableOpacity>


        </View>
    );
}