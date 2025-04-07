import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        paddingTop: 10,
        height: 80,
        backgroundColor: '#FDEBDC',
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: '#715312',
      tabBarInactiveTintColor: '#6F5E4E',
      tabBarLabelStyle: {
        fontFamily: 'Amiri-Bold',
        fontSize: 12,
      },
      tabBarIcon: ({ focused, color }) => (
        <View style={{
          backgroundColor: focused ? '#FFDDC0' : 'transparent',
          padding: 8,
          borderRadius: 8,
        }} />
      ),
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: 'التقويم الهجري',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              backgroundColor: focused ? '#FFDDC0' : 'transparent',
              padding: 8,
              borderRadius: 8,
              marginBottom: 8
            }}>
              <FontAwesome name="calendar" size={24} color={color} />
            </View>
          ),
        }}
      />
      
            <Tabs.Screen
        name="convert"
        options={{
          title: 'تحويل التاريخ',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              backgroundColor: focused ? '#FFDDC0' : 'transparent',
              padding: 8,
              borderRadius: 8,
              marginBottom: 8
            }}>
              <FontAwesome name="exchange" size={24} color={color} />
            </View>
          ),
        }}
      />
  </Tabs>
}