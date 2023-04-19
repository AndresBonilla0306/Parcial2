import { useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const { data } = res;
    setPosts(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <div>
      <h1>Lista de posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.url} alt={post.title} />
          <p>{post.body}</p>
        </div>
      ))}
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <button>Mostrar Datos</button>
      </form>
    </div>
  )
}

export default App
