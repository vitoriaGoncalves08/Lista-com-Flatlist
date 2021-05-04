import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const alunos = [
  {
    idAluno:1,
    imgAluno:"https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/124152335_2803809799938675_2884833650693278539_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wC664MhsyMEAX83tQHz&_nc_ht=scontent-gru1-2.xx&oh=456e0740a95b523b4329c142a31d6c7f&oe=60B74560",
    nomeAluno: 'Vitória Gonçalves Passos',
    idadeAluno: 17,
    emailAluno: 'vigoncalves@gmail.com'
  },
  {
    idAluno:2,
    imgAluno:"https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
    nomeAluno: 'Anna Jorge Vasconcelos',
    idadeAluno: 16,
    emailAluno: 'annajorge@gmail.com'
  },
  {
    idAluno:3,
    imgAluno:"https://images.unsplash.com/photo-1529139286325-135ce8327cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    nomeAluno: 'Karina Silva Cunha',
    idadeAluno: 26,
    emailAluno: 'kahcunha6@gmail.com'
  },
  {
    idAluno:4,
    imgAluno:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    nomeAluno: 'João Hemon Santos',
    idadeAluno: 15,
    emailAluno: 'Joãohemon01@gmail.com'
  },
  {
    idAluno:5,
    imgAluno:"https://images.unsplash.com/photo-1585444744418-b16730889f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    nomeAluno: 'Charlie Ortega Oliver',
    idadeAluno: 17,
    emailAluno: 'Ortegaoliver3@gmail.com'
  },
  {
    idAluno:6,
    imgAluno:"https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/45141923_1940558246057289_1583257629730275328_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=V4KHfl25oRAAX-ywcnQ&_nc_ht=scontent-gru1-2.xx&oh=2b76d2c634042bba3e23b6083c6be971&oe=60B58579",
    nomeAluno: 'Thayna Gonçalves Passos',
    idadeAluno: 24,
    emailAluno: 'thaynapassos3@gmail.com'
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alunos</Text>
      <FlatList style={styles.flatint}
        data={alunos}
        keyExtractor={item=>item.idAluno}
        renderItem={({item})=>{
        return <View style={styles.flatmenor}>
          <View style={styles.TAluno}>
            <Image source={{uri: item.imgAluno}} 
              style={styles.img}/>
              <View style={styles.Vdatas}>
            <Text style={styles.Tnome}>{item.nomeAluno}</Text>
            <Text style={styles.Tidade}>{item.idadeAluno} anos</Text>
            <Text style={styles.Temail}>{item.emailAluno}</Text>
            </View>
          </View>
      </View>}
        }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#6dc5ba'
  },
  flatmenor: {
    justifyContent: 'center',
    borderRadius:15,
  },
  flatint:{
    marginBottom:50,
    padding:30
  },
  title:{
    marginTop:20,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
    fontSize:35
  },
  img:{
    width:70,
    height:70,
    borderRadius:40,
  },
  Vdatas:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    marginLeft:10
  },
  TAluno:{
    flex:1,
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff',
    borderRadius:15,
    marginBottom:5
  },
  Tnome:{
    fontSize:20,
    fontWeight:'bold',
    color:'#214642'
  },
  Tidade:{
    fontSize:17,
    color:'#214642'
  },
  Temail:{
    fontWeight:'300',
    color:'#338f85'
  }
});
