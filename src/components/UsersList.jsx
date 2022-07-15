import React, { useState } from "react";
import Trash from "./Images/Trash.svg"
import Edit from "./Images/Edit.svg"
import Modal from "./Modal";

const UsersList = ({ users }) => {
    const [isActive, setIsActive] = useState(false)

    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        console.log(id)
      }
    return (
        <div className="users-list">
            <h2 className="user-title">Lista de usuarios:</h2>
            <div className="card">
            {
            users.map(user =>(
                <div key={user.id} className="user-card">
                    <div className="card-name">
                        <p className="font-small"><i className="fa-solid fa-user fa"></i><b>Nombre y apellido: {user.first_name} {user.last_name}</b></p>
                    </div>
                    <div className="card-data">
                        <p className="font-small margin-top-10px"><i className="fa-solid fa-envelope fa"></i><b>Email: {user.email}</b></p>
                        <p className="margin-top-10px font-small"><i className="fa-solid fa-lock fa"></i><b>Contraseña: {user.password}</b></p>                    </div>
                    <p className="font-small margin-top-10px"><b></b><i className="padding-right-4px fa fa-birthday-cake"></i>{user.birthday}</p>
                    <div className="card-icons">
                        <button onClick={() => setIsActive(true)}><img src={Trash} alt="" className="icon-trash"/></button>
                        <button><img src={Edit} alt="" className="icon-trash"/></button>
                    </div>
                </div>
            ))
            }
            {isActive && <Modal setIsActive={setIsActive}/>}
            </div>
        </div>

    );
    
}
export default UsersList;