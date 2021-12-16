import { useContext } from "react";
import { MessageContext } from "../providers/provider";

const useMessage = () => {

    const { message, getMessage } = useContext(MessageContext);

    return { message, getMessage }

}

export default useMessage;