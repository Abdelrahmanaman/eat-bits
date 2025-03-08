import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { RecipeCard } from "@/components/ui/RecipeCard";
import { mockRecipes } from "@/mocks/recipe";
import { Alert } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleLike = (id: string) => {
    console.log(`Liked recipe: ${id}`);
  };

  const handleComment = (id: string) => {
    console.log(`Comment on recipe: ${id}`);
  };

  const handleReshare = (id: string) => {
    console.log(`Reshared recipe: ${id}`);
  };

  const handleSave = (id: string) => {
    console.log(`Saved recipe: ${id}`);
  };

  const handleShare = (id: string) => {
    Alert.alert("Share", `Sharing recipe: ${id}`);
  };

  const handleMoreOptions = (id: string) => {
    Alert.alert("Options", "More options", [
      { text: "Report", onPress: () => console.log("Report") },
      { text: "Not interested", onPress: () => console.log("Not interested") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const handleRecipePress = (id: string) => {
    console.log(`Viewing recipe details: ${id}`);
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? "bg-gray-950" : "bg-gray-100"}`}
    >
      <FlatList
        data={mockRecipes}
        className="border border-zinc-900 rounded-3xl "
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => handleRecipePress(item.id)}
            onLike={() => handleLike(item.id)}
            onComment={() => handleComment(item.id)}
            onReshare={() => handleReshare(item.id)}
            onSave={() => handleSave(item.id)}
            onShare={() => handleShare(item.id)}
            onMoreOptions={() => handleMoreOptions(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}
