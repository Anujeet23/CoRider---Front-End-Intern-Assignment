import React from 'react'
import useChatInfo from '../Hook/useChatInfo';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
const ChatSection = () => {
    
    useChatInfo();
    const chatData = useSelector((state: any) => state?.chatInfo?.data);
    // console.log(chatData);
    // console.log(chatData?.chats[0].message);
  return (
    <div className='mt-[50px]'>
     
     <div className="mb-5 flex justify-center items-center">
    <p>{chatData?.chats[0]?.time.split(' ')[0]}</p>
</div>
    <div className="border-t border-gray-400 mb-4"></div>

    {chatData?.chats.map((chat: any) => (
        <ChatMessage key={chat.id} msg={chat.message} img={chat.sender.image} />
    ))}
</div>
  )
}

export default ChatSection;