import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

//Import Screens
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ExampleScreen from "../screens/ExampleScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingScreen from "../screens/ListingScreen";

//Import Components
import TabBottomButton from "../components/TabBottomButton";

const Tab = createBottomTabNavigator();

const BaseTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Example"
        component={ExampleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabBottomButton
              onPress={onPress}
              selected={accessibilityState.selected}
              iconName={'home'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BaseTabNavigator;
