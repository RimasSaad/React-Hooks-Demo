// UseTransitionDemo.tsx
// Demonstrates useTransition by filtering posts without blocking input typing.

import React, { useEffect, useState, useTransition } from 'react';
import { getAllPosts } from '../api/api';
import type { Post } from '../types/types';

const UseTransitionDemo: React.FC = () => {
  // State to hold posts, search input, and filtered posts
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  // Use useTransition to manage state updates without blocking the UI
  const [isPending, startTransition] = useTransition(); // useTransition hook

  // Fetch posts on mount
  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Show all posts initially
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Handle input change with useTransition
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value); // Urgent update 

    // Start a transition for filtering (non-urgent update)
    startTransition(() => {
      // Filter posts based on search input
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered); // Update filtered posts state
    });
  };

  return (
    <div>
      <h3>useTransition Demo: Filter Posts</h3>

      {/* Input field to filter posts */}
      <input
        type="text"
        placeholder="Search post titles..."
        value={search}
        onChange={handleSearchChange}
      />

      {/* Show loading indicator during transition */}
      {isPending && <p>Filtering posts...</p>}

      {/* Display filtered posts */}
      <ul>
        <h4>Posts titles: </h4>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitionDemo;
