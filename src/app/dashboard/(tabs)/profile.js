import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cover photo */}
      <View style={styles.coverPhotoContainer}>
        <Image
          source={require('../assets/cover-photo.jpg')} // replace with actual cover photo
          style={styles.coverPhoto}
        />
      </View>

      {/* Profile Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/avatar.jpg')} // replace with actual avatar image
          style={styles.avatar}
        />
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text variant="headlineSmall" style={styles.name}>Marisol A. Datahan</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="datahan.marisol012@gmail.com" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput style={styles.input} placeholder="09352894109" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} placeholder="Canitoan, Cagayan de Oro City" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  coverPhotoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 15, // Smooth edges for the cover photo
    overflow: 'hidden', // Ensure the image doesn't go beyond the border
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15, // Smooth edges for the image
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -80, // Overlap the cover photo
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFF', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Slight elevation for the avatar
  },
  profileDetails: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10, // Smooth edges for each input container
    overflow: 'hidden',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25, // Smooth edges for the input fields
    paddingLeft: 15,
    backgroundColor: '#F7F7F7', // Subtle background for inputs
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
