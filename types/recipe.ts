export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
  userId: string;
  username: string;
  userAvatar: string;
  createdAt: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
  shares: number;
  isReposted: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
  followers: number;
  following: number;
  isFollowing: boolean;
}

export interface Comment {
  id: string;
  recipeId: string;
  userId: string;
  username: string;
  userAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  recipeCount: number;
  isPublic: boolean;
}
