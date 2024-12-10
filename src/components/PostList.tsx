import React from 'react';
import { Clock, Tag } from 'lucide-react';
import type { Post } from '../types/Post';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
              <span className="inline-flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}