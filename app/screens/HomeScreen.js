import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Platform, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={styles.screen}>
            <ImageBackground style={{ width: '100%', height: RFPercentage(32), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/top2.png')} >
                <View style={{ marginTop: RFPercentage(3), width: '94%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.openDrawer()} >
                        <Feather name="menu" style={{ fontSize: RFPercentage(4) }} color={Colors.secondary} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Image style={{ width: RFPercentage(20.5), height: RFPercentage(6) }} source={require('../../assets/images/name.png')} />
            <Text style={{ marginTop: RFPercentage(2), color: Colors.secondary, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                In Your Own Place On Your Own Time
            </Text>

            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL('https://squareup.com/appointments/book/93rhdni8bj3tsx/L1FXRGMT9YF31/services') }} style={{ borderColor: Colors.secondary, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: RFPercentage(15), width: RFPercentage(18), height: RFPercentage(6.5), borderRadius: RFPercentage(1), backgroundColor: '#733ff6' }}  >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }} >
                    BOOK NOW
                </Text>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },
})

export default HomeScreen;