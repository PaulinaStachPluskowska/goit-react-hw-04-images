import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ largeImage, tags, onClick}) => {
    
    const onClose = event => {
        const modal = event.target.classList.contains(css.Overlay);
        if(modal) {
            onClick();
        }
    };


    return (
        <div onClick={onClose} className={css.Overlay}>
            <div className={css.Modal}>
                {largeImage !== '' && <img src={largeImage} alt={tags}/>}
            </div>
        </div>
    );
};

Modal.propTypes = {
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    onClick: PropTypes.func,
};

export default Modal;