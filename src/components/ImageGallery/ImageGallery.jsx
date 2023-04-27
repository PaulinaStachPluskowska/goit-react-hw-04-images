import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images, openModal}) => {
    
    return (
        <ul className={css.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    webImage={image.webformatURL}
                    largeImage={image.largeImageURL}
                    tags={image.tags}
                    openModal={openModal}
                />
            ))}
        </ul>
    );
};


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            webImage: PropTypes.string,
            largeImage: PropTypes.string,
            tags: PropTypes.string,
        })
    ),
    openModal: PropTypes.func,
};

export default ImageGallery;
