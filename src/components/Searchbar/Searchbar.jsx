import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
    state = {searchQuery: ''};
        
    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
    };

    onChange = event => {
        this.setState({searchQuery: event.target.value});
    };

    render() {
        const searchQuery = this.state.searchQuery;
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.onSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLbl}>
                            Search
                        </span>
                    </button>
                
                    <input className={css.SearchFormInput}
                       value={searchQuery}
                       onChange={this.onChange}
                       type="text"
                       autoComplete="off"
                       autoFocus
                       placeholder="Search images and photos"
                     />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onsubmit: PropTypes.func,
};