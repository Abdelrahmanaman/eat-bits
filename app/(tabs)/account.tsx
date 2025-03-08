import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { mockUsers, mockRecipes } from "@/mocks/recipe";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, ArrowLeft } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { RecipeCard } from "@/components/ui/RecipeCard";
import { StatusBar } from "expo-status-bar";
import type { User, Recipe } from "@/types/recipe";

const { width } = Dimensions.get("window");

// Format large numbers with K/M suffixes
const formatCount = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

// Header component with back button and title
const ProfileHeader = ({ isDark }: { isDark: boolean }) => (
  <View className="flex-row justify-between items-center px-4 py-2">
    <TouchableOpacity className="p-2">
      <ArrowLeft size={24} color={isDark ? "#FFFFFF" : "#000000"} />
    </TouchableOpacity>
    <Text
      className={`text-lg font-semibold ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      Profile
    </Text>
    <View style={{ width: 32 }} /> {/* Spacer for alignment */}
  </View>
);

// User info component with avatar, bio, and stats
const UserInfo = ({ user, isDark }: { user: User; isDark: boolean }) => (
  <View className="px-4 pb-4">
    {/* Avatar */}
    <View className="mt-[-40px] mb-3">
      <Image
        source={{ uri: user.avatarUrl }}
        className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900"
      />
    </View>

    {/* Profile Actions */}
    <View className="flex-row justify-end mb-3">
      <TouchableOpacity className="mr-2 px-4 py-2 rounded-full bg-transparent border border-gray-300 dark:border-gray-700">
        <Mail size={20} color={isDark ? "#FFFFFF" : "#000000"} />
      </TouchableOpacity>
      <TouchableOpacity className="px-4 py-2 rounded-full bg-black dark:bg-white">
        <Text className="font-semibold text-white dark:text-black">
          {user.isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>
    </View>

    {/* Name and Username */}
    <Text
      className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}
    >
      {user.name}
    </Text>
    <Text className="text-gray-500 dark:text-gray-400 mb-2">
      @{user.username}
    </Text>

    {/* Bio */}
    <Text className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      {user.bio}
    </Text>

    {/* Followers/Following */}
    <View className="flex-row mb-4">
      <TouchableOpacity className="mr-4">
        <Text
          className={`${isDark ? "text-white" : "text-black"} font-semibold`}
        >
          {formatCount(user.following)}
          <Text className="text-gray-500 dark:text-gray-400 font-normal">
            {" "}
            Following
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          className={`${isDark ? "text-white" : "text-black"} font-semibold`}
        >
          {formatCount(user.followers)}
          <Text className="text-gray-500 dark:text-gray-400 font-normal">
            {" "}
            Followers
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Tab component for navigation between different content types
const ProfileTabs = ({
  activeTab,
  setActiveTab,
  isDark,
}: {
  activeTab: number;
  setActiveTab: (index: number) => void;
  isDark: boolean;
}) => {
  const tabWidth = width / 4; // 4 tabs
  const indicatorPosition = useSharedValue(activeTab * tabWidth);

  // Animated style for the tab indicator
  const indicatorStyle = useAnimatedStyle(() => {
    indicatorPosition.value = withSpring(activeTab * tabWidth, {
      damping: 15,
      stiffness: 150,
    });

    return {
      transform: [{ translateX: indicatorPosition.value }],
      width: tabWidth,
    };
  });

  // Handle tab press with haptic feedback
  const handleTabPress = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActiveTab(index);
  };

  const tabs = ["Posts", "Replies", "Media", "Likes"];

  return (
    <View className="border-b border-gray-200 dark:border-gray-800">
      <View className="flex-row relative">
        {/* Tab Indicator */}
        <Animated.View
          style={[indicatorStyle]}
          className="absolute bottom-0 h-1 bg-black dark:bg-white"
        />

        {/* Tab Items */}
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            className="flex-1 py-3 items-center"
            onPress={() => handleTabPress(index)}
          >
            <Text
              className={`font-medium ${
                activeTab === index
                  ? isDark
                    ? "text-white"
                    : "text-black"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Empty state component for tabs with no content
const EmptyState = ({
  message,
  isDark,
}: {
  message: string;
  isDark: boolean;
}) => (
  <View className="py-10 items-center">
    <Text className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
      {message}
    </Text>
  </View>
);

// Posts tab content
const PostsTab = ({
  recipes,
  isDark,
}: {
  recipes: Recipe[];
  isDark: boolean;
}) => (
  <View className="pt-2">
    {recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onLike={() => console.log(`Liked recipe: ${recipe.id}`)}
        onComment={() => console.log(`Comment on recipe: ${recipe.id}`)}
        onReshare={() => console.log(`Reshared recipe: ${recipe.id}`)}
        onSave={() => console.log(`Saved recipe: ${recipe.id}`)}
        onShare={() => console.log(`Shared recipe: ${recipe.id}`)}
        onMoreOptions={() =>
          console.log(`More options for recipe: ${recipe.id}`)
        }
      />
    ))}
    {recipes.length === 0 && (
      <EmptyState message="No posts yet" isDark={isDark} />
    )}
  </View>
);

// Main profile screen component
const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Use the first mock user for the profile
  const user = mockUsers[0];

  // Get user's recipes
  const userRecipes = mockRecipes.filter((recipe) => recipe.userId === user.id);

  // Tab state
  const [activeTab, setActiveTab] = useState(0);

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Posts
        return <PostsTab recipes={userRecipes} isDark={isDark} />;
      case 1: // Replies
        return <EmptyState message="No replies yet" isDark={isDark} />;
      case 2: // Media
        return <EmptyState message="No media yet" isDark={isDark} />;
      case 3: // Likes
        return <EmptyState message="No likes yet" isDark={isDark} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <ProfileHeader isDark={isDark} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <View className="h-40 bg-gray-200 dark:bg-gray-800" />

        <UserInfo user={user} isDark={isDark} />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDark={isDark}
        />

        {/* Tab Content */}
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
