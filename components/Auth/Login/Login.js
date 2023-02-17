import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  container,
  formContainer,
  title,
  subtitle,
  label,
  input,
  button,
  buttonText,
} from "./stitches.login";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = (e) => {
    navigation.navigate('Products')
  }

  return (
    <View style={container}>
      <Text style={title}>Sign in</Text>
      <Text style={subtitle}>Let’s shop together</Text>
      <View style={formContainer}>
        <Text style={label}>Email</Text>
        <TextInput
          style={input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={label}>Password</Text>
        <TextInput
          style={input}
          placeholder="Enter your Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={button} onPress={handleSubmit}>
          <Text style={buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
