import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

type Post = {
  id: number;
  title: string;
};

const Tutorial = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = (await response.json()) as Post[];
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Tutorial;
