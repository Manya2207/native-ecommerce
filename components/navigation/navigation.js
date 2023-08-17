import React from "react";
import Headphones from "../../screens/Headphones";
import Laptops from "../../screens/Laptops";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MobilePhones from "../../screens/MobilePhones";
import { AllProducts } from "../../screens/AllProducts";
import SignOut from "../../screens/SignOut";

const Drawer = createDrawerNavigator();

const NavigationBar = () => {
  return (
    <>
        <Drawer.Navigator>
          <Drawer.Screen
            options={{
              headerTintColor: "black",
            }}
            name="All Products"
            component={AllProducts}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "black",
            }}
            name="Headphones"
            component={Headphones}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "black",
            }}
            name="Mobile Phones"
            component={MobilePhones}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "black",
            }}
            name="Laptops"
            component={Laptops}
          />
          <Drawer.Screen
            options={{
              headerTintColor: "black",
            }}
            name="Sign Out"
            component={SignOut}
          />
        </Drawer.Navigator>
    </>
  );
};

export default NavigationBar;
