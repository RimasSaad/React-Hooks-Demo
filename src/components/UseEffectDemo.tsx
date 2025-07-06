// UseEffectDemo.tsx
// This component fetches and displays a list of posts using Axios and the useEffect hook.

import React, { useEffect, useState } from 'react';
import type { Post } from '../types/types';
import { getAllPosts } from '../api/api';

const UseEffectDemo: React.FC = () => {
  // State to hold the fetched posts data, initially an empty array
  const [posts, setPosts] = useState<Post[]>([]);
  // State to hold any error messages, initially an empty string
  const [error, setError] = useState<string>(''); 
  // State to hold the loading status, initially false
  const [loading, setLoading] = useState<boolean>(false); 

  // useEffect hook runs once when the component mounts to fetch posts
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    getAllPosts()
      .then(data => {
        setPosts(data); // Update the posts state with fetched data
      }) 
      .catch(error => {
        console.error(error);
        setError('Oops! We couldn’t load the posts right now. Please try again later...');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  }, []); // Empty dependency array = runs only once on mount

  return (
    <div>
      <h3>useEffect Demo: Fetch all posts</h3>
      {loading && <p>Loading posts...</p>}
      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map(post => (
            // Render each post as a list item with title and body
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseEffectDemo;
