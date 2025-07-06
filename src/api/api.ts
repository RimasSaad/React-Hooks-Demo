// api.ts
// Contains functions to fetch data from JSONPlaceholder
import axios from 'axios';
import type { Post } from '../types/types';

// Define the BASE_URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to get all posts from the API: 
// returns Promise<Post[]> - a promise that returns an array of posts
export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, { timeout: 10000 }); // 10 seconds
    console.log('All Posts:', response.data); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error; 
  }
}
