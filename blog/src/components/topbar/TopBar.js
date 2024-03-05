import {Link} from "react-router-dom";
import './TopBar.css'

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="TopLeft">
            <i className="topIcon" class="fa fa-facebook-square"/>
            <i className="topIcon" class="fab fa-instagram-square"/>
            <i className="topIcon" class="fa fa-pinterest-square"/>
            <i className="topIcon" class="fa fa-twitter-square"/>
        </div>
        <div className="TopMid">
            <ul className="TopList">
                <li className="TopListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="TopListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="TopListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="TopListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="TopListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="TopRight">
            {
                user ? (
                    <img className="topImg" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                ) : (
                    <ul className="TopList">
                       <li className="TopListItem"><Link className="link" to="/login">LOGIN</Link></li>
                       <li className="TopListItem"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                )
            }
            
            <i className="topIcon" class="fa fa-search"/>
        </div>
    </div>
  )
}
