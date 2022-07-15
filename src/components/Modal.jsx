import axios from 'axios';
import React from 'react';
import Warningg from "./Images/Warningg.png"

const Modal = ({ setIsActive, ID, getUsers}) => {
    const deleteUser = () => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${ID}/`)
        .then(() => getUsers())
        setIsActive(false)
    }
    return (
        <div>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-img">
                        <h1>Alerta!</h1>
                        <img src={Warningg} alt="img-warning" className="img-modal"/>
                    </div>
                    <div className="modal-info">
                        <h3>¿Desea eliminar este usuario?</h3>
                    </div>
                    <div className="btn-options">
                        <div className="btn-delet">
                            <button className="delete" onClick={() => deleteUser()}>Eliminar</button>
                        </div>
                        <div className="btn-cancel">
                            <button className="cancel" onClick={() => setIsActive(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;