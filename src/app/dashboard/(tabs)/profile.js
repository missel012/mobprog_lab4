import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; // For icons

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('datahan.marisol012@gmail.com');
  const [mobile, setMobile] = useState('09352894109');
  const [address, setAddress] = useState('Canitoan, Cagayan de Oro City');

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

        {/* Email */}
        <View style={styles.infoCard}>
          <MaterialIcons name="email" size={20} color="#666666" style={styles.icon} />
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#666666"
            />
          ) : (
            <Text style={styles.infoText}>{email}</Text>
          )}
        </View>

        {/* Mobile */}
        <View style={styles.infoCard}>
          <Ionicons name="call" size={20} color="#666666" style={styles.icon} />
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              placeholderTextColor="#666666"
            />
          ) : (
            <Text style={styles.infoText}>{mobile}</Text>
          )}
        </View>

        {/* Address */}
        <View style={styles.infoCard}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#666666" style={styles.icon} />
          {isEditing ? (
            <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="#666666"
          />
        ) : (
          <Text style={styles.infoText}>{address}</Text>
        )}
      </View>

      {/* Update Profile Button */}
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => setIsEditing(!isEditing)}
      >
        <Text style={styles.updateButtonText}>
          {isEditing ? 'Save Changes' : 'Update Profile'}
        </Text>
      </TouchableOpacity>
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
  backgroundColor: '#E0E0E0', // Neutral background color
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
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFFFFF', // White cards
  borderRadius: 15,
  padding: 10,
  marginBottom: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
},
icon: {
  marginRight: 10,
},
input: {
  flex: 1,
  height: 40,
  borderRadius: 10, // Smooth edges
  paddingHorizontal: 10,
  fontSize: 14,
  color: '#0047AB', // Neutral text color
  backgroundColor: '#F7F7F7', // Subtle background for inputs
},
infoText: {
  fontSize: 14,
  color: '#333333', 
  flex: 1,
},
updateButton: {
  backgroundColor: '#0047AB',
  paddingVertical: 10,
  borderRadius: 15,
  alignItems: 'center',
  marginTop: 20,
},
updateButtonText: {
  color: '#FFFFFF', // White text for the button
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default Profile;
