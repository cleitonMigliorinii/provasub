import React from 'react';

const styles = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        with: '50vw',
        flexWrap: 'wrap',
    },
    header: {
        padding: '15px',
        marginTop: '25px',
        fontSize: '35px',
        width: '100%',
        textAlign: 'center',
        color: '#3d98a5',
    }
};

const Layout = ({ children }) => {
    return (
        <div style={styles.content}>
            <header style={styles.header}>MENSAGEIRO</header>
            {children}
        </div>
    );
}

export default Layout;