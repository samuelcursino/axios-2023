import React, {useEffect, useState } from 'react'
import {View, Text, TextInput, ScrollView, Image, TouchableOpacity, Alert }
 from 'react-native' 
 import estilo from './Estilo'
 
const App = () => {
  const [texto, setTexto] = useState('Título Inicial');
  const [clicou, setClicou] = useState(false);
  const [entrada, setEntrada] = useState('');

  // useEffect(()=>{
  //   alert('sempre dispara na renderização')
  // })
  
  useEffect(()=>{
     alert('mensagem inicial')
    }, [])
    
  useEffect(()=>{
    if(clicou == true) 
    alert('Botão foi clidado e foi escrito: ' + (entrada))
    return ()=>{
    setClicou(false)
    }
   }, [clicou])
   
return (
        <View style={estilo.container}>
            <Text style={estilo.texto}>{texto}</Text>
            <TextInput style={estilo.caixa}
            value={entrada}
            onChangeText={(e)=>setEntrada(e)} />
            <TouchableOpacity style={estilo.botao}
              onPress={()=>{
              setClicou(true)
              // if(clicou == true) setClicou(false)
              // Alert.alert('Botão Clicado ' + (clicou))
            }}
            >
              <Text style={estilo.textoBotao}>BUSCAR DADOS</Text>
              </TouchableOpacity>
        </View>
 )
}

export default App;