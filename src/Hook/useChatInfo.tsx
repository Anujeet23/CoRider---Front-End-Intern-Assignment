import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../utils/chatDataSlice";

const useChatInfo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
                const data = await response.json();
                dispatch(addData(data));
                
            } catch (error) {
                console.error('Error fetching chat info:', error);
            }
        };
        fetchData();
    }, []);
};

export default useChatInfo;
