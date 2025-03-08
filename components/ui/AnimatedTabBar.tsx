import React, { useEffect, useRef } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as Haptics from "expo-haptics";
import { Colors } from "@/constants/Colors";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "light" ? "light" : "dark"];
  const containerRef = useRef<View>(null);

  // Indicator animation
  const indicatorPosition = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.measure((x, y, width) => {
        const tabWidth = width / state.routes.length;
        indicatorPosition.value = withSpring(state.index * tabWidth, {
          damping: 20,
          stiffness: 150,
        });
        indicatorWidth.value = tabWidth;
      });
    }
  }, [state.index, state.routes.length, indicatorPosition, indicatorWidth]);

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: indicatorPosition.value }],
      width: indicatorWidth.value,
    };
  });

  const renderTabBar = () => {
    return (
      <View
        ref={containerRef}
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          height: 58,
          overflow: "hidden",
        }}
        className="items-center bg-black mx-2 rounded-3xl  "
      >
        <Animated.View
          className="absolute     "
          style={[
            {
              position: "absolute",
              inset: 0,
              backgroundColor:
                colorScheme === "dark"
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,122,255,0.2)",
              zIndex: 10,
              borderRadius: 24,
            },
            indicatorStyle,
          ]}
        />
        <View className="flex-row size-full  z-20">{renderTabs()}</View>
      </View>
    );
  };

  const renderTabs = () => {
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key];

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          navigation.navigate(route.name);
        }
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={`tab-${route.name}`}
          onPress={onPress}
          className="flex-1 justify-center  items-center rounded-full"
        >
          {options.tabBarIcon?.({
            focused: isFocused,
            color:
              isFocused && colors.tint ? colors.tint : colors.tabIconDefault,
            size: 24,
          })}
        </TouchableOpacity>
      );
    });
  };

  return renderTabBar();
}
