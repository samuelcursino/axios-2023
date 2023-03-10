import React, {useEffect, useState } from 'react'
import {View, Text, TextInput, ScrollView, Image, TouchableOpacity, Alert }
 from 'react-native' 
 import estilo from './Estilo'
 import axios from 'axios'
 
const App = () => {
  const [texto, setTexto] = useState('Título Inicial');
  const [clicou, setClicou] = useState(false);
  const [entrada, setEntrada] = useState('');

  // useEffect(()=>{
  //   alert('sempre dispara na renderização')
  // })
  
  const pesquisa = () => {
    axios('https://www.omdbapi.com/?apikey=d8a44ab&type=movie&r=json&page=1&s=love')
    .then(function (response){
      setTexto(JSON.stringify(response.data.Search))
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  useEffect(()=>{
     alert('mensagem inicial')
    }, [])
    
  useEffect(()=>{
    // if(clicou == true) 
    // alert('Botão foi clidado e foi escrito: ' + (entrada))
    // return ()=>{
    // setClicou(false)
    if(clicou == true) {
      pesquisa()
    } return ()=> {
    setClicou(false)
    }
   }, [clicou])
   
return (
  <ScrollView>
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

              <FlatList
              data={texto}
              render={({item})=><Text>{item.Title}</Text>}
              />

        </View>
        </ScrollView>
 )
}

export default App;