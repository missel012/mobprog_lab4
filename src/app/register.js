import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    setIsRegistered(true);
    setTimeout(() => {
      router.replace('/');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.gradientContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text variant="headlineMedium" style={styles.title}>
          Create an Account
        </Text>

        {isRegistered && (
          <Text style={styles.successMessage}>Registered successfully!</Text>
        )}

        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
          mode="flat"
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
          mode="flat"
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="flat"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="flat"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          mode="flat"
          secureTextEntry
        />

        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.registerButton}
          contentStyle={{ paddingVertical: 8 }}
        >
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A7C7E7', // Keep the gradient's primary color as the background.
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#0047AB',
    borderRadius: 25,
    marginTop: 10,
  },
  successMessage: {
    color: 'green',
    marginBottom: 12,
    fontSize: 16,
  },
});
