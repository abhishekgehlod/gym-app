import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from '../customBtn/Button'

const LogInScreen = ({ navigation }) => {

      const GoRagistrationScreen = () =>{
        navigation.navigate('RagistrationScreen')
      }

      


  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 20 }}>
      <ScrollView>

        <Image source={require('../assests/gym.png')}
          style={{
            height: responsiveHeight(30),
            width: responsiveWidth(80),
            alignSelf: 'center',
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(4)
          }}
        />

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
          borderWidth: 1,
          alignSelf: 'center',
          borderColor: '#FF5733',
          borderRadius: 10,
          marginTop: responsiveHeight(1),
          alignItems: 'center',
          flexDirection: 'row'

        }}>
          <Image source={require('../assests/sms.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput placeholder='enter your email' placeholderTextColor={'black'}
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '200' }}
          />




        </View>



        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(3),
          marginLeft: responsiveWidth(8)
        }}>password</Text>




        <View style={{
          width: responsiveWidth(80),
          height: responsiveHeight(7),
          borderWidth: 1,
          alignSelf: 'center',
          borderColor: '#FF5733',
          borderRadius: 10,
          marginTop: responsiveHeight(0.5),
          alignItems: 'center',
          flexDirection: 'row'

        }}>
          <Image source={require('../assests/lock.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput secureTextEntry={true} placeholder='enter your password' placeholderTextColor={'black'}
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '200' }}
          />
          <Image source={require('../assests/eye.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10,
            marginLeft: responsiveWidth(10)


          }} />

        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/checkbox.png')} style={{
            width: responsiveWidth(6),
            height: responsiveHeight(4),
            marginLeft: 45,
            marginTop: 15
          }} />
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
            marginTop: 15,
            fontWeight: 'bold',
            color: 'black'
          }}>Remember me</Text>


          <Text style={{
            fontSize: 20,
            marginLeft: 70,
            marginTop: 15,
            fontWeight: 'bold',
            color: '#FF5733'
          }}>forgot password ?</Text>



        </View>
        <Button title={'Login'} btnstyle={{ alignSelf: 'center', marginTop: 30 }} />

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, marginTop: 10, color: 'black', fontWeight: '400' }}>Don't have an account ?</Text>
          <TouchableOpacity onPress={()=>GoRagistrationScreen()}>
            <Text style={{ fontSize: 20, marginTop: 10, color: '#FF5733', marginLeft: 5, fontWeight: '400' }}>Register</Text>
          </TouchableOpacity>

        </View>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '400', alignSelf: 'center', marginTop: 30 }}>Or sign up with</Text>

        <View style={{
          width: responsiveWidth(90),
          height: responsiveHeight(7),
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center'


        }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Image source={require('../assests/googlelogo.png')} style={{
              width: responsiveWidth(6),
              height: responsiveHeight(3.5)
            }} />


            <Text style={{ marginLeft: 10, alignItems: 'center', fontSize: 20, color: 'black', fontWeight: '700' }}>Sign Up with Google</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

export default LogInScreen