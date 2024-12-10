import React from 'react';
import { BookOpen, Code, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tech Insights</h1>
              <p className="text-indigo-100 text-sm">Your Daily Tech Knowledge Hub</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-full bg-indigo-500 bg-opacity-50 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-75"
              />
              <Search className="h-5 w-5 text-indigo-200 absolute left-3 top-2.5" />
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-indigo-100 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-100 hover:text-white transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-100 hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}