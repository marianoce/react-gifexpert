import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputVale] = useState('');
    const handleInputChange = (e) =>  {
        setInputVale(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(inputValue);
        if (inputValue.length > 2) {
            setCategories(x => [inputValue, ...x]);
            setInputVale('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
