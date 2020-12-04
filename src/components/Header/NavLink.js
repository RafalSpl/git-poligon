import React from 'react';


const styles = {
    padding: 10
}

function NavLink({to, link}) {
    return(
        <a href={to} style={styles}>{link}</a>
    )
};

export default NavLink;