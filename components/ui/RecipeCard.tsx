import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share,
  MoreHorizontal,
  Clock,
  Users,
} from "lucide-react-native";
import * as Haptics from "expo-haptics";
import type { Recipe } from "@/types/recipe";
import { formatDistanceToNow } from "date-fns";
import { ImageViewer } from "./ImageViewer";

export interface RecipeCardProps {
  recipe: Recipe;
  onPress?: () => void;
  onLike?: () => void;
  onComment?: () => void;
  onReshare?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  onMoreOptions?: () => void;
}

export function RecipeCard({
  recipe,
  onPress,
  onLike,
  onComment,
  onReshare,
  onSave,
  onShare,
  onMoreOptions,
}: RecipeCardProps) {
  const {
    id,
    title,
    description,
    imageUrl,
    username,
    userAvatar,
    createdAt,
    likes,
    comments: commentCount,
    shares,
    isLiked: initialIsLiked,
    isSaved: initialIsSaved,
  } = recipe;

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "dark" ? "dark" : "light"];
  const isDark = colorScheme === "dark";

  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isSaved, setIsSaved] = useState(initialIsSaved);
  const [likesCount, setLikesCount] = useState(likes);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);

  const handleLike = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
    onLike?.();
  };

  const handleSave = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSaved(!isSaved);
    onSave?.();
  };

  const handleAction = (action: (() => void) | undefined) => {
    if (!action) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    action();
  };

  // Format the date
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  const handleImagePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsImageViewerVisible(true);
  };

  return (
    <View className={`mb-4 rounded-xl overflow-hidden ${isDark ? "" : ""}`}>
      {/* Header */}
      <View className="flex-row justify-between items-center p-3">
        <View className="flex-row items-center">
          <Image
            source={{ uri: userAvatar }}
            className="w-10 h-10 rounded-full mr-2"
          />
          <View>
            <Text
              className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {username}
            </Text>
            <Text
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              @{username} · {timeAgo}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => handleAction(onMoreOptions)}
          className="p-1"
        >
          <MoreHorizontal size={20} color={isDark ? "#A0A0A0" : "#6E6E6E"} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="px-3">
        <Text
          className={`text-lg font-bold mb-1 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </Text>
        <Text
          className={`mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          numberOfLines={3}
        >
          {description}
        </Text>

        {/* Recipe Meta Info - Ingredients count and steps count */}
        <View className="flex-row mb-2">
          <View className="flex-row items-center mr-4">
            <Clock
              size={16}
              color={isDark ? "#A0A0A0" : "#6E6E6E"}
              style={{ marginRight: 4 }}
            />
            <Text className={isDark ? "text-gray-400" : "text-gray-500"}>
              {recipe.steps.length} steps
            </Text>
          </View>
          <View className="flex-row items-center">
            <Users
              size={16}
              color={isDark ? "#A0A0A0" : "#6E6E6E"}
              style={{ marginRight: 4 }}
            />
            <Text className={isDark ? "text-gray-400" : "text-gray-500"}>
              {recipe.ingredients.length} ingredients
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Image */}
      {imageUrl && (
        <>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleImagePress}
            className="mt-2"
          >
            <Image
              source={{ uri: imageUrl }}
              className="w-full h-60 rounded-3xl"
              style={{ resizeMode: "cover" }}
            />
          </TouchableOpacity>
          <ImageViewer
            isVisible={isImageViewerVisible}
            imageUrl={imageUrl}
            onClose={() => setIsImageViewerVisible(false)}
            isLiked={isLiked}
            isSaved={isSaved}
            onLike={handleLike}
            onComment={() => handleAction(onComment)}
            onReshare={() => handleAction(onReshare)}
            onSave={handleSave}
            onShare={() => handleAction(onShare)}
          />
        </>
      )}

      {/* Action Bar */}
      <View className="flex-row justify-between px-2 py-3">
        {/* Like Button */}
        <TouchableOpacity
          onPress={handleLike}
          className="flex-row items-center px-2"
        >
          <Heart
            size={20}
            color={isLiked ? "#FF4B4B" : isDark ? "#A0A0A0" : "#6E6E6E"}
            fill={isLiked ? "#FF4B4B" : "transparent"}
          />
          {likesCount > 0 && (
            <Text
              className={`ml-1 ${
                isLiked
                  ? "text-red-500"
                  : isDark
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {likesCount}
            </Text>
          )}
        </TouchableOpacity>

        {/* Comment Button */}
        <TouchableOpacity
          onPress={() => handleAction(onComment)}
          className="flex-row items-center px-2"
        >
          <MessageCircle size={20} color={isDark ? "#A0A0A0" : "#6E6E6E"} />
          {commentCount > 0 && (
            <Text
              className={isDark ? "ml-1 text-gray-400" : "ml-1 text-gray-500"}
            >
              {commentCount}
            </Text>
          )}
        </TouchableOpacity>

        {/* Reshare Button */}
        <TouchableOpacity
          onPress={() => handleAction(onReshare)}
          className="flex-row items-center px-2"
        >
          <Repeat2 size={20} color={isDark ? "#A0A0A0" : "#6E6E6E"} />
          {shares > 0 && (
            <Text
              className={isDark ? "ml-1 text-gray-400" : "ml-1 text-gray-500"}
            >
              {shares}
            </Text>
          )}
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity
          onPress={handleSave}
          className="flex-row items-center px-2"
        >
          <Bookmark
            size={20}
            color={isSaved ? colors.tint : isDark ? "#A0A0A0" : "#6E6E6E"}
            fill={isSaved ? colors.tint : "transparent"}
          />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity
          onPress={() => handleAction(onShare)}
          className="flex-row items-center px-2"
        >
          <Share size={20} color={isDark ? "#A0A0A0" : "#6E6E6E"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
