import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export default function Button({title,btnstyle,onPress}) {
  return (
    <View>
      <TouchableOpacity style={{...styles.contaner,...btnstyle}} onPress={onPress}>
      <Text style={{color:'white',fontWeight:'500',fontSize:20}}>{title}</Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    contaner:{
        height:60,
        width:"90%",
        backgroundColor:'#FF5733',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
})
