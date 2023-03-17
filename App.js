import React, {useEffect, useState} from 'react'
import {
  View, Text, TextInput, ScrollView,
  Image, TouchableOpacity, Alert, FlatList, VirtualizedList
}
  from 'react-native'
import estilo from './Estilo'
import axios from 'axios'
 
const App = () => {
  const [texto, setTexto] = useState([]);
  const [clicou, setClicou] = useState(false);
  const [entrada, setEntrada] = useState('');

  // useEffect(()=>{
  //   alert('sempre dispara na renderização')
  // })
  
  const pesquisa = () => {
    axios.get('https://www.omdbapi.com/?apikey=d8a44ab&type=movie&r=json&page=1&s=love')
    .then((response)=>{
      setTexto(response.data)
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  // useEffect(()=>{
  //    alert('mensagem inicial')
  //   }, [])
    
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
   
   const Item = ({titulo, capa}) => {
    return (
      <View style={estilo.container}>
        <Text>{titulo}</Text>
        <Image source={{uri:capa}} style={{width:100, heigth:100, borderRadius: 15, margin:16}} />
        <img src={capa}  style={{width:100, heigth:100, borderRadius: 10, margin:16}} />
      </View>
    )
   }

return (
  <ScrollView>
        <View style={estilo.container}>
        <Text style={estilo.texto}>{JSON.stringify(texto.Search)}</Text>

            <TextInput style={estilo.caixa}
            value={entrada}
            onChangeText={(e)=>setEntrada(e)} />

            <TouchableOpacity style={estilo.botao}
              onPress={()=>{
              setClicou(true)
              // if(clicou == true) setClicou(false)
              // Alert.alert('Botão Clicado ' + (clicou))
            }}>

              <Text style={estilo.textoBotao}>BUSCAR DADOS</Text>
              </TouchableOpacity>

              <FlatList
              data={texto.Search}
              renderItem={({item})=>< Item titulo={item.Title}capa={item.Poster}/>}
              keyExtractor={(item)=>item.imdbID}
              />

        </View>
        </ScrollView>
 )
}

export default App;