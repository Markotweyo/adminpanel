import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Rihana</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    
                    <div className="userShowButtom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowInfoIcon'/>
                            <span className="userShowInfoTitle">Annabecker99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowInfoIcon'/>
                            <span className="userShowInfoTitle">10.12.1997</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowInfoIcon'/>
                            <span className="userShowInfoTitle">+254 717521763</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowInfoIcon'/>
                            <span className="userShowInfoTitle">Annabecker99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowInfoIcon'/>
                            <span className="userShowInfoTitle">New York USA</span>
                        </div>
                    </div>
                   
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type='text' placeholder='Annabecker99' className='useUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>FullName</label>
                                <input type='text' placeholder='Anna Rihana' className='useUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type='text' placeholder='Annabecker99@gmail.com' className='useUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type='text' placeholder='+254 717521763' className='useUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type='text' placeholder='New York USA' className='useUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                                <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                                <input type='file' id='file' style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
