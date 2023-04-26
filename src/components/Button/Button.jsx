import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {

    render() {
        const { onClick } = this.props;
        return (
            <button type='button' className={css.Button} onClick={onClick}>
                Load more
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};