import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import {responsiveHeight,responsiveFontSize,responsiveWidth} from "react-native-responsive-dimensions"

const SplaceScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('LogInScreen')
            
        },3000)

    },[])
  return (
    <View style={{flex:1,backgroundColor:'#FF5733',justifyContent:'center',alignItems:'center'}}>
   
   <Image source={require('../assests/jymer.png')} style={{
    width:responsiveWidth(60),
    height:responsiveHeight(40),
    marginTop:200
  }}/>
   
     
      <Text style={{
        color:'#FDFEFE',
        fontSize:responsiveFontSize(1.9),
        marginTop:200,
        
        alignSelf:'center'
    }}>By joining JYMER , you agree to our terms of services</Text>
     
    </View>
  )
}

export default SplaceScreen