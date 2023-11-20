import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import Button from '../customBtn/Button'

const GymNationScreen = () => {
    return (
        <View style={{ flex: 1, marginBottom: 20, backgroundColor: '#ffffff' }}>
            <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknAlPoB4JUwa8AET5ssj2IvRHOI1_ca_pVQ&usqp=CAU' }} style={{
                width: '100%',
                height: 300
            }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        marginLeft: 160,
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Gym Nation</Text>

                    <Image source={require('../assests/bookMark.png')} style={{
                        width: 25,
                        height: 25,
                        marginTop: 30,
                        marginLeft: 100
                    }} />

                </View>
                <View style={{
                    width: 60,
                    height: 30,
                    backgroundColor: '#1a1a00',
                    marginLeft: "85%",
                    marginTop: 200,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: '#ffffff' }}>4.8</Text>
                </View>

            </ImageBackground>

            <ScrollView>

                <View style={{
                    width: '90%',
                    height: 90,

                    marginLeft: 25,
                    marginTop: 20,
                    borderWidth: 0.5,
                    borderRadius: 10,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assests/calender.png')} style={{
                            width: 30,
                            height: 30,
                            marginTop: 10

                        }} />
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 10 }}>Open</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Mon - Sun</Text>

                        </View>

                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assests/clock.png')} style={{
                            width: 25,
                            height: 25,
                            marginTop: 10

                        }} />
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 10 }}>Time</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>09:00 - 10:00 PM</Text>

                        </View>

                    </View>



                </View>

                <Text style={{
                    fontSize: 25,
                    marginLeft: 25,
                    marginTop: 20,
                    fontWeight: '600',
                    color: 'black'
                }}>Location</Text>

                <Text style={{
                    fontSize: 18,
                    marginLeft: 25
                }}>Abu Dhabi , UAE</Text>

                <View>
                    <Image style={{
                        width: "90%",
                        height: 100,
                        alignSelf: 'center',
                        marginTop: 10
                    }} source={require('../assests/Maskgroup.png')} />
                </View>






                <Text style={{
                    fontSize: 25,
                    marginLeft: 25,
                    marginTop: 20,
                    fontWeight: '600',
                    color: 'black'
                }}>Plans</Text>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{
                        width: 140,
                        height: 70,
                        borderWidth: 0.5,
                        marginTop: 10,
                        marginLeft: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <Text style={{
                            fontSize: 25,
                            color: '#000000',
                            fontWeight: '800'
                        }}>200 AED</Text>


                        <Text style={{ fontSize: 18 }}>1 Month plain</Text>
                    </View>

                    <View style={{
                        width: 140,
                        height: 70,
                        borderWidth: 0.5,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#ff3300',
                        backgroundColor: '#ffebe6'
                    }}>

                        <Text style={{
                            fontSize: 25,
                            color: '#ff3300',
                            fontWeight: '800'
                        }}>500 AED</Text>


                        <Text style={{ fontSize: 18, color: '#ff3300' }}>3 Month plain</Text>
                    </View>


                    <View style={{
                        width: 140,
                        height: 70,
                        borderWidth: 0.5,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <Text style={{
                            fontSize: 25,
                            color: '#000000',
                            fontWeight: '800'
                        }}>1500 AED</Text>


                        <Text style={{ fontSize: 18 }}>12 Month plain</Text>
                    </View>
                </View>


                <Text style={{
                    fontSize: 25,
                    marginLeft: 25,
                    marginTop: 20,
                    fontWeight: '600',
                    color: 'black'
                }}>Classes</Text>


                <View style={{ flexDirection: 'row', }}>

                    <ScrollView horizontal={true}>
                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />


                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />

                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />


                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />



                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />




                        <Image style={{
                            width: 90,
                            height: 90,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }} source={require('../assests/download.jpg')} />

                    </ScrollView>





                </View>

                <Button title={'Subscrice'} btnstyle={{ alignSelf: 'center', marginTop: 30 }} />







            </ScrollView>



        </View>
    )
}

export default GymNationScreen