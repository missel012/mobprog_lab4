import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Recover() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSendRecoveryEmail = () => {
    setMessage('Recovery email sent successfully! Please check your inbox.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')} // Ensure logo path is correct
          style={styles.logo}
        />
        <Text variant="headlineMedium" style={styles.title}>
          Recover
        </Text>

        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSendRecoveryEmail}
          style={styles.recoveryButton}
          buttonColor="#0047AB"
        >
          Send Recovery Email
        </Button>

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <Text
          style={styles.backText}
          onPress={() => router.push('/')} // Adjust route to your login path
        >
          Back to Login
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A7C7E7',
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  recoveryButton: {
    width: '100%',
    borderRadius: 25,
    marginTop: 10,
  },
  message: {
    marginTop: 12,
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
  backText: {
    marginTop: 12,
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
