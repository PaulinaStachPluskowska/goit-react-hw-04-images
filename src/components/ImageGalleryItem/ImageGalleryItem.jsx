import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
    
    render() {
        const {id, webImage, largeImage, tags, openModal} = this.props;
        return (
            <li className={css.ImageGalleryItem} key={id}>
                <img className={css.ImageGalleryItemImage} src={webImage} alt={tags} 
                        onClick={() => { 
                            openModal({largeImage: largeImage, tags: tags});
                        }}
                />
            </li>
        );
    }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    webImage: PropTypes.string,
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func,
};