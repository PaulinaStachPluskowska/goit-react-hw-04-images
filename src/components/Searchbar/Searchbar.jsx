import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import React, { useState } from 'react';

const Searchbar = ({onSubmit}) => {
    
    const [searchQuery, setSearchQuery] = useState('');
        
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(searchQuery);
    };

    const handleChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLbl}>
                        Search
                    </span>
                </button>
                
                <input className={css.SearchFormInput}
                    value={searchQuery}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onsubmit: PropTypes.func,
};

export default Searchbar;