import Home from "./components/Home";
import Registration from "./components/Registration";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;