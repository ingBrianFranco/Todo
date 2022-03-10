import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, setOpenModal }) {
    const closeModal = () => {
        setOpenModal(false)
    }
    return ReactDOM.createPortal(
        <div className="modal" style={{ 'display': 'block' }} tabIndex="-1">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">                    
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };