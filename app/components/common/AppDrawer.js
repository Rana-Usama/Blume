import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from '@expo/vector-icons';

//config
import Colors from "../../config/Colors";
import HomeScreen from './../../screens/HomeScreen';

function AppDrawer({ navigation }) {

    return (
        <View style={{ flex: 1, width: '100%', position: 'absolute' }}  >

            <ImageBackground style={{ alignSelf: 'center', width: RFPercentage(28), height: RFPercentage(28), justifyContent: 'center', alignItems: 'center' }} source={require('../../../assets/images/logo.png')} />

            <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.secondary, marginTop: RFPercentage(-4) }} />
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("HomeScreen")} style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <FontAwesome name="home" style={{ fontSize: RFPercentage(3.3) }} color={"black"} />
                    <Text style={{ marginLeft: RFPercentage(1.8), color: Colors.black, fontSize: RFPercentage(2.2) }} >
                        Home Screen
                    </Text>
                </TouchableOpacity>
            </ScrollView>

        </View >
    );
}


export default AppDrawer; 