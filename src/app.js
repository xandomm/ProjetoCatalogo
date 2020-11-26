import React from 'react'
import Login from './img/Projeto.png'
import {  ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
export default (props)=>{
    return(
        <SafeAreaView style={styles.login}>
                
                  
                <ImageBackground style={styles.image} source={Login}>

                </ImageBackground>
                <View style={styles.input} >
                            <TextInput
                            
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
        flex:2
    },
    login:{
        flex:1
    }
})
