import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const intro = <Text style={styles.introStyle}>My name is Ruben B.</Text>

  return <View>
    <Text style={styles.textStyle}>Getting started with react native!</Text>
    {intro}
  </View>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  introStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen;