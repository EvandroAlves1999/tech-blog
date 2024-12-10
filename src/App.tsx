import React from 'react';
import { Header } from './components/Header';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { usePosts } from './hooks/usePosts';

function App() {
  const { posts, addPost } = usePosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-[400px,1fr]">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <PostForm onSubmit={addPost} />
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Latest
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Most Read
                </button>
              </div>
            </div>
            <PostList posts={posts} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;