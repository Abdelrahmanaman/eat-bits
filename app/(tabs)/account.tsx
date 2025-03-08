import { View, Text, ScrollView } from "react-native";
import React from "react";

const account = () => {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View>
        <Text className="text-5xl text-black dark:text-white">Account</Text>
      </View>
    </ScrollView>
  );
};

export default account;
