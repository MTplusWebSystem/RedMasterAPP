import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  View from "./view/index";
import  Company from "./view/company";
import  Client from "./view/clinet";
import  Define from "./view/difine";
import  ResClient from "./view/register/resclient1";
import  ResCompany from "./view/register/rescompany1";
import  Homebar from "./routerClient";
import Extratoclt from "./view/home/extratoclt";


const Stack = createNativeStackNavigator();

export default function Router() {
    return (
       
        <Stack.Navigator>
            <Stack.Screen
             name="View" 
             component={View} 
             options={{ headerShown : false}}
            />
           <Stack.Screen
             name="Company" 
             component={Company} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="Client" 
             component={Client} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="Define" 
             component={Define} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="ResClient" 
             component={ResClient} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="Extratoctl" 
             component={Extratoclt} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="ResCompany" 
             component={ResCompany} 
             options={{ headerShown : false}}
            />
            <Stack.Screen
             name="Homebar" 
             component={Homebar} 
             options={{ headerShown : false}}
            />
        </Stack.Navigator>
    );
}