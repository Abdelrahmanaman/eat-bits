import { Image, View, Text } from "react-native";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="relative h-[200px] bg-[#A1CEDC] dark:bg-[#1D3D47]">
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="absolute bottom-0 left-0 h-[178px] w-[290px]"
        />
      </View>

      <View className="p-4">
        <View className="flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-black dark:text-white">
            Welcome Abdelrahman! 👋
          </Text>
        </View>

        <View className="mt-6 space-y-6">
          <View>
            <Text className="text-xl font-bold text-black dark:text-white">
              Step 1: Try it
            </Text>
            <Text className="mt-2 text-base text-gray-800 dark:text-gray-200">
              Edit <Text className="font-semibold">app/(tabs)/index.tsx</Text>{" "}
              to see changes. Press Hello to open developer tools.
            </Text>
          </View>

          <View>
            <Text className="text-xl font-bold text-black dark:text-white">
              Step 2: Explore
            </Text>
            <Text className="mt-2 text-base text-gray-800 dark:text-gray-200">
              Tap the Explore tab to learn more about what's included in this
              starter app.
            </Text>
          </View>

          <View>
            <Text className="text-xl font-bold text-black dark:text-white">
              Step 3: Get a fresh start
            </Text>
            <Text className="mt-2 text-base text-gray-800 dark:text-gray-200">
              When you're ready, run{" "}
              <Text className="font-semibold">npm run reset-project</Text> to
              get a fresh <Text className="font-semibold">app</Text> directory.
              This will move the current{" "}
              <Text className="font-semibold">app</Text> to{" "}
              <Text className="font-semibold">app-example</Text>.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
