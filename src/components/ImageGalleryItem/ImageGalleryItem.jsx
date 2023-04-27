import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import React from 'react';

const ImageGalleryItem = ({id, webImage, largeImage, tags, openModal}) => {

    return (
        <li className={css.ImageGalleryItem} key={id}>
            <img className={css.ImageGalleryItemImage} src={webImage} alt={tags} 
                onClick={() => { 
                    openModal({largeImage: largeImage, tags: tags});
                 }}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    webImage: PropTypes.string,
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func,
};

export default ImageGalleryItem;