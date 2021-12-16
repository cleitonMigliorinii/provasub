import React, { createContext, useCallback, useState } from 'react';

export const MessageContext = createContext({
    message: {},
    getMenssage: () => { }

})

const MessageProvider = ({ children }) => {

    const [message, setMessage] = useState();

    const getMessage = () => { }

    const contextValue = {
        message,
        getMessage: useCallback(() => getMessage(), [])
    }

    return (
        <MessageContext.Provider value={contextValue}>{children}</MessageContext.Provider>

    );
}

export default MessageProvider;