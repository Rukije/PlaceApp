import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'

export default function PlaceItem({place,onSelect}) {

  return (
    <Pressable onPress={onSelect}>
        <Image source={{ uri : place.image.uri}}/>   
        <View>
            <Text>{place.title}</Text>  
            <Text>{place.address}</Text>      
        </View> 
    </Pressable>
  )
}

const styles = StyleSheet.create({});