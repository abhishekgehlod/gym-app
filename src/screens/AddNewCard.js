import { View, Text,Image, StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

const AddNewCard = () => {
  return (
    <View style={{flex:1,marginBottom:10}}>
    <ScrollView>
      <Text style={{
        fontSize:25,
        alignSelf:'center',
        color:'#000000',
        marginTop:25
      }}>Add New Card</Text>

      <View>
      <TouchableOpacity>
      <Image style={styles.cardStyle} source={require('../assests/Card.png')}/>
      </TouchableOpacity>

      </View>


      <View>
      <TouchableOpacity>
      <Image style={styles.cardStyle} source={require('../assests/Card.png')}/>
      </TouchableOpacity>


      </View>

      <View style={styles.viewStyle}></View>

      </ScrollView>


    

    </View>
  )
}


const styles = StyleSheet.create({
  cardStyle:{
    width:'90%',
    height:250,
    borderRadius:20,
    alignSelf:'center',
    marginTop:20

  },
  viewStyle:{
    width:'90%',
    height:250,
    borderRadius:20,
    alignSelf:'center',
    marginTop:20,
    backgroundColor:'#d9d9d9'


  }
})

export default AddNewCard