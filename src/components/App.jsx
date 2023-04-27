import React, { useState } from "react";
// import axios from 'axios';
import css from 'styles.module.css';
import Searchbar from "./Searchbar/Searchbar";
import { getImagesWithQuery } from "./API/API" 
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModal, setIsModal] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  
  const imagesData = async (input, page, append = 1) => {
    setIsLoading(true);
    try {
      let result = await getImagesWithQuery(input, page);
      if(append) {
        result = images.concat(result);
      }
      setImages(result);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchImages = input => {
    setPageNumber(1);
    setSearchQuery(input);
    imagesData(input, 1, false);
  };

  const loadNextPage = () => {
    let currentPage = pageNumber + 1;
    setPageNumber(currentPage);
    imagesData(searchQuery, currentPage);
  };

  const openModal = isModal => {
    setIsModal(isModal);
  };

  const closeModal = () => {
      setIsModal(null);
  };

  const escapeAction = event => {
    if (isModal !== null && event.key === 'Escape') {
      closeModal();
    }
  };

  
  return (
    <div className={css.App} tabIndex={-1} onKeyDown={escapeAction}>
      <Searchbar onSubmit={searchImages} />
        
      {error && <p>I think that something went wrong: {error.message}</p>}
      
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
        
      {!isLoading && images.length > 0 && <Button onClick={loadNextPage} />}
      {isModal !== null && ( 
        <Modal onClick={closeModal} largeImage={isModal.largeImage} tags={isModal.tags} />
      )}
          
    </div>
  );
  
};

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
