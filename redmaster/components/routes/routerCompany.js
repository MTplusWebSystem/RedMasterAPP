import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import  Company from "./view/home/homecpy";

const Tab = createBottomTabNavigator();



export default function CompanyBar() {
    return (
       
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={Company} 
          options={
            {
              tabBarIcon: ({color}) => (
                <Feather name="home" size={24} color={color} />
              )
            }
          }/>
          <Tab.Screen name="CashBack" component={Company}
          options={
            {
              tabBarIcon: ({color}) => (
                <Feather name="dollar-sign" size={24} color={color} />
              )
            }
          } />
           <Tab.Screen name="Validar" component={Company}
          options={
            {
              tabBarIcon: ({color}) => (
                <Feather name="check-circle" size={24} color={color} />
              )
            }
          }
          />

          <Tab.Screen name="Token" component={Company}
          options={
            {
              tabBarIcon: ({color}) => (
                <Feather name="key" size={24} color={color} />
              )
            }
          } />
        
        </Tab.Navigator>
    );
}