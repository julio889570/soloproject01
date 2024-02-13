import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>

        
        <View>
        <Image 
        source={{uri:'https://avatars.githubusercontent.com/u/11613311?v=4'}} 
        style={styles.profilePic}/>
        </View>
      <View>
        <Text>WhatsApp 2024 Chat</Text>

      </View>
      <View>
        <Text>Search</Text>
      </View>
      </View>
      <View style={styles.container}>
      </View>
      
    </View>

  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#34ace0'
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10, 
    },
    profilePic:{
        height: 50,
        width: 50,
        borderRadius: 50 /2,
    },
})