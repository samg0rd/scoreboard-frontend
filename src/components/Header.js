import React from 'react';
import HeaderStyles from '../styles/HeaderStyles'

const Header = ({sortByScore}) => {
    return (
        <HeaderStyles>
            <h1>SHUUP CODING CHALLENGE</h1>
            <button type="button" onClick={sortByScore}><i>👉</i>  Sort By Score  <i>👈</i></button>
        </HeaderStyles>
    );
};

export default Header;