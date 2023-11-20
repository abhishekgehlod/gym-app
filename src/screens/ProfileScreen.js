import { View, Text,Image,TextInput,ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import Button from '../customBtn/Button'

const ProfileScreen = () => {
  return (
    <View style={{flex:1,marginBottom:30,backgroundColor:'#ffffff'}}>
    <ScrollView>
      <Text style={{
        fontSize:25,
        alignSelf:'center',
        color:'#000000',
        marginTop:20
      }}>Profile</Text>

      <View>
      <Image style={{
        width:130,
        height:130,
        alignSelf:'center',
        marginTop:20,
        borderRadius:100,
        borderWidth:0.5,
        borderColor:'#000000'
      }} source={require('../assests/gym.png')}/>

      </View>


      <Text style={{
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(8)
      }}>Name</Text>


      <View style={{
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#e6e6e6'

      }}>
       
        <TextInput placeholder='Abc' placeholderTextColor={'black'}
          style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
        />
      </View>



      <Text style={{
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(8)
      }}>Email</Text>



      <View style={{
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#e6e6e6'

      }}>
        <Image source={require('../assests/sms.png')} style={{
          height: 30,
          width: 30,
          resizeMode: 'contain',
          marginLeft: 10


        }} />
        <TextInput placeholder='abc@gmail.com' placeholderTextColor={'black'}
          style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
        />
      </View>


      <Text style={{
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(8)
      }}>Phone Number</Text>





      <View style={{
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        alignSelf: 'center', 
        borderRadius: 10,
        marginTop: responsiveHeight(0.5),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#e6e6e6'

      }}>
        <Image source={require('../assests/phone.png')} style={{
          height: 30,
          width: 30,
          resizeMode: 'contain',
          marginLeft: 10


        }} />
        <TextInput placeholder='123456789' placeholderTextColor={'black'}
          style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
        />


      </View>


      <Text style={{
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(8)
      }}>Current subscription</Text>

      <View style={{
        width:"80%",
        height:150,
        backgroundColor:'#ff6666',
        alignSelf:'center',
        borderRadius:10,
        marginTop:10
      }}>
      <Text style={{
        fontSize:50,
        alignSelf:'center',
        color:'#ffffff',
        fontWeight:'bold',
        marginTop:10
      }}>3</Text>

      <Text style={{
        fontSize:20,
        alignSelf:'center',
        color:'#ffffff'
      }}>Months plain</Text>


      <Text style={{
        fontSize:15,
        alignSelf:'center',
        color:'#ffffff'
      }}>Expire Date : 25 - 12 - 2022</Text>
      </View>

      <Button title={'Save Changes'} btnstyle={{alignSelf:"center",marginTop:30}}/>




      </ScrollView>


    </View>
  )
}

export default ProfileScreen