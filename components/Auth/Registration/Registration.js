import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const navigation = useNavigation();

  const handleSubmit = (e) => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Let’s create your account</Text>
      <View style={styles.formContainer}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your First name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Last name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.link}>
      <Text>Already a member?</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.linkText}>Log In</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    
  },
  formContainer: {
  marginHorizontal: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 32,
    lineHeight: 49,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 50,
    marginLeft: 24,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 35,
    marginLeft: 24,
    marginRight: 24,
  },
  input: {
    width: 341,
    height: 53,
    marginTop: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    borderWidth: 0,
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "400",
  },
  button: {
  marginTop: 25,
  marginHorizontal: 12,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  backgroundColor: "black",
  width: 341,
  height: 58,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
  },
  link: {
    paddingTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#4287f5",
    fontWeight: "bold",
  },
  linkText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
  label: {
    marginTop: 11,
    marginHorizontal: 12,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  }
});

export default Registration;