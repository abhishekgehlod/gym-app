import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'
import Button from '../customBtn/Button'

const RagistrationScreen = ({ navigation }) => {

  const GoHomeScreen = () => {
    navigation.navigate("HomeScreen")
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 30 }}>
      <ScrollView>

        <Image source={require('../assests/gym2.png')} style={{
          height: responsiveHeight(35),
          width: responsiveWidth(70),
          alignSelf: 'center',
          marginTop: 10
        }} />

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
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />
        </View>

        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
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
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />
          <Image source={require('../assests/eye.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10,
            marginLeft: responsiveWidth(10)


          }} />

        </View>

        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(8)
        }}>Confirm password</Text>



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
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />
          <Image source={require('../assests/eye.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10,
            marginLeft: responsiveWidth(10)


          }} />

        </View>

        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(8)
        }}>Phone</Text>



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
          <Image source={require('../assests/phone.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput placeholder='enter your Phone Number' placeholderTextColor={'black'}
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />


        </View>


        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(8)
        }}>Age</Text>


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
          <Image source={require('../assests/age.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput placeholder='enter your Age' placeholderTextColor={'black'}
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />

          <Image source={require('../assests/arrow.png')} style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            marginLeft: 150,


          }} />


        </View>


        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(8)
        }}>Gender</Text>



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
          <Image source={require('../assests/gender.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput placeholder='enter your Gender' placeholderTextColor={'black'}
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />

          <Image source={require('../assests/arrow.png')} style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            marginLeft: 130,



          }} />


        </View>


        <Text style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(8)
        }}>Location</Text>



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
          <Image source={require('../assests/location.png')} style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            marginLeft: 10


          }} />
          <TextInput placeholder='enter your Location' placeholderTextColor={'black'}
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
            style={{ alignItems: 'center', paddingHorizontal: 10, fontSize: 20, fontWeight: '300' }}
          />
        </View>


        <Button title={'Sign Up'} btnstyle={{ alignSelf: 'center', marginTop: 30 }} onPress={() => GoHomeScreen()} />

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, marginTop: 10, color: 'black', fontWeight: '400' }}>Already have an account ?</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, marginTop: 10, color: '#FF5733', marginLeft: 5, fontWeight: '400' }}>Login</Text>
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

export default RagistrationScreen