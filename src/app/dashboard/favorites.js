import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.content}>You don't have any favorites yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Favorites;
