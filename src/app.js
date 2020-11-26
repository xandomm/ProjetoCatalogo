import React,{useState} from 'react'
import Login from './components/img/Projeto.png'
import { Text, ImageBackground,TextInput, SafeAreaView, StyleSheet, View } from 'react-native'

export default (props)=>{
const [email,setEmail]=useState('');

    return(
        <SafeAreaView style={styles.login}>
                
                  
                <ImageBackground style={styles.image} source={Login}>

                </ImageBackground>
                <View style={styles.input} >
                    <Text style={styles.label}>email</Text>
                            <TextInput
                            style={styles.inputs}
                            />
                            <TextInput
                            
                            />

                </View>
               </SafeAreaView>
)
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width:'100%',
        resizeMode: "cover",
        justifyContent: "center"
      },
    input:{
        flex:2,
        backgroundColor: 'gray'
    },
    inputs:{
        backgroundColor:'white',
        margin: 50 ,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    login:{
        flex:1
    },
    label:{
        color: 'white',
        fontSize: 30,
        textAlign:'center',
        fontFamily:'Anton-Regular'
    }
})
