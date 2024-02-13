import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function contactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh ',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Hitesh',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 6,
            name: 'Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 7,
            name: 'Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 8,
            name: 'Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
          {
            uid: 9,
            name: 'Anurag',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 10,
            name: 'Sanket',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 11,
            name: 'Anirudh',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
          {
              uid: 12,
              name: 'Hitesh',
              status: 'Just an extra ordinary teacher',
              imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
            },
            {
              uid: 13,
              name: 'Tiwari',
              status: 'I ❤️ To Code and Teach!',
              imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
            },
            {
                uid: 14,
                name: 'Sanket',
                status: 'Making your GPay smooth',
                imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
              },
              {
                uid: 15,
                name: 'Anirudh',
                status: 'Building secure Digital banks',
                imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
              },
              {
                  uid: 16,
                  name: 'Hitesh',
                  status: 'Just an extra ordinary teacher',
                  imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
                },
                {
                  uid: 17,
                  name: 'Tiwari',
                  status: 'I ❤️ To Code and Teach!',
                  imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
                },
      ];
  return (
    <ScrollView>
    <View style={styles.mainContactList}>
      <Text style={styles.headingText}>Messages</Text>
      
        {contacts.map((item)=>(
            <View key={item.uid} style={styles.contactMain}>
                <Image source={{uri:item.imageUrl}} style={styles.image}/>
            
                    <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userStatus}>{item.status}</Text>
            </View>
            </View>
            
        ))}
     
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainContactList:{
        backgroundColor: '#227093'
    },
    headingText:{
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginHorizontal: 10
    },
    contactMain:{
        flexDirection: 'row',
        marginVertical: 5,
    },
    userName:{
        fontSize: 16,
        fontWeight: 'bold'

    },
    userStatus:{
        fontSize: 14,
        fontWeight: 'normal',
        color: 'grey'
    }
})