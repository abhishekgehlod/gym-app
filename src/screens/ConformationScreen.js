import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../customBtn/Button'

export default function ConformationScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Text style={{
                fontSize: 25,
                color: '#000000',
                alignSelf: 'center'
            }}>Conformation</Text>

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assests/download.jpg')} style={{
                    width: 130,
                    height: 120,
                    marginLeft: 20,
                    marginTop: 35,
                    borderRadius: 15
                }} />
                <View>
                    <Text style={{
                        fontSize: 25,
                        marginTop: 30,
                        color: '#000000',
                        marginLeft: 25,
                        fontWeight: '500'
                    }}>Gym Nation</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assests/location.png')} style={{
                            width: 30,
                            height: 30,
                            marginLeft: 20,
                            marginTop: 10
                        }} />
                        <Text style={{
                            marginTop: 10,
                            marginLeft: 10,
                            fontSize: 20
                        }}>Dubai , UAE</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assests/clock.png')} style={{
                            width: 30,
                            height: 30,
                            marginLeft: 20,
                            marginTop: 10

                        }} />
                        <Text style={{
                            marginTop: 10,
                            marginLeft: 10,
                            fontSize: 20

                        }}>Friday , 12 Nov 2022</Text>
                    </View>
                </View>

            </View>

            <Text style={{
                fontSize: 25,
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 25,
                marginLeft: 20
            }}>Booking details</Text>


            <View style={{
                width: '90%',
                height: 200,
                backgroundColor: '#f2f2f2',
                alignSelf: 'center',
                borderRadius: 20,
                marginTop: 10
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 20
                    }}>Gym 1 month</Text>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 20,
                        fontWeight: '900',
                        marginRight: 20,
                        color: '#000000'
                    }}>200 AED</Text>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 20,
                        color: '#ff0000'
                    }}>Discount</Text>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 20,
                        fontWeight: '900',
                        marginRight: 20,
                        color: '#ff0000'
                    }}>-20 AED</Text>
                </View>

                <View style={{
                    width:400,
                    height:1,
                    backgroundColor:'#000000',
                    alignSelf:'center',
                    marginTop:10
                }}></View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:20 }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    marginLeft: 20,
                    
                }}>Total</Text>
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    fontWeight: '900',
                    marginRight: 20,
                    color:'#000000'
                   
                }}>180 AED</Text>
            </View>


            </View>

            
            <Text style={{
                fontSize: 25,
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 25,
                marginLeft: 20
            }}>Payment method</Text>





            <Button title={'Continue'} btnstyle={{alignSelf:'center',marginTop:30}}/>

            
        </View>
    )
}