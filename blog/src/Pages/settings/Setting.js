import Sidebar from '../../components/sidebar/SideBar'
import './setting.css'

export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingTitleUpdate">Update Your Account</span>
                <span className="settingTitleDelete">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.pexels.com/photos/716103/pexels-photo-716103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label htmlFor="fileInput">
                        <i className="SettingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="John"/>
                <label>Email</label>
                <input type="email" placeholder="john@gmail.com" />
                <label>Password</label>
                <input type="password"/>
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
