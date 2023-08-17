import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import { auth } from '../firebase'

const SignOut = ({navigation}) => {

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Auth")
        })
    }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.heading}>Email: {auth.currentUser?.email}</Text>
      <Text style={styles.heading}>Are you sure you want to sign out?</Text>
      <Button
        onPress={handleSignOut}
        title="Yes, Sign Out"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },

  heading: {
    fontSize: 15,
    margin: 10,
    color: 'black'
  }, 

  button: {
    margin: 20,
    backgroundColor: 'orange',
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },

})

export default SignOut