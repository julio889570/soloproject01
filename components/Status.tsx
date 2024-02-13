import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Status() {
  return (
    <View style={styles.container}>
       <View style={styles.chat}>
        <Text style={styles.chatText}>Chats</Text>
        </View>
      <View>
        <Text>Updates</Text>

      </View>
      <View>
        <Text>Calls</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
     flexDirection: 'row',
     justifyContent:'space-evenly',
     backgroundColor: '#34ace0'
    },
    chat:{
       backgroundColor:'#40407a',
       paddingHorizontal: 10
    },
    chatText:{
        color: '#33d9b2',
        textDecorationLine: 'underline',
        fontSize: 18,
    }
})