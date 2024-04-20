import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (



    <View style={estilos.container}>


      <Text style={estilos.texto}>
        Login
      </Text> 
      <TextInput 
        style={estilos.input}/> 


      <Text style={estilos.texto}>
        Senha
      </Text> 
      <TextInput 
        style={estilos.input}
        secureTextEntry={true}/>

    

      <TouchableOpacity style={estilos.button}>
        <Text>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button}>
        <Text>
          Cadastro
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93D077',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#000",
    fontSize: 12
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width:"80%"
  },
  button:{
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8
  }
});


