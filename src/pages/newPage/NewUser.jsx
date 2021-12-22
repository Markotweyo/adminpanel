import React from 'react';
import './newuser.css';

const NewUser = () => {
    return (
        <div clasName="newUser">
            <h1 className="newUsertitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="John Smith" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Johnsmith@gmail.com" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="tel" placeholder="+254 717 521763" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York USA" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="others" value="others"/>
                        <label for="others">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
