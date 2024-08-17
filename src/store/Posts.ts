import Posts from "@/components/posts/posts";
import { create } from "zustand";

// Define the structure of a Post
interface Post {
    id: number;
    title: string;
    description: string;
}

// Define the shape of the store
interface PostsStore {
    posts: Post[];
    addPost: (newPost: Post) => void;
    editPost: (id: number, updatePost: Partial<Post>) => void;
}

// Create the Zustand store
export const usePostsStore = create<PostsStore>((set) => ({
    posts: [
        {
            id: 1,
            title: "Post 1",
            description: "Post description",
        },
        {
            id: 2,
            title: "Post 2",
            description: "Post description",
        },
    ],

    addPost: (newPost) =>
        set((state) => ({
            posts: [...state.posts, newPost],
        })),

    editPost: (id, updatePost) => {
        set((state) => {
            const updatedPosts = state.posts.map((post) =>
                post.id === id ? { ...post, ...updatePost } : post
            );
            return { posts: updatedPosts };
        });
    },
    deletePost: (id:any)=>{
        set((state) => {
            const updatedPosts = state.posts.filter((post)=>post.id !== id);
            return {posts: updatedPosts};
        })
    }
}));
