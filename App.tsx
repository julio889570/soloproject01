import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import ElevatedCard from './components/ElevatedCard'
import ContactList from './components/ContactList'
import Status from './components/Status'

export default function App() {
  return (
    <View>
      <Logo />
      <Status />
      <ElevatedCard />
      <ContactList />
    </View>
  )
}

const styles = StyleSheet.create({})