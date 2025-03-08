import { Recipe, User, Comment, Collection } from "@/types/recipe";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Jamie Oliver",
    username: "jamieoliver",
    bio: "Chef, restaurateur and cookbook author. I believe in good food for everyone!",
    avatarUrl:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    followers: 5200000,
    following: 125,
    isFollowing: true,
  },
  {
    id: "2",
    name: "Gordon Ramsay",
    username: "gordonramsay",
    bio: "British chef, restaurateur, television personality, and writer.",
    avatarUrl:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    followers: 7800000,
    following: 85,
    isFollowing: false,
  },
  {
    id: "3",
    name: "Ina Garten",
    username: "inagarten",
    bio: "Cookbook author and host of Barefoot Contessa on Food Network",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    followers: 3400000,
    following: 92,
    isFollowing: true,
  },
  {
    id: "4",
    name: "Nigella Lawson",
    username: "nigellalawson",
    bio: "Food writer and cooking show host. Passionate about food and life.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    followers: 2900000,
    following: 110,
    isFollowing: false,
  },
];

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Garlic Parmesan Pasta",
    description:
      "A quick and delicious pasta dish that's perfect for weeknight dinners. Creamy, garlicky, and full of flavor!",
    ingredients: [
      "8 oz fettuccine pasta",
      "2 tbsp butter",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    steps: [
      "Cook pasta according to package instructions. Drain and set aside.",
      "In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
      "Pour in heavy cream and bring to a simmer. Cook for 3-4 minutes until slightly thickened.",
      "Add parmesan cheese and stir until melted and smooth.",
      "Season with salt and pepper to taste.",
      "Add cooked pasta to the sauce and toss to coat evenly.",
      "Garnish with fresh parsley and serve immediately.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "1",
    username: "jamieoliver",
    userAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-15T14:30:00Z",
    likes: 1245,
    comments: 87,
    isLiked: true,
    isSaved: true,
    shares: 342,
    isReposted: false,
  },
  {
    id: "2",
    title: "Avocado Toast with Poached Egg",
    description:
      "Start your day with this nutritious and Instagram-worthy breakfast. Simple yet satisfying!",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp white vinegar",
      "Red pepper flakes",
      "Salt and pepper to taste",
      "Fresh cilantro for garnish",
    ],
    steps: [
      "Toast the bread slices until golden brown.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl. Mash with a fork and season with salt and pepper.",
      "Bring a pot of water to a gentle simmer. Add vinegar.",
      "Crack each egg into a small bowl, then gently slide into the simmering water. Cook for 3-4 minutes for a runny yolk.",
      "Spread the mashed avocado on the toast slices.",
      "Using a slotted spoon, remove the poached eggs and place on top of the avocado toast.",
      "Sprinkle with red pepper flakes and garnish with fresh cilantro.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "3",
    username: "inagarten",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-18T08:15:00Z",
    likes: 982,
    comments: 45,
    isLiked: false,
    isSaved: true,
    shares: 156,
    isReposted: true,
  },
  {
    id: "3",
    title: "Beef Wellington",
    description:
      "A classic British dish that's perfect for special occasions. Impress your guests with this showstopper!",
    ingredients: [
      "1.5 lb beef tenderloin",
      "2 tbsp Dijon mustard",
      "8 oz mushrooms, finely chopped",
      "4 slices prosciutto",
      "1 sheet puff pastry",
      "1 egg, beaten",
      "Salt and pepper to taste",
    ],
    steps: [
      "Season beef with salt and pepper. Sear in a hot pan until browned on all sides. Let cool, then brush with Dijon mustard.",
      "Sauté mushrooms until moisture evaporates. Let cool.",
      "Lay out plastic wrap and arrange prosciutto slices. Spread mushroom mixture over prosciutto.",
      "Place beef on top and wrap tightly. Refrigerate for 30 minutes.",
      "Roll out puff pastry. Unwrap beef and place on pastry. Fold pastry around beef and seal edges.",
      "Brush with beaten egg and make small slits on top for steam to escape.",
      "Bake at 400°F for 35-40 minutes for medium-rare. Let rest before slicing.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "2",
    username: "gordonramsay",
    userAvatar:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-20T18:45:00Z",
    likes: 2341,
    comments: 156,
    isLiked: true,
    isSaved: false,
    shares: 578,
    isReposted: false,
  },
  {
    id: "4",
    title: "Chocolate Lava Cake",
    description:
      "Decadent chocolate dessert with a gooey center. Perfect for chocolate lovers!",
    ingredients: [
      "4 oz semi-sweet chocolate",
      "1/2 cup unsalted butter",
      "1 cup powdered sugar",
      "2 whole eggs",
      "2 egg yolks",
      "6 tbsp all-purpose flour",
      "1 tsp vanilla extract",
    ],
    steps: [
      "Preheat oven to 425°F. Butter and lightly flour four ramekins.",
      "Melt chocolate and butter in the microwave or in a double boiler.",
      "Stir in powdered sugar until smooth.",
      "Whisk in eggs and egg yolks, then add vanilla.",
      "Gently fold in flour until just combined.",
      "Divide batter among ramekins and place on a baking sheet.",
      "Bake for 12-14 minutes until sides are firm but center is soft.",
      "Let stand for 1 minute, then invert onto plates. Serve with ice cream.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "4",
    username: "nigellalawson",
    userAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-22T20:10:00Z",
    likes: 1876,
    comments: 92,
    isLiked: false,
    isSaved: true,
    shares: 423,
    isReposted: true,
  },
  {
    id: "5",
    title: "Fresh Summer Salad",
    description:
      "Light, refreshing salad perfect for hot summer days. Packed with seasonal vegetables and a zesty dressing!",
    ingredients: [
      "4 cups mixed greens",
      "1 cucumber, sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1 avocado, diced",
      "1/4 cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
    ],
    steps: [
      "In a large bowl, combine mixed greens, cucumber, cherry tomatoes, red onion, and avocado.",
      "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.",
      "Drizzle dressing over salad and toss gently to coat.",
      "Sprinkle feta cheese on top and serve immediately.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "3",
    username: "inagarten",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-25T12:30:00Z",
    likes: 754,
    comments: 28,
    isLiked: true,
    isSaved: false,
    shares: 187,
    isReposted: false,
  },
  {
    id: "6",
    title: "Homemade Pizza Dough",
    description:
      "The perfect base for your favorite pizza toppings. Easy to make and better than store-bought!",
    ingredients: [
      "3 1/2 cups all-purpose flour",
      "1 tsp sugar",
      "1 envelope instant dry yeast",
      "2 tsp salt",
      "1 1/2 cups warm water",
      "2 tbsp olive oil, plus more for the bowl",
    ],
    steps: [
      "In a large bowl, combine flour, sugar, yeast, and salt.",
      "Add water and olive oil, and mix until a dough forms.",
      "Knead on a floured surface for about 5 minutes until smooth and elastic.",
      "Place in an oiled bowl, cover, and let rise for 1 hour or until doubled in size.",
      "Punch down the dough and divide into 2 equal portions.",
      "Roll out each portion on a floured surface to your desired thickness.",
      "Add your favorite toppings and bake at 475°F for 10-12 minutes.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "1",
    username: "jamieoliver",
    userAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-27T16:45:00Z",
    likes: 1432,
    comments: 76,
    isLiked: true,
    isSaved: true,
    shares: 289,
    isReposted: false,
  },
  {
    id: "7",
    title: "Spicy Thai Curry",
    description:
      "A fragrant and flavorful curry that's sure to warm you up. Customize with your favorite protein!",
    ingredients: [
      "2 tbsp vegetable oil",
      "2 tbsp Thai red curry paste",
      "1 can (14 oz) coconut milk",
      "1 cup chicken or vegetable broth",
      "1 lb protein of choice (chicken, tofu, shrimp)",
      "1 red bell pepper, sliced",
      "1 zucchini, sliced",
      "1 tbsp fish sauce",
      "1 tbsp brown sugar",
      "Fresh basil leaves",
      "Lime wedges for serving",
    ],
    steps: [
      "Heat oil in a large pot over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add coconut milk and broth, and bring to a simmer.",
      "Add protein and cook until almost done.",
      "Add vegetables and cook for 3-5 minutes until tender-crisp.",
      "Stir in fish sauce and brown sugar.",
      "Garnish with fresh basil leaves and serve with lime wedges and rice.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    userId: "2",
    username: "gordonramsay",
    userAvatar:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-29T19:20:00Z",
    likes: 1876,
    comments: 104,
    isLiked: false,
    isSaved: true,
    shares: 412,
    isReposted: true,
  },
];

export const mockComments: Comment[] = [
  {
    id: "1",
    recipeId: "1",
    userId: "2",
    username: "gordonramsay",
    userAvatar:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "Absolutely delicious! I added a bit of nutmeg for extra flavor.",
    createdAt: "2023-06-15T16:45:00Z",
    likes: 45,
  },
  {
    id: "2",
    recipeId: "1",
    userId: "3",
    username: "inagarten",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "Made this for dinner tonight and it was a hit with the family!",
    createdAt: "2023-06-16T19:20:00Z",
    likes: 32,
  },
  {
    id: "3",
    recipeId: "2",
    userId: "1",
    username: "jamieoliver",
    userAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "Perfect breakfast! I added some chili flakes for a bit of heat.",
    createdAt: "2023-06-18T10:30:00Z",
    likes: 28,
  },
  {
    id: "4",
    recipeId: "3",
    userId: "4",
    username: "nigellalawson",
    userAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "This is a showstopper! Made it for Christmas dinner and everyone was impressed.",
    createdAt: "2023-06-21T14:15:00Z",
    likes: 56,
  },
  {
    id: "5",
    recipeId: "4",
    userId: "1",
    username: "jamieoliver",
    userAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "The perfect dessert for a dinner party! So decadent.",
    createdAt: "2023-06-23T09:45:00Z",
    likes: 41,
  },
];

export const mockCollections: Collection[] = [
  {
    id: "1",
    name: "Quick Weeknight Dinners",
    imageUrl:
      "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeCount: 12,
  },
  {
    id: "2",
    name: "Healthy Breakfasts",
    imageUrl:
      "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeCount: 8,
  },
  {
    id: "3",
    name: "Desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeCount: 15,
  },
  {
    id: "4",
    name: "Holiday Recipes",
    imageUrl:
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeCount: 6,
  },
];

export const categories = [
  { id: "1", name: "Breakfast", icon: "☕" },
  { id: "2", name: "Lunch", icon: "🥪" },
  { id: "3", name: "Dinner", icon: "🍽️" },
  { id: "4", name: "Desserts", icon: "🍰" },
  { id: "5", name: "Vegetarian", icon: "🥗" },
  { id: "6", name: "Vegan", icon: "🌱" },
  { id: "7", name: "Gluten-Free", icon: "🌾" },
  { id: "8", name: "Quick & Easy", icon: "⏱️" },
  { id: "9", name: "Healthy", icon: "💪" },
  { id: "10", name: "Comfort Food", icon: "🍲" },
];

export const trendingTags = [
  { id: "1", name: "#SummerRecipes", count: 1245 },
  { id: "2", name: "#QuickMeals", count: 987 },
  { id: "3", name: "#BakingFun", count: 876 },
  { id: "4", name: "#HealthyEating", count: 765 },
  { id: "5", name: "#ComfortFood", count: 654 },
];

export const notifications = [
  {
    id: "1",
    type: "like",
    userId: "2",
    username: "gordonramsay",
    userAvatar:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeId: "1",
    recipeTitle: "Creamy Garlic Parmesan Pasta",
    createdAt: "2023-06-15T16:45:00Z",
    read: false,
  },
  {
    id: "2",
    type: "comment",
    userId: "3",
    username: "inagarten",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeId: "1",
    recipeTitle: "Creamy Garlic Parmesan Pasta",
    commentText:
      "Made this for dinner tonight and it was a hit with the family!",
    createdAt: "2023-06-16T19:20:00Z",
    read: true,
  },
  {
    id: "3",
    type: "follow",
    userId: "4",
    username: "nigellalawson",
    userAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    createdAt: "2023-06-17T12:30:00Z",
    read: false,
  },
  {
    id: "4",
    type: "repost",
    userId: "2",
    username: "gordonramsay",
    userAvatar:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeId: "3",
    recipeTitle: "Beef Wellington",
    createdAt: "2023-06-21T14:15:00Z",
    read: true,
  },
  {
    id: "5",
    type: "mention",
    userId: "1",
    username: "jamieoliver",
    userAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    recipeId: "4",
    recipeTitle: "Chocolate Lava Cake",
    commentText: "This reminds me of @current's amazing dessert recipes!",
    createdAt: "2023-06-23T09:45:00Z",
    read: false,
  },
];
