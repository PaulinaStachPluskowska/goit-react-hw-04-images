import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
    
    onClose = event => {
        const modal = event.target.classList.contains(css.Overlay);
        if(modal) {
            this.props.onClick();
        }
    };


    render() {
        const { largeImage, tags} = this.props;
        
        return (
            <div onClick={this.onClose} className={css.Overlay}>
                <div className={css.Modal}>
                    {largeImage !== '' && <img src={largeImage} alt={tags}/>}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    largeImage: PropTypes.string,
    tags: PropTypes.string,
}