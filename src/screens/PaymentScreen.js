import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import Button from '../customBtn/Button'

const PaymentScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text style={{
        fontSize:25,
        color:'#000000',
        alignSelf:'center',
        marginTop:20
      }}>Payment</Text>
      

      <View>
      <Image style={styles.cardStyle} source={require('../assests/Card.png')}/>

      </View>

      <View style={{flexDirection:'row'}}>
      <Image style={{
        width:30,
        height:30,
        marginTop:20,
        marginLeft:30
      }} source={require('../assests/checkbox.png')}/>

      <Text style={styles.textStyle} >I Agree with Terms and privacy polish</Text>
      </View>

      <Button title={'Continue'} btnstyle={{alignSelf:'center',marginTop:340}}/>


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
    textStyle:{
        fontSize:20,
        color:'#000000',
        marginTop:20,
        marginLeft:10


    }
  })

export default PaymentScreen