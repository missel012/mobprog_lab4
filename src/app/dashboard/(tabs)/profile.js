import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cover Photo */}
      <View style={styles.coverPhotoContainer}>
        <Image
          source={require('../assets/cover-photo.jpg')} // Replace with actual cover photo
          style={styles.coverPhoto}
        />
      </View>

      {/* Profile Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/avatar.jpg')} // Replace with actual avatar image
          style={styles.avatar}
        />
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text variant="headlineSmall" style={styles.name}>
          Marisol A. Datahan
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="datahan.marisol012@gmail.com"
            placeholderTextColor="#0047AB"
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.input}
            placeholder="09352894109"
            placeholderTextColor="#0047AB"
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Canitoan, Cagayan de Oro City"
            placeholderTextColor="#0047AB"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light background
  },
  coverPhotoContainer: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#A7C7E7', // Light blue background
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF', // White border for avatar
    backgroundColor: '#89CFF0', // Matches color scheme
    elevation: 5, // Slight elevation
  },
  profileDetails: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333', // Dark gray for name text
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF', // White cards
    fontWeight: '600',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#666666', // Medium gray for labels (unchanged)
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 10, // Smooth edges
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#0047AB', // Blue for input text
    backgroundColor: '#F7F7F7', // Subtle background for inputs
  },
});

export default Profile;
