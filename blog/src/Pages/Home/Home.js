import "./Home.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts"
import { useState } from "react";
import { useEffect } from "react";
import {URL} from "../../App"
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const{search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async()=>{
        const res = await axios.get(`${URL}/posts` +search)
        setPosts(res.data);
        
        
    }

    fetchPosts();
  },[search])
  return (
    <div>
         <Header/>
         <div className="home">
              <Posts posts={posts} />
              <SideBar/>
          </div>
    </div>
   
  )
}
