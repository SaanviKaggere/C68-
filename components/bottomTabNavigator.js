import React,{Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import searchScreen from '../screens/Search'
import transactionScreen from '../screens/Transaction'

const Tab = createBottomTabNavigator()

export default class bottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                     <Tab.Screen name="Transaction" component={transactionScreen}/>
                     <Tab.Screen name="Search" component={searchScreen}/>
                </Tab.Navigator>

            </NavigationContainer>
        )
    }
}
