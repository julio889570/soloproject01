import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    const contacts = [
        {
            uid: 9,
            name: 'Your Story',
            status: 'Add your Story Here',
            ImageUrl: 'https://www.kindpng.com/imgv/JoJThm_plus-sign-icon-png-plus-icon-png-transparent'
        },
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
        
      ];
  return (
    <View style={styles.mainView}>
<ScrollView horizontal={true}>
    <View style={styles.row}>
      {contacts.map((item)=>(
        <View>
            
                <View key={item.uid}>
                  <View>
                  <Image 
                    source={{uri:item.imageUrl}}
                   style={styles.userImage}
           /> 
           <Text style={styles.textName}>{item.name}</Text>
                  </View>
            
                </View>
        </View>
        
      ))}
    </View>
    </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    mainView:{
     backgroundColor:'#227093'
    },
    row:{
        flexDirection: 'row',
        marginVertical: 25,
       
    },

    profileStatus:{

    },
    userImage:{
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 5,

    },
    textName:{
        fontSize: 12,
        marginLeft: 10
    }
})