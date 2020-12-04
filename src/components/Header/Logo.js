import React from 'react';

import logoImg from './logo.png';

const styles = {
    height: 60,
    width: 'auto'
}

function Logo() {
    return(
        <div><img style={styles} src={logoImg} alt="logo" /></div>
    )
}

export default Logo;