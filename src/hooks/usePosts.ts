import { useState, useEffect } from 'react';
import type { Post } from '../types/Post';
import { calculateReadingTime } from '../utils/textUtils';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost: Omit<Post, 'id' | 'createdAt' | 'readingTime'>) => {
    const post: Post = {
      ...newPost,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      readingTime: calculateReadingTime(newPost.content),
    };
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return { posts, addPost };
}