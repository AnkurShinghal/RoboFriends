import React from 'react';

const SearchBox = ({searchfeild, searchChange}) => {
    return(
    <div className='tc'>
    <input 
    className='pa2 bg-lightest-blue b--green'
    type='search'
    placeholder='Search Robots'
    onChange={searchChange}/>
    </div>
    );

}

export default SearchBox;