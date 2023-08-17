import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import { auth } from '../firebase';

const Auth = ({navigation}) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        showToast();
        navigation.navigate('Products');
      }
    })
    return unsubscribe
  }, [])

  const showToast = () => {
    ToastAndroid.show("Authentication Successful", ToastAndroid.LONG);
  }

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Signed up with ' + user.email)  
    })
    .catch(error => alert(error.message))
  }

  const handleLogIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with ' + user.email)
    })
    .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.heading}>E-Store</Text>
      <View>
      {
        isSignUp 
          ? <> 
              <TextInput 
                style={styles.input} 
                placeholder="Email" 
                name="email" 
                value={email} 
                onChangeText={text => setEmail(text)} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="Password" 
                name="password" 
                secureTextEntry
                value={password} 
                onChangeText={text => setPassword(text)} 
              />
              <TouchableOpacity style={styles.button} 
                onPress={handleSignUp}
              >
                <Text style={styles.buttonText}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={switchMode} style={{marginLeft: 20}} >
                <Text>
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </>
          : <> 
              <TextInput 
                style={styles.input} 
                placeholder="Email" 
                name="email" 
                value={email} 
                onChangeText={text => setEmail(text)} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="Password" 
                name="password" 
                secureTextEntry
                value={password} 
                onChangeText={text => setPassword(text)} 
              />
              <TouchableOpacity style={styles.button} 
                onPress={handleLogIn}
              >
                <Text style={styles.buttonText}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={switchMode} style={{marginLeft: 20}} >
                <Text>
                  Don't have an account? Sign Up
                </Text>
              </TouchableOpacity>
            </>
      }
      </View>
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
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    color: 'orange'
  }, 

  input: {
    borderWidth: 1,
    width: 300,
    height: 35,
    margin: 10,
    padding: 5,
    borderRadius: 20,
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

export default Auth