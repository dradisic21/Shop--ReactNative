import { StyleSheet, View } from "react-native";
import Home from "./components/Home";


export default function App() {
  return (
    <View style={styles.container}>
        <Home />
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
});
