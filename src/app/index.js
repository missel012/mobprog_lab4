import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('dashboard');
  };

  const handleForgotPassword = () => {
    router.push('recover');
  };

  const handleRegister = () => {
    router.push('register');
  };

  return (
    <LinearGradient colors={['#A7C7E7', '#89CFF0']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome!</Text>

        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={emailAddress}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
          Forgot your password?
        </Text>

        <Text style={styles.registerLink} onPress={handleRegister}>
          Don't have an account yet? Register here
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#0047AB',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0047AB',
    textDecorationLine: 'underline',
  },
  registerLink: {
    color: '#0047AB',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
