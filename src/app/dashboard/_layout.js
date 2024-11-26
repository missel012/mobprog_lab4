import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, View, Image, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#0047AB',
          },
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: '#0047AB',
          drawerInactiveTintColor: 'white',
          drawerItemStyle: {
            borderRadius: 10,
            marginVertical: 5,
            paddingHorizontal: 10,
          },
        }}
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen
          name="(tabs)" // Assuming this is the Home screen
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={focused ? '#0047AB' : 'white'}
              />
            ),
            headerRight: () => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <TextInput
                  placeholder="Search..."
                  style={{
                    width: '90%',
                    height: 50,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    marginTop: 25,
                    justifyContent: 'center',
                    borderRadius: 25,
                    paddingHorizontal: 15,
                    fontSize: 16,
                    backgroundColor: '#f8f8f8',
                  }}
                />
              </View>
            ),
            title: '', // Hide the title
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            drawerLabel: 'Notifications',
            title: 'Notifications',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'bell' : 'bell-outline'}
                size={20}
                color={focused ? '#0047AB' : 'white'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="favorites"
          options={{
            drawerLabel: 'Favorites',
            title: 'Favorites',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'heart' : 'heart-outline'}
                size={20}
                color={focused ? '#0047AB' : 'white'}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props) {
  const router = useRouter();
  const year = new Date().getFullYear();
  const { top, bottom } = useSafeAreaInsets();

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => router.replace("/") },
      ],
      { cancelable: false }
    );
  };

  const isFocused = (routeName) =>
    props.state.routes.some(
      (route, index) =>
        route.name === routeName && props.state.index === index
    );

  return (
    <View style={{ flex: 1, backgroundColor: '#0047AB' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: top }}
      >
        {/* Profile Section */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20 + top,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
          }}
        >
          <Image
            source={require('../../assets/logo.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Marisol A. Datahan</Text>
          <Text style={{ color: 'white' }}>datahan.marisol012@gmail.com</Text>
        </View>

        {/* Drawer Items */}
        <DrawerItemList
          {...props}
          activeTintColor="#0047AB"
          inactiveTintColor="white"
          labelStyle={({ focused }) => ({
            color: focused ? '#0047AB' : 'white',
          })}
          icon={({ focused, name }) => (
            <MaterialCommunityIcons
              name={
                name === 'Home'
                  ? focused
                    ? 'home'
                    : 'home-outline'
                  : name === 'notifications'
                  ? focused
                    ? 'bell'
                    : 'bell-outline'
                  : name === 'favorites'
                  ? focused
                    ? 'heart'
                    : 'heart-outline'
                  : ''
              }
              size={20}
              color={focused ? '#0047AB' : 'white'}
            />
          )}
        />
        
        {/* Logout Item */}
        <DrawerItem
          label="Logout"
          icon={({ focused }) => (
            <MaterialCommunityIcons
              name="logout"
              size={20}
              color={focused ? '#0047AB' : 'white'}
            />
          )}
          labelStyle={{
            color: isFocused('Logout') ? '#0047AB' : 'white',
          }}
          style={{
            backgroundColor: isFocused('Logout') ? 'white' : undefined,
            borderRadius: 10,
            marginVertical: 5,
            paddingHorizontal: 10,
          }}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>

      {/* Footer Section */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20 + bottom,
        }}
      >
        <Text style={{ fontSize: 12, color: 'white' }}>
          Copyright &copy; {year}. All rights reserved.
        </Text>
      </View>
    </View>
  );
}
