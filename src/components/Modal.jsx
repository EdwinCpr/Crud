import React from 'react';
import Warningg from "./Images/Warningg.png"

const Modal = ({setIsActive}) => {
    return (
        <div>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-img">
                        <img src={Warningg} alt="" className="img-modal"/>
                    </div>
                    <div className="modal-info">
                        <h3>¿Desea eliminar este usuario?</h3>
                    </div>
                    <div className="btn-options">
                        <div className="btn-delet">
                            <button className="delete">Eliminar</button>
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