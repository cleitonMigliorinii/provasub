import React from 'react';
import useMessage from '../../hooks/message-hooks';


const styles = {
    content: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: '#3d98a5',
        borderRadius: '25px',
        padding: 15,
        width: '500px',
        height: '500px'


    }
};

const ContentInfo = () => {

    const { message, getMessage } = useMessage();

    return (
        <div style={styles.content}>

            <p >Busque por uma nova mensagem...</p>
            <button style={{ padding: 10, fontSize: 18, color: 'white', backgroundColor: '#3d98a5', border: 'none' }} onClick={getMessage}>Buscar nova mensagem</button>

            <section style={{
                padding: 25, fontSize: 18, marginTop: 25, border: '1px solid', height: 200,
                borderColor: '#3d98a5',
                borderRadius: '25px',
            }}>

                {message.slip.advice}

            </section>


        </div>
    );
}

export default ContentInfo;