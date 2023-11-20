import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView>


        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/location.png')} style={{
            width: responsiveWidth(5),
            height: responsiveHeight(3),
            marginTop: 20,
            marginLeft: 20

          }} />
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
            marginTop: 20,
            color: 'black',
            fontWeight: '700'
          }}>Abu Dhabi , UAE</Text>

          <Image source={require('../assests/Notification.png')} style={{
            width: responsiveWidth(8),
            height: responsiveHeight(4),
            marginTop: 20,
            marginLeft: 230
          }} />

        </View>

        <View>
          <View style={{
            width: responsiveWidth(70),
            height: responsiveHeight(6),
            backgroundColor: '#e6e6ff',
            marginTop: 30,
            marginLeft: 20,
            borderRadius: 10,

            flexDirection: 'row'
          }}>

            <Image source={require('../assests/Search.png')} style={{
              width: responsiveWidth(6),
              height: responsiveHeight(3),
              marginLeft: 10,
              marginTop: 10

            }} />

            <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 10 }}> Search for recipe</Text>


            <View style={{
              backgroundColor: '#ffffff',
              width: responsiveWidth(10),
              height: responsiveHeight(5.5),
              marginLeft: 190,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TouchableOpacity>
                <Image source={require('../assests/Filter.png')} style={{
                  width: responsiveWidth(6),
                  height: responsiveHeight(3)
                }} />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('../assests/Woman.png')} style={{
              width: responsiveWidth(17),
              height: responsiveHeight(10),
              marginLeft: 30,
              marginTop: 30
            }} />
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 25 }}>Women Gym</Text>
          </View>



          <View style={{ marginLeft: 10 }}>
            <Image source={require('../assests/Kides.png')} style={{
              width: responsiveWidth(17),
              height: responsiveHeight(10),
              marginLeft: 25,
              marginTop: 30
            }} />
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 25 }}>Kids Gym</Text>
          </View>



          <View style={{ marginLeft: 10 }}>
            <Image source={require('../assests/Offer.png')} style={{
              width: responsiveWidth(17),
              height: responsiveHeight(10),
              marginLeft: 25,
              marginTop: 30
            }} />
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 25 }}>50 % Off</Text>
          </View>

          <View style={{ marginLeft: 15 }}>
            <Image source={require('../assests/Offer2.png')} style={{
              width: responsiveWidth(17),
              height: responsiveHeight(10),
              marginLeft: 25,
              marginTop: 30
            }} />
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 25 }}> Offers</Text>
          </View>


        </View>

        <Text style={{
          fontSize: 25,
          fontWeight: '600',
          color: 'black',
          marginTop: 40,
          marginLeft: 30
        }}>Top relevant Gym Center</Text>


        <TouchableOpacity onPress={() => navigation.navigate('GymNationScreen')}>
          <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrMngiq95kHtEzEJcN5QEjkj3Y02MoMoaDifcRmWxVheW5opVti4iwT_MuJ5k1ze42ak&usqp=CAU' }} style={{
            height: 250,
            width: '95%',
            marginLeft: 25,
            marginTop: 10


          }}>
            <View style={{
              width: 70,
              height: 30,
              backgroundColor: '#ffffff',
              marginTop: 200,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: '#000000', fontWeight: 'bold' }}>1.2 Km</Text>

            </View>
          </ImageBackground>
        </TouchableOpacity>


        <View>
          <Text style={{
            fontSize: 25,
            fontWeight: '600',
            color: 'black',
            marginTop: 15,
            marginLeft: 30
          }}>Gym Nation</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, marginLeft: 30, fontWeight: 'bold', color: '#000000', marginTop: 10 }}>Sstarting from :</Text>
          <Text style={{
            fontSize: 23,
            marginTop: 5,
            color: '#ff471a'
          }}>150 AED </Text>
          <Text style={{ fontSize: 28 }}>|</Text>

          <Text style={{
            fontSize: 23,
            marginTop: 5,
            color: '#ff1a1a'
          }}>50 % Off</Text>
        </View>



        <TouchableOpacity onPress={() => navigation.navigate('GymNationScreen')}>
          <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFZ0G0MbmeJC5ESZ7DE3yWBE5KXmWNR_ydw&usqp=CAU' }} style={{
            height: 250,
            width: '95%',
            marginLeft: 25,
            marginTop: 10


          }}>
            <View style={{
              width: 70,
              height: 30,
              backgroundColor: '#ffffff',
              marginTop: 200,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: '#000000', fontWeight: 'bold' }}>1.2 Km</Text>

            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>


      <View style={{ width: '100%', height: 60, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
        <TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Image source={require('../assests/Home.png')} style={{
              height: 40,
              width: 40
            }} />

            <Text style={{ fontWeight: "bold", color: '#000000' }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Image source={require('../assests/Search.png')} style={{
              height: 40,
              width: 40
            }} />
            <Text style={{ fontWeight: "bold" }}>Search</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={{ marginTop: 20 }}>
            <Image source={require('../assests/Profile.png')} style={{
              height: 40,
              width: 40
            }} />
            <Text style={{ fontWeight: "bold" }}>Profile</Text>
          </View>
        </TouchableOpacity>


      </View>




    </View>
  )
}

export default HomeScreen