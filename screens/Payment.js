import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import { Alert } from 'react-native-web';
import { API_URL } from '../Config';

const Payment = ({navigation}) => {

    const [name, setName] = useState('');
    const {confirmPayment, loading} = useConfirmPayment()
    let flag = 1;
    const handlePayPress = async() => {
        // const response = await fetch(`${API_URL}/create-payment-intent`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type' : 'appliaction/json'
        //     },
        //     body: JSON.stringify({
        //         paymentMethodType: 'card',
        //         currency: 'usd'
        //     })
        // })
        // const {clientsecret} = await response.json()

        // const {error, paymentIntent} = await confirmPayment(clientsecret, {
        //     type: 'Card',
        //     billingDetails: {name}
        // })

        // if(error){
        //     Alert.alert(`Error code ${error.code}`, error.message)
        // } else if(paymentIntent) {
        //     Alert.alert('Success', `Payment successful ${paymentIntent.id}`)
        // }

        if(flag && name){
          alert(`Payment successful`)
          setName('');
          flag = 0; 
        }
        if(!flag) {
          alert(`Payment already done`)
        }
    }

  return (
    <SafeAreaView style={styles.container} >
        <TextInput 
            style={styles.input} 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChangeText={text => setName(text)} 
        />
        <CardField 
            postalCodeEnabled={false}
            style={styles.cardField}
            placeholder={{
                number: '4242 4242 4242 4242'
            }}
        />
        <Button
            onPress={handlePayPress}
            title="Make Payment"
            disabled={loading}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 30,
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    color: 'orange'
  }, 

  input: {
    width: '95%',
    height: 50,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff'
  },

  button: {
    margin: 10,
    backgroundColor: 'orange',
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }

})

export default Payment