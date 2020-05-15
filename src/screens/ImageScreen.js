import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} score={10} />
      <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={5} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen