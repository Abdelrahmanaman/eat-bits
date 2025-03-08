import { Tabs } from "expo-router";
import React from "react";
import { Bell, Bookmark, House, Telescope, User } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBar } from "@/components/ui/AnimatedTabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
        tabBarStyle: {
          display: "none", // Hide the default tab bar
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size = 24 }) => (
            <House size={size} strokeWidth={2.5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size = 24 }) => (
            <Telescope size={size} strokeWidth={2.5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size = 24 }) => (
            <Bell size={size} strokeWidth={2.5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size = 24 }) => (
            <Bookmark size={size} strokeWidth={2.5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size = 24 }) => (
            <User size={size} strokeWidth={2.5} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
