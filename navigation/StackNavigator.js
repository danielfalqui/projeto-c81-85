import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/Postscreen";

const Stack =  createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Tela Inicial" component={{TabNavigator}}/>
            <Stack.Screen name="Tela de posts" component={{PostScreen}}/>
        </Stack.Navigator>
    )
}