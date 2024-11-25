import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAppearanceExpanded, setIsAppearanceExpanded] = useState(false);

  const options = [
    { title: 'Account', icon: 'person-outline' },
    { title: 'Privacy', icon: 'lock-closed-outline' },
    { title: 'Help and Support', icon: 'help-circle-outline' }, // Added Help and Support
    { title: 'Others', icon: 'ellipsis-horizontal-outline' }, // Added Others
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAppearanceToggle = () =>
    setIsAppearanceExpanded(!isAppearanceExpanded);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.headerTitle}>
          Settings
        </Text>
      </View>

      {/* Settings Options */}
      <View style={styles.listContainer}>
        {/* Static Options */}
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Ionicons name={option.icon} size={20} color="#0047AB" />
            <Text style={styles.listItemText}>{option.title}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}

        {/* Appearance Section with Dropdown */}
        <TouchableOpacity
          style={[styles.listItem, isAppearanceExpanded && styles.expandedItem]}
          onPress={handleAppearanceToggle}
        >
          <Ionicons name="eye-outline" size={20} color="#0047AB" />
          <Text style={styles.listItemText}>Appearance</Text>
          <Ionicons
            name={
              isAppearanceExpanded
                ? 'chevron-down-outline'
                : 'chevron-forward-outline'
            }
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>

        {isAppearanceExpanded && (
          <View style={styles.appearanceDropdown}>
            <Text style={styles.dropdownText}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 3, // Subtle shadow for the list container
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  expandedItem: {
    borderBottomWidth: 0,
  },
  appearanceDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  listItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
});
