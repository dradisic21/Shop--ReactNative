import { Text, View, Image, TouchableOpacity } from "react-native";
import { container, text, textPosition, buttonPosition, button, buttonText, image1, image2 } from "./stitches.home.js";
import { useNavigation } from '@react-navigation/native';


function Home() {

const navigation = useNavigation();

const handleSubmit = (e) => {
  navigation.navigate('Registration')
}


  return (
    <View style={container}>
      <View style={textPosition}>
        <Text style={text}>
          Define yourself in your unique way.
        </Text>
      </View>
      <View>
        <View style={image1}>
          <Image source={require("../../assets/line.png")} />
        </View>
        <View style={image2}>
          <Image source={require("../../assets/man.png")} />
        </View>
      </View>
      <View style={buttonPosition}>
     
        <View style={button}>
          <TouchableOpacity 
          onPress={handleSubmit}
          style={button}>
            <Text style={buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
   
      </View>
    </View>
  );
}
export default Home;

