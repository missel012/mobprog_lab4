import { View, Image, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

export default function DrawerContent(props) {
  const router = useRouter();
  const year = new Date().getFullYear();

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => router.replace("/"),
        },
      ],
      { cancelable: false }
    );
  };

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      {/* Linear Gradient applied to Drawer */}
      <LinearGradient
        colors={['#A7C7E7', '#6CB4EE']} // Define your gradient colors
        style={{ flex: 1 }} // Ensure gradient covers the full screen
      >
        <DrawerContentScrollView
          {...props}
          scrollEnabled={true}
          contentContainerStyle={{ paddingTop: top }}
        >
          {/* Profile Section */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20 + top,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd', 
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontWeight: 'bold', color: '#333' }}>Marisol A. Datahan</Text>
            <Text style={{ color: '#555' }}>datahan.marisol012@gmail.com</Text>
          </View>

          {/* Drawer Items */}
          <DrawerItemList
            {...props}
            labelStyle={{
              color: '#333', // Dark text for better readability
            }}
            itemStyle={{
              paddingVertical: 10,
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            )}
          />
          
          <DrawerItem
            label="Logout"
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            )}
            labelStyle={{
              marginLeft: 10,
              color: '#333', // Dark text for logout button
            }}
            onPress={handleLogout}
          />
        </DrawerContentScrollView>

        {/* Footer Section */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20 + bottom,
          }}
        >
          <Text style={{ fontSize: 12, color: '#555' }}>Copyright &copy; {year}. All rights reserved</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
