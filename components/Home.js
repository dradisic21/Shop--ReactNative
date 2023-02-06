import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import { button, text } from "../stitches.style";
  
  export default function Home() {
    return (
      <View style={styles.container}>
          <View style={styles.textPosition}>
            <Text style={text.variants.color.primary}>
              Define yourself in your unique way.
            </Text>
          </View>
          <View>
            <View style={styles.image1}>
              <Image source={require("../assets/line.png")} />
            </View>
            <View style={styles.image2}>
              <Image source={require("../assets/man.png")} />
            </View>
          </View>
          <View style={styles.buttonPosition}>
            <View style={button}>
              <Button color="#fff" title="Get Started" />
            </View>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    buttonPosition: {
      justifyContent: "center",
      alignItems: "center",
      width: 390,
      bottom: 10,
      paddingTop: 22,
      paddingBottom: 21,
      borderTopWidth: 1,
      borderTopColor: "rgba(0, 0, 0, 0.2)",
      backgroundColor: '#fff'
    },
    textPosition: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      top: 60,
      left: 24,
    },
    image1: {
      position: "absolute",
      top: 110,
    },
    image2: {
      top: 90,
      left: 15,
    },
  });
  