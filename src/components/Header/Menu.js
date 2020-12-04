import React, { Children } from 'react';

const styles = {
    marginBottom: 30
};

function Menu({children}) {
    return(
        <nav style={styles}>
            {children}
        </nav>
    );
}

export default Menu;