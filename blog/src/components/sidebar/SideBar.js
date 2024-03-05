import { useEffect, useState } from "react"
import "./SideBar.css";
import {URL} from "../../App"
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
   const[cats,setCats] = useState([]);

   useEffect(()=> {
      const getCats = async ()=>{
         const res = await axios.get(`${URL}/categories`);
         setCats(res.data);
      }

      getCats();
   },[])
  return (
    <div className="sidebar">
       <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sideImg" src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=270&fit=crop&h=290&dpr=1" alt="img"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit facere voluptatum ut expedita
          </p>
       </div>
       <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORY</span>
          <ul className="sidebarList">
             {cats.map((c)=>(
               <Link to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
               </Link>
               
             ))}        
          </ul>
       </div>
       <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i class="fa fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fa fa-pinterest-square"></i>
                <i class="fa fa-twitter-square"></i>
            </div>
       </div>
    </div>
  )
}

