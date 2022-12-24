import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Categories from './Categories';

export default function HomeScreen(props) {

    return (
        <View style={{
            flex: 1,
            fontSize: 10,
            backgroundColor: '#7D8491',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <Text style={{fontSize: 25, marginTop: 30}}>I want to improve in:</Text>
            <Categories/>
        </View>
    )
}