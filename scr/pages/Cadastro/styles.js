import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#93D077',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nome:{
      backgroundColor: '#FFF',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 12,
      marginBottom: 20,
      marginTop: 88,
      width:"90%"
    },
    telefone:{
      backgroundColor: '#FFF',
      paddingHorizontal: 8,
      paddingVertical: 10,
      marginRight: 16,
      borderRadius: 12,
      marginBottom: 20,
      marginLeft: 16,
      width:"40%"
    },
    nascimento:{
      backgroundColor: '#FFF',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 12,
      marginBottom: 20,
      width:"30%"
    },
    email:{
      backgroundColor: '#FFF',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 12,
      marginBottom: 20,
      width:"75%"
    },
    senha:{
      backgroundColor: '#FFF',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 12,
      marginBottom: 80,
      width:"55%"
    },
    botao:{
      backgroundColor: "#45AB06",
      paddingHorizontal: 28,
      paddingVertical: 12,
      borderRadius: 12
    },
    linha:{
      flexDirection: "row"
    },
    esquerda:{
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }
  });