import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, View, Text } from 'react-native';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? 'white' : '#333', fontWeight: focused ? 'bold' : 'normal' }}>
                Home
              </Text>
            ),
            title: '',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={focused ? 'white'  : '#555'} // Adjust icon color when focused
              />
            ),
            headerRight: () => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                {/* Search Bar */}
                <TextInput
                  placeholder="Search..."
                  style={{
                    width: '90%', // Adjust width as necessary (80% of the screen width)
                    height: 50,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    marginTop: 25,
                    justifyContent: 'center',
                    borderRadius: 25, // Rounded corners
                    paddingHorizontal: 15,
                    fontSize: 16,
                    backgroundColor: '#f8f8f8',
                  }}
                />
              </View>
            ),
          }}
        />
      
        <Drawer.Screen
          name="notifications" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? 'white' : '#333', fontWeight: focused ? 'bold' : 'normal' }}>
                Notifications
              </Text>
            ),
            title: 'Notifications',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'bell' : 'bell-outline'}
                size={20}
                color={focused ? 'white'  : '#555'} // Adjust icon color when focused
              />
            ),
          }}
        />
        
        <Drawer.Screen
          name="favorites" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? 'white' : '#333', fontWeight: focused ? 'bold' : 'normal' }}>
                Favorites
              </Text>
            ),
            title: 'Favorites',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'heart' : 'heart-outline'}
                size={20}
                color={focused ? 'white'  : '#555'} // Adjust icon color when focused
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
