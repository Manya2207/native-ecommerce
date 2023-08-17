import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import Auth from './screens/Auth'
import { StripeProvider } from '@stripe/stripe-react-native';
import { fetchPublishableKey } from './helper.js';
import Payment from './screens/Payment.js';

const Stack = createNativeStackNavigator();

function App() {

  const [publishableKey, setPublishableKey] = useState('')
  useEffect(() => {
    async function init() {
      const publishableKey = await fetchPublishableKey()
      if(publishableKey){
        setPublishableKey(publishableKey)
      }
    }
  })

  return (
    <StripeProvider publishableKey={publishableKey} >
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Auth' component={Auth} options={{ headerShown: false }} />

            <Stack.Screen name='Products' component={ProductsList} 
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
              headerLeft: () => <></>
            })}/>

            <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({ navigation }) => ({
              title: 'Product Detail',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
              headerLeft: () => <></>
            })} />

            <Stack.Screen name='Cart' component={Cart} 
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
              headerLeft: () => <></>
            })} />

            <Stack.Screen name='Payment' component={Payment} 
            options={({ navigation }) => ({
              title: 'Payment',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <></>,
              headerLeft: () => <></>
            })} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    color: "orange"
  }
});

export default App;
