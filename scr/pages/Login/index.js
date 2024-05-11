import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import estilos from './styles';
import { useState } from 'react';

export default function Login( { navigation }) {
const [entrar, setEntrar] = useState('Login:');
const [senha, setSenha] = useState('Senha:');
const [validar, setValidar] = useState('');

function abrirCadastro(){
  navigation.navigate('Cadastro');
}

function verificar(){
  if (entrar == ' '){
    return (
      setValidar("Campo obrigatório!")
    );
  }else if (senha == ' '){
    return(
      setValidar("Campos obrigatório!")
    );
  }
}

return (

  <View style={estilos.container}>

    <Text style={estilos.texto}>
      
    </Text> 
    <Image
      style={estilos.logo} 
      source={require('../../../assets/logoCalculae.png')}>
    </Image>

    <TextInput
      placeholder="Login:"
      onChangeText={(entrar) => setEntrar(entrar)} 
      style={estilos.input}/> 

    <Text style={estilos.texto}>
      
    </Text> 
    <TextInput
      placeholder="Senha:"
      onChangeText={(senha) => setSenha(senha)}
      style={estilos.input}
      secureTextEntry={true}/>

    <TouchableOpacity 
 
      style={estilos.entrar}>
      <Text>
        Entrar
      </Text>
    </TouchableOpacity>

    <TouchableOpacity 
      onPress={abrirCadastro}
      style={estilos.cadastro}>
      <Text>
        Cadastro
      </Text>
    </TouchableOpacity>
  </View>
);
}