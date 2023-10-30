import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './components/routes/router';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Router />
    </NavigationContainer>
  );
}