import React, { useEffect } from "react";
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share,
  X,
} from "lucide-react-native";
import * as Haptics from "expo-haptics";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";

export interface ImageViewerProps {
  isVisible: boolean;
  imageUrl: string;
  onClose: () => void;
  isLiked: boolean;
  isSaved: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onReshare?: () => void;
  onSave?: () => void;
  onShare?: () => void;
}

const { width, height } = Dimensions.get("window");

export function ImageViewer({
  isVisible,
  imageUrl,
  onClose,
  isLiked,
  isSaved,
  onLike,
  onComment,
  onReshare,
  onSave,
  onShare,
}: ImageViewerProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const colors = Colors[isDark ? "dark" : "light"];

  // Animation values for controls
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const [controlsVisible, setControlsVisible] = React.useState(true);

  // Handle tap to toggle controls
  const toggleControls = () => {
    if (controlsVisible) {
      // Hide controls
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setControlsVisible(false));
    } else {
      // Show controls
      setControlsVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  // Handle action with haptic feedback
  const handleAction = (action: (() => void) | undefined) => {
    if (!action) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    action();
  };

  // Reset controls visibility when modal opens
  useEffect(() => {
    if (isVisible) {
      setControlsVisible(true);
      fadeAnim.setValue(1);
    }
  }, [isVisible, fadeAnim]);

  if (!isVisible) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <StatusBar hidden />
      <View className="flex-1 bg-black/90 justify-center items-center">
        <BlurView
          intensity={90}
          tint={isDark ? "dark" : "light"}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />

        <TouchableOpacity
          activeOpacity={1}
          className="w-full h-full justify-center items-center"
          onPress={toggleControls}
        >
          <Image
            source={{ uri: imageUrl }}
            className="w-full h-auto max-h-[80%] aspect-square"
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Top controls - Close button */}
        <Animated.View
          style={[
            { opacity: fadeAnim },
            { display: controlsVisible ? "flex" : "none" },
          ]}
          className="absolute top-0 left-0 right-0 z-10"
        >
          <SafeAreaView className="w-full">
            <TouchableOpacity
              onPress={onClose}
              className="m-4 h-10 w-10 rounded-full absolute right-0 top-12 bg-black/50 justify-center items-center"
              // hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
            >
              <X
                size={24}
                color={isDark ? "#FFFFFF" : "#000000"}
                strokeWidth={2.5}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </Animated.View>

        {/* Bottom controls - Action buttons */}
        <Animated.View
          style={[
            { opacity: fadeAnim },
            { display: controlsVisible ? "flex" : "none" },
          ]}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <SafeAreaView edges={["bottom"]} className="w-full">
            <View className="flex-row justify-around py-4 px-5  mb-4">
              {/* Like Button */}
              <TouchableOpacity
                onPress={() => handleAction(onLike)}
                className="p-2 rounded-full"
              >
                <Heart
                  size={28}
                  color={isLiked ? "#FF4B4B" : "#FFFFFF"}
                  fill={isLiked ? "#FF4B4B" : "transparent"}
                  strokeWidth={2}
                />
              </TouchableOpacity>

              {/* Comment Button */}
              <TouchableOpacity
                onPress={() => handleAction(onComment)}
                className="p-2 rounded-full"
              >
                <MessageCircle size={28} color="#FFFFFF" strokeWidth={2} />
              </TouchableOpacity>

              {/* Reshare Button */}
              <TouchableOpacity
                onPress={() => handleAction(onReshare)}
                className="p-2 rounded-full"
              >
                <Repeat2 size={28} color="#FFFFFF" strokeWidth={2} />
              </TouchableOpacity>

              {/* Save Button */}
              <TouchableOpacity
                onPress={() => handleAction(onSave)}
                className="p-2 rounded-full"
              >
                <Bookmark
                  size={28}
                  color="#FFFFFF"
                  fill={isSaved ? "#FFFFFF" : "transparent"}
                  strokeWidth={2}
                />
              </TouchableOpacity>

              {/* Share Button */}
              <TouchableOpacity
                onPress={() => handleAction(onShare)}
                className="p-2 rounded-full"
              >
                <Share size={28} color="#FFFFFF" strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
}
