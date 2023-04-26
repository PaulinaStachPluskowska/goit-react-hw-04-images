import React, { Component } from "react";
import axios from 'axios';
import css from 'styles.module.css';
import { Searchbar } from "./Searchbar/Searchbar";
import { getImagesWithQuery } from "./API/API" 
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component{
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    isModal: null,
  };
  pageNumber = 1;

  
  imagesData = async searchQuery => {
    this.setState({isLoading: true});
    try {
      let result = await getImagesWithQuery(searchQuery, this.pageNumber);
      result = this.state.images.concat(result);
      this.setState({images: result, error: null});
    } catch (error) {
      this.setState({error: error});
    } finally {
      this.setState({isLoading: false});
    }
  }

  searchImages = async searchQuery => {
    this.pageNumber = 1;
    this.setState({images: [], searchQuery: searchQuery});
    this.imagesData(searchQuery);
  };

  loadNextPage = async () => {
    this.pageNumber = this.pageNumber + 1;
    this.imagesData(this.state.searchQuery);
  };

  openModal = isModal => {
    this.setState({isModal: isModal});
  };

  closeModal = () => {
      this.setState({ isModal: null });
  };

  escapeAction = event => {
    if(this.state.isModal !== null && event.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { images, isLoading, error, isModal } = this.state;

    return (
      <div className={css.App} tabIndex={-1} onKeyDown={this.escapeAction}>
        <Searchbar onSubmit={this.searchImages} />
        
        {error && <p>I think that something went wrong: {error.message}</p>}
        
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        
        {!isLoading && images.length > 0 && <Button onClick={this.loadNextPage} />}
        {isModal !== null && ( 
          <Modal onClick={this.closeModal} largeImage={isModal.largeImage} tags={isModal.tags} />
        )}
          
      </div>
    );
  }
}



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
